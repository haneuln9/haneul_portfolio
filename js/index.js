const adver_slide = new Swiper('#adver_slide',{
    autoplay:{delay:5000, disableOnInteraction:false},
    loop:true,
    
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '#adver_slide .swiper-button-next',
        prevEl: '#adver_slide .swiper-button-prev'
    }
});
//선택자 메뉴
const sub = document.querySelectorAll('.sub')
const nav = document.querySelectorAll('nav > ul > li > .name')
console.log(sub, nav)

