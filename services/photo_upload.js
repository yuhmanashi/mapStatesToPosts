const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();
const s3 = new AWS.S3({
    
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
});
const path = require('path')


const upload = multer({
    storage: multerS3({
        s3: s3,
        //access control for the file
        // acl: 'public-read',
        bucket: process.env.AWS_BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname)

            cb(null, `${Date.now().toString()}_${name}`);
        },

    }),
});




module.exports = upload;