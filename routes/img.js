const { Router } = require('express');
const ImgController = require('../controllers/ImgController');
/* const fileUpload = require('express-fileupload'); */
const router = new Router();
const Auth = require('../middlewares/auth'); 

// get all images from public/images (only for admin)
router.get('/', Auth.admin, ImgController.getImages);
