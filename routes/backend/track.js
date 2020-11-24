const express = require('express');
const multer = require('multer');
const ObjectID = require('mongodb').ObjectID;
const { Readable } = require('stream');
const app = express();
//const Music = require('../models/music')
//const Music = require('../models/music')
//const User = require('../models/user')
const auth = require('../../middleware/auth')
const router = new express.Router()
const mongoose = require('mongoose');
const Track = require('../../models/track');
const User = require('../../models/user');
// const list = require('../../middleware/list')
/**
 * GET /tracks/:trackID
 */

router.get('/tracks/:trackID', (req, res) => {
  try {
    var trackID = new ObjectID(req.params.trackID);
  } catch(err) {
    return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" }); 
  }

  res.set('content-type', 'audio/ogg');
  res.set('accept-ranges', 'bytes');

  const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'playList'                             // ต้องตั้งให้เหมือนกันไม่งั้นมันจะดึงไม่ถูกตัวของ collection 
  });

  let downloadStream = bucket.openDownloadStream(trackID);

  downloadStream.on('data', (chunk) => {
    res.write(chunk);     /// chunk
  });

  downloadStream.on('error', () => {
    res.sendStatus(404);
  });

  downloadStream.on('end', () => {
    res.end();
  });
});

/**
 * POST /tracks
 */
router.post('/tracks',auth, async (req, res) => {
  const storage = multer.memoryStorage()
  const upload = multer({ storage: storage, limits: { fields: 1, fileSize: 90000000, files: 1, parts: 2 }});
  upload.single('track')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: "Upload Request Validation Failed" });
    } else if(!req.body.name) {
      return res.status(400).json({ message: "No track name in request body" });
    }

    try {
      let trackName = req.body.name;
      /// Readable streams will store data in an internal buffer 
    // Covert buffer to Readable Stream
    const readableTrackStream = new Readable();
    readableTrackStream.push(req.file.buffer);        // Chunk of data to push into the read queue
    readableTrackStream.push(null);    //  Passing chunk as null signals the end of the stream (EOF), after which no more data can be written
    
    // Constructor for a streaming GridFS interface
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: 'playList'                             // ต้องตั้งให้เหมือนกันไม่งั้นมันจะดึงไม่ถูกตัวของ collection 
    });

    let uploadStream = bucket.openUploadStream(trackName);  // Returns a writable stream (GridFSBucketWriteStream) for writing buffers to GridFS
    let id = uploadStream.id; 
    
    const track = new Track({
      ...req.body,
      userCreate : req.user._id,
      trackID : uploadStream.id,
    })
    track.save();
    
    readableTrackStream.pipe(uploadStream); //  stream.pipe() method is called on a readable stream, adding this writable to its set of destinations.
    uploadStream.on('error', () => {
      return res.status(500).json({ message: "Error uploading file" });
    });

    uploadStream.on('finish', () => {
      return res.status(201).send(track)
    });
    }
    catch (e) {
      throw new Error(e)
    }

  });
});


module.exports = router