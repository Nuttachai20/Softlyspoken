const mongoose = require('mongoose')

mongoose.connect('mongodb://new-user:O17H4ivOno2Y1zSM@softlyspoken-shard-00-00.pcgbr.mongodb.net:27017,softlyspoken-shard-00-01.pcgbr.mongodb.net:27017,softlyspoken-shard-00-02.pcgbr.mongodb.net:27017/Softlyspoken?ssl=true&replicaSet=atlas-11bg2v-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    
})