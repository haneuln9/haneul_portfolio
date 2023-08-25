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
    slidesPerView :4,
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '.swiper_box .swiper-button-next',
        prevEl: '.swiper_box .swiper-button-prev'},
        breakpoints:{
            //해상도 :{옵션:값} 작은값에서 큰값으로 입력
            // 400:{slidesPerView:2},
            700:{slidesPerView:2, spaceBetween:10},//700일경우 슬라이드 2개 표시
            900:{slidesPerView:3},//900일경우 슬라이드 3개 표시
            1200:{slidesPerView:4},//1160일경우 슬라이드 4개 표시
        }
});

//new item
const b_item_slide2 = new Swiper('#b_item_slide2',{
    // autoplay:{delay:5000, disableOnInteraction:false},
    // loop:true,
    spaceBetween:94,
    slidesPerView :4,
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '.swiper_box2 .swiper-button-next',
        prevEl: '.swiper_box2 .swiper-button-prev'},
    breakpoints:{
        //해상도 :{옵션:값} 작은값에서 큰값으로 입력
        // 400:{slidesPerView:2},
        700:{slidesPerView:2},//700일경우 슬라이드 2개 표시
        900:{slidesPerView:3},//900일경우 슬라이드 3개 표시
        1160:{slidesPerView:4},//1160일경우 슬라이드 4개 표시
    }
});
