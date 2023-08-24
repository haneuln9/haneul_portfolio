//banner
const men_banner_slide = new Swiper('#men_banner_slide',{
    autoplay:{delay:5000, disableOnInteraction:false},
    loop:true,
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '#men_banner_slide .swiper-button-next',
        prevEl: '#men_banner_slide .swiper-button-prev'}
    // scrollbar:{el:'#banner_slide .swiper-scrollbar'}
});

//best item
const b_item_slide = new Swiper('#b_item_slide',{
    // autoplay:{delay:5000, disableOnInteraction:false},
    // loop:true,
    spaceBetween:94,
    slidesPerView : 4,
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '.swiper_box .swiper-button-next',
        prevEl: '.swiper_box .swiper-button-prev'}
    // scrollbar:{el:'#banner_slide .swiper-scrollbar'}
});

//new item
const b_item_slide2 = new Swiper('#b_item_slide2',{
    // autoplay:{delay:5000, disableOnInteraction:false},
    // loop:true,
    spaceBetween:94,
    slidesPerView : 4,
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '.swiper_box2 .swiper-button-next',
        prevEl: '.swiper_box2 .swiper-button-prev'}
    // scrollbar:{el:'#banner_slide .swiper-scrollbar'}
});
