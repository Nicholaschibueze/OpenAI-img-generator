 const express = require ('express');
 const {generateImage} = require ('./controllers/openaiController');
const req = require('express/lib/request');
const res = require('express/lib/response');
 const router = express.Router();


 router.post('/generateimage', generateImage);
    


 module.exports = router;