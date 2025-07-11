const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/cloudinary');

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'marujinho',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    },
});

const uploud = multer({ storage });

module.exports = uploud;

