const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse') // แปลงเป็น _id  ได้ id 
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token }) // arguement แรก ได้ไอดี 
        if (!user) {
            throw new Error()
        }
        req.token = token //  token ที่เราใช้
        req.user = user    // user ของเรา กำหนดเพื่อจะได้รู้ว่า login Success
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth