const sharp = require('sharp');

const rotateImage = () => {
  sharp('./images/image1.jpg')
  .rotate(250)
  .toFile(__dirname + '/processed_images/rotate_image1.jpg')
}

rotateImage()