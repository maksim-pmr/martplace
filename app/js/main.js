$(function () {


    $(".rateYo").rateYo({
        rating: 4.5,
        starWidth: "15px",
        ratedFill: "#ffc000",
        normalFill: "#fff",
        spacing: "5px"
    });

    $(".product__item-rateYo").rateYo({
        rating: 4.5,
        starWidth: "12px",
        ratedFill: "#ffc000",
        normalFill: "#fff",
        spacing: "3px"
    });



    $('select,input[type=checkbox]').styler();

    $(".product__slider-items").slick({
        prevArrow: '<button class="lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="lnr lnr-chevron-right"></button>',
        variableWidth: true,
    });

    $(".followers__slider-items").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="lnr lnr-chevron-right"></button>',
        variableWidth: true,
    });


    $(".category__aside-rangeslider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 310,
        from: 30,
        to: 300,
        prefix: "$",
    });


    $(".product__filter").on('click', function () {
        $(".product__filter-buttons").slideToggle();
    });



    $(".category__list").on('click', function () {
        $(".category__item").addClass('list');
        $(".category__list").addClass('active');
        $(".category__grid").removeClass('active');
    });

    $(".category__grid").on('click', function () {
        $(".category__item").removeClass('list');
        $(".category__grid").addClass('active');
        $(".category__list").removeClass('active');
    });




    $(".favorites__list").on('click', function () {
        $(".product__item").addClass('list');
        $(".favorites__list").addClass('active');
        $(".favorites__grid").removeClass('active');
    });

    $(".favorites__grid").on('click', function () {
        $(".product__item").removeClass('list');
        $(".favorites__grid").addClass('active');
        $(".favorites__list").removeClass('active');
    });




    $(".header__home").on("click", function (e) { //выбираем элемент при клики на который запускается функция.
        e.preventDefault(); //отменяем переход по ссылке, если нужно.
        $(".header__home-dropdown").slideToggle(200); //выбираем элемент который будет показан
        $(".header__home > a").toggleClass('active');
        $(document).mouseup(function (e) {
            // событие клика по веб-документу
            let div = $(".header__home"); // тут указываем ID элемента
            if (
                !div.is(e.target) && // если клик был не по нашему блоку
                div.has(e.target).length === 0
            ) {
                $(".header__home-dropdown").hide(100); // скрываем его
                $(".header__home > a").removeClass('active');
            }
        });
    });


    $(".all__products").on("click", function (e) { //выбираем элемент при клики на который запускается функция.
        e.preventDefault(); //отменяем переход по ссылке, если нужно.
        $(".all__products-dropdown").slideToggle(200); //выбираем элемент который будет показан
        $(".all__products > a").toggleClass('active');
        $(document).mouseup(function (e) {
            // событие клика по веб-документу
            let div = $(".all__products"); // тут указываем ID элемента
            if (
                !div.is(e.target) && // если клик был не по нашему блоку
                div.has(e.target).length === 0
            ) {
                $(".all__products-dropdown").hide(100); // скрываем его
                $(".all__products > a").removeClass('active');
            }
        });
    });

    $(".wordpress__home").on("click", function (e) { //выбираем элемент при клики на который запускается функция.
        e.preventDefault(); //отменяем переход по ссылке, если нужно.
        $(".wordpress__home-dropdown").slideToggle(200); //выбираем элемент который будет показан
        $(".wordpress__home > a").toggleClass('active');
        $(document).mouseup(function (e) {
            // событие клика по веб-документу
            let div = $(".wordpress__home"); // тут указываем ID элемента
            if (
                !div.is(e.target) && // если клик был не по нашему блоку
                div.has(e.target).length === 0
            ) {
                $(".wordpress__home-dropdown").hide(100); // скрываем его
                $(".wordpress__home > a").removeClass('active');
            }
        });
    });


    $(".pages__home").on("click", function (e) { //выбираем элемент при клики на который запускается функция.
        e.preventDefault(); //отменяем переход по ссылке, если нужно.
        $(".pages__home-dropdown").slideToggle(200); //выбираем элемент который будет показан
        $(".pages__home > a").toggleClass('active');
        $(document).mouseup(function (e) {
            // событие клика по веб-документу
            let div = $(".pages__home"); // тут указываем ID элемента
            if (
                !div.is(e.target) && // если клик был не по нашему блоку
                div.has(e.target).length === 0
            ) {
                $(".pages__home-dropdown").hide(100); // скрываем его
                $(".pages__home > a").removeClass('active');
            }
        });
    });




    $('.profile__adaptive-icon').on('click', function () {
        $('.header__inner-content').toggleClass('active');
    });




    $('.menu-inner__list--btn').on('click', function () {
        $('.menu-inner__list').slideToggle();
        $('.menu-inner__list--btn').toggleClass('active');
    });


    $('.single__product-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single__product-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single__product-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.blog__aside-posts .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.blog__aside-posts').find('.tab-item').removeClass('active-tab').hide();
        $('.blog__aside-posts .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });



    new WOW().init();


    $("#ff").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 2500);
    });



    var mixer = mixitup(".product__items, .category__items");



});