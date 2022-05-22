const express = require("express");
var fs = require('fs');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Routes
router.get('/user', (req, res)=>{
    const data = {
        username : 'Mariam',
        password : "123"
    }
    res.json(data);
});

router.get('/image', (req, res)=>{
    Image.find({})
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('Error: ', error);
    });

});

router.get('/recipe', (req, res)=>{
    Recipe.find({})
    .then((data)=>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('Error: ', error);
    });

});

module.exports = router;