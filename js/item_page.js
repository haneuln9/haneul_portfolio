const detailsTab = document.querySelectorAll('.item_details_bt .details')
console.log(detailsTab)
/*하단 상품 정보 */
detailsTab.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of detailsTab)[i.classList.remove('active')]
        t.classList.add('active')
    })
})
/*신발 사이즈 */
const size = document.querySelectorAll('.size_view a')
console.log(size)
size.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of size)[i.classList.remove('active')]
        t.classList.add('active')
    })
})
/*하트 */
const likeImg = document.querySelector ('.link_pay .like a img')
console.log(likeImg)
let img_if = false
likeImg.addEventListener('click',function(e){
    e.preventDefault()
    if(img_if == false){
        likeImg.src = './imges/item_page/like_on.png'
        img_if = true
    }else{
        likeImg.src = './imges/item_page/like_off.png'
        img_if = false
    }
    
})
/*아이템 이미지 변경 */
const itemImg1 = document.querySelector('.item_details .sub_img .sub1')
const itemImg2 = document.querySelector('.item_details .sub_img .sub2')
const itemImg3 = document.querySelector('.item_details .sub_img .sub3')
const itemMain = document.querySelector('.item_details .main_img img')
console.log(itemImg1,itemImg2,itemImg3, itemMain )
itemImg1.addEventListener('click',function(e){
    e.preventDefault()
    itemMain.src = './imges/item_page/main2.png'
})
itemImg2.addEventListener('click',function(e){
    e.preventDefault()
    itemMain.src = './imges/item_page/main.png'
})
itemImg3.addEventListener('click',function(e){
    e.preventDefault()
    itemMain.src = './imges/item_page/main3.png'
})