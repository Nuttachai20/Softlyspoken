var express = require('express');
var router = express.Router();
require('../../db/mongoose')
const userRouter = require('../backend/user')
const { verify } = require('jsonwebtoken')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())
app.use(userRouter)

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;