const mongoose = require('mongoose')
const connection = mongoose.createConnection('mongodb://new-user:O17H4ivOno2Y1zSM@softlyspoken-shard-00-00.pcgbr.mongodb.net:27017,softlyspoken-shard-00-01.pcgbr.mongodb.net:27017,softlyspoken-shard-00-02.pcgbr.mongodb.net:27017/Softlyspoken?ssl=true&replicaSet=atlas-11bg2v-shard-0&authSource=admin&retryWrites=true&w=majority',)
const autoIncrement = require('mongoose-auto-increment')
const trackSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    trackID: {
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userCreate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
})

autoIncrement.initialize(connection)
trackSchema.plugin(autoIncrement.plugin, { model: 'track', field: 'trackSeq'});

const Track = new mongoose.model('track',trackSchema)
trackSchema.statics.finque = async (idSeq) => {
    const track = await Track.findOne({idSeq})
    return track
}



module.exports = Track