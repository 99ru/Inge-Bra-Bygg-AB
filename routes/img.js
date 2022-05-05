const {Router} = require('express')
const ImageController = require('../controllers/ImgController')
const fileUpload = require('express-fileupload')
const router = new Router()

router.post('/', fileUpload({useTempFiles:true}), ImageController.upload)

module.exports = router