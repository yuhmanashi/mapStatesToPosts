const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const AWS = require('aws-sdk');
const path = require('path')
const fs = require('fs')
const multer = require('multer')
const upload = require("../../services/photo_upload");

// const deleteImage = require("../../services/imageDelete");



router.get('/',(req, res) => res.json({ msg: "This is the photos index" })),
router.get("/test", (req, res) => res.json({ msg: "This is the photos route" }));




router.post('/upload', upload.single('uploaded_file'), async(req,res) => {
    

    res.send('Successfully uploaded')
})


module.exports = router;