$('.details-images').slick({
    dots: true,
    customPaging : function(slider, i) {
        return '<span class="image-dot"><img src=""></span>';
    },
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    infinite: false,
    speed: 300,
    slidesToShow: 1
});

const imgUrls = [];

$('.details-image-item img').each(function(){
    imgUrls.push( $(this).attr('src') );
});

$('.image-dot img').each(function(index){
    $(this).attr('src', imgUrls[index]);
});


const slider = document.querySelector(".slick-dots");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});