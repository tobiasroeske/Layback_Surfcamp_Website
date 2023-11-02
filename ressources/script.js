const blogImage = document.getElementById('blog-image');
const blogLink = document.getElementById('blog-link');

function zoom() {
    blogImage.style.transition = 'transform .2s';
    blogImage.style.transform = 'scale(1.05)';
    blogImage.style.filter = 'brightness(85%)';
}

blogImage.addEventListener('mouseenter', zoom);
blogImage.addEventListener('mouseout', () => {
    blogImage.style.transition = 'transform .2s';
    blogImage.style.transform = 'scale(1.0)';
    blogImage.style.filter = 'brightness(100%)';
})



//Slider

const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');

//If you change the amount of photos or you add new photos you have to also change the images array

const images = ['img-1', 'img-2', 'img-3', 'img-4', 'img-5', 'img-6', 'img-7', 'img-8', 'img-9', 'img-10', 'img-11'];


// Saves the amount of times how often the onclick event fired
let count = 0;
// As all images are already loaded it changes the display of the current image to none and the next one to block
function nextSlide () {
    document.getElementById(images[count]).style.display = 'none';
    document.getElementById(images[count+1]).style.display = 'block';
}
// thats the reverse function of nextSlide

function previousSlide () {
    document.getElementById(images[count]).style.display = 'none';
    document.getElementById(images[count - 1]).style.display = 'block';
}
// everytime the right arrow is clicked the nextSlide function gets called
arrowRight.addEventListener('click', () => {
    if ((count + 1) < images.length) {
        nextSlide();
        count++;
    } else if ((count + 1) === images.length) {
        document.getElementById(images[images.length - 1]).style.display = 'none';
        document.getElementById(images[0]).style.display = 'block';
        count = 0;
    }
})

arrowLeft.addEventListener('click', () => {
        if (count > 0) {
            previousSlide();
            count--;
        } else if (count === 0) {
            document.getElementById(images[0]).style.display = 'none';
            document.getElementById(images[images.length -1]).style.display = 'block';
            count = images.length - 1;
        }
} )









 

