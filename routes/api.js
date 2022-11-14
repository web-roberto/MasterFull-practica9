
const express = require('express');
const router = express.Router();
const app=require('../app.js');

var blogsRouter = require('./api/blogs');
var autoresRouter = require('./api/autores');


router.use('/blogs', blogsRouter);
router.use('/autores', autoresRouter);

module.exports = router;
