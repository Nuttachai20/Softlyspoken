let mongoose = require('mongoose')
const Track = require('../../models/track')

const 

function getInfo(id) {
    const main = async() => {
        const track = await Track.find({trackSeq: id})
        
    }
}