const {Router} = require('express')
const Auth = require('../middlewares/auth')
const ImageController = require('../controllers/ImgController')
const router = new Router()
const fileUpload = require('express-fileupload')

router.get('/', Auth.admin, ImageController.getAll)
router.post('/', 
  Auth.admin, 
  fileUpload({useTempFiles:true}),
  ImageController.upload
)

module.exports = router