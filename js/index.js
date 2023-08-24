const adver_slide = new Swiper('#adver_slide',{
    autoplay:{delay:5000, disableOnInteraction:false},
    loop:true,
    
    navigation: {//이전 다음 버튼 동작 하게 하기
        nextEl: '#adver_slide .swiper-button-next',
        prevEl: '#adver_slide .swiper-button-prev'
    }
});
const banner_slide = new Swiper('#banner_slide',{
    autoplay:{delay:5000, disableOnInteraction:false},
    loop:true,
    scrollbar:{el:'#banner_slide .swiper-scrollbar'}
});
//선택자 메뉴
const sub = document.querySelectorAll('.sub')
const gnb = document.querySelectorAll('nav > ul > li')
// console.log(sub, gnb)

for(let i of sub){i.style.display = 'none'}
for(let i of gnb){
    i.addEventListener('mouseover',function(e){
        e.preventDefault()
        console.log(i.lastElementChild)
        i.lastElementChild.style.display = 'flex'
    })
    i.addEventListener('mouseout',function(){
        i.lastElementChild.style.display = 'none'
    })
}
/*-------------------------------------------------------------*/
/*m_nav */
const m_nav_open = document.querySelector ('.m_nav_open')
const m_nav = document.querySelector('.m_nav')
const close = document.querySelector('#close')
// const m_sub1 = document.querySelectorAll('.m_sub1')
// const m_name = document.querySelectorAll('.m_nav_open > ul > li')
console.log(m_nav_open, m_nav, close, /*m_sub1, m_name*/ )
m_nav_open.style.display = 'none'

m_nav.addEventListener('click',function(){
    m_nav_open.style.display = 'block'
})
close.addEventListener('click',function(){
    m_nav_open.style.display = 'none'
})