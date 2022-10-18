const card = document.querySelector('.header_cards')

console.log(card)

card.addEventListener('mousemove', rotate)

function rotate(event) {
    console.log(card)
    const cardHover = this.querySelector('.card_hover');
    const halfHeight = cardHover.offsetHeight / 2;
    console.log(halfHeight)
    cardHover.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 50 + 'deg)  rotateY(' + -(event.offsetX - halfHeight) / 50 + 'deg)'
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    centeredSlides: true,
});

$('.category_button').click(function() {
    $(this).toggleClass('category_button_active');
});

function countDown() {
    var seconds = 70997;
    var timer = setInterval(function() {
        if (seconds > 0) {
            seconds--;
            var h = seconds / 3600 ^ 0,
                m = (seconds - h * 3600) / 60 ^ 0,
                s = seconds - h * 3600 - m * 60,
                time = (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " ";
            $(".header_card_time").text(time);
        } else {
            clearInterval(timer);
        }
    }, 1000);
}
$(function() {
    countDown()
});

var skroll = new Skroll()
    .add(".header_cards", {
        animation: "fadeInRight",
        duration: 600
    })
    .add(".header_content", {
        animation: "fadeInLeft",
        duration: 600
    })
    .add(".animation_1", {
        animation: "zoomIn",
        duration: 300
    })
    .add(".animation_2", {
        animation: "zoomIn",
        duration: 800
    })
    .add(".animation_3", {
        animation: "zoomIn",
        duration: 100
    })
    .add(".animation_4", {
        animation: "zoomIn",
        duration: 1000
    })
    .add(".animation_5", {
        animation: "zoomIn",
        duration: 500
    })
    .add(".swiper", {
        animation: "fadeInUp",
        duration: 1000
    })
    .add(".an_block_left", {
        animation: "fadeInLeft",
        duration: 800
    })
    .add(".an_block_right", {
        animation: "fadeInRight",
        duration: 800
    })
    .init();