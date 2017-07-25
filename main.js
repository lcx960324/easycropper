var image = new Image()
var sourceCanvas = document.getElementById('source-cvs')
var sourceContext = sourceCanvas.getContext('2d')
var containerCanvas = document.createElement('canvas')
var containerContext = containerCanvas.getContext('2d')
var targetCanvas = document.getElementById('target-cvs')
var targetContext = targetCanvas.getContext('2d')

image.onload = function () {
    sourceCanvas.width = image.width > 100 ? image.width : 100
    sourceCanvas.height = image.height > 100 ? image.height: 100
    targetCanvas.width = 100
    targetCanvas.height = 100
    sourceContext.drawImage(image, 0, 0, image.width, image.height)
    cropImage(0, 0, 100, 100)
}
function cropImage (sx, sy, ex, ey) {    
    var dataImage = sourceContext.getImageData(sx, sy, ex, ey)
    /* container canvas is used to transform canvas to image file. It won't be shown on page. */
    containerCanvas.width = 100
    containerCanvas.height = 100
    containerContext.putImageData(dataImage, 0, 0, 0, 0, 100, 100)
    var croppedImage = containerCanvas.toDataURL('image/png')
    var targetImage = new Image()
    targetImage.onload = function () {
        targetContext.drawImage(targetImage, 0, 0, 100, 100)
    }
    targetImage.src = croppedImage
}

// Emitter
document.getElementById('file-selector').addEventListener("change", function (e) {
    var file = e.target.files[0]
    var reader = new FileReader()
    reader.onload = function () {
        var url =  reader.result
        setImageURL(url)
    }
    reader.readAsDataURL(file)
})
function setImageURL(url) {
    image.src = url
}