var file
var image = new Image()
var sourceCanvas = document.getElementById('source-cvs')
var sourceContext = sourceCanvas.getContext('2d')
var targetCanvas = document.getElementById('target-cvs')
var targetContext = targetCanvas.getContext('2d')
var containerCanvas = document.createElement('canvas')
var containerContext = containerCanvas.getContext('2d')
image.onload = function () {
    sourceCanvas.width = image.width
    sourceCanvas.height = image.height
    sourceContext.drawImage(image, 0, 0, image.width, image.height)
}
document.getElementById('file-selector').addEventListener("change", function (e) {
    file = e.target.files[0]
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