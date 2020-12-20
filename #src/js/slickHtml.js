$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        // Анимация
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        easing: 'ease',
        infinite: true,
        // Autoplay
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        // Свайп
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        // Центр-мод
        centerMode: false,
        variableWidth: false,
        // Ряды
        rows: 1,
        slidesPerRow: 1,
        // Вертикальный слайдер
        vertical: false,
        verticalSwiping: false,
        //Брейкпоинты
        responsive: [
            // {
            //     breakpoint: 800,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     }
            // },
            // {
            //     breakpoint: 1200,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     }
            // }
        ],
        mobileFirst: false,
        // Перемещение стрелок
        // appendArrows:$('.content'),
        // appendDots:$('.content'),



    });
});