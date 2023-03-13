// banner slider js
var swiper = new Swiper(".banner__slider", {
    autoplay: {
        delay: 3000,
    },
});
// swiper slider ends here
// tours slider
var swiper = new Swiper(".tour__slider", {
    slidesPerView: 3,
    spaceBetween: 30
});
// testimonials slider
var swiper = new Swiper(".testimonials__slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        '480': {
            slidesPerView: 1
        }
    }
}); 