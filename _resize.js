const sharp = require('sharp')

const resizeImage = () => {
  const resize = sharp('./images/image1.jpg')
  .resize(350, 260)
  .toFile(__dirname + '/processed_images/resize_image1.jpg')

//   console.log(resize)
}

resizeImage()