const fs = require('fs') // allows us to read and write files
const path = require('path') // allows us to get the path to a file


module.exports = {
  getImages: async (req, res) => {
    const images = fs.readdirSync(path.join('public', 'images'))
    res.json({images}) 
  }



}