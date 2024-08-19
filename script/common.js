//pc 용 nav .gnb 태그 복제 후 mobile용 태그 위치에 붙여넣기
const gnb = document.querySelector('nav .gnb')
const m_wrap = document.querySelector('.m_nav_wrap')
const gnbClone = gnb.cloneNode(true)
//복제대상.cloneNode()//괄호안 true 자식, 자손 추가 복제
console.log(gnb, m_wrap,gnbClone)
//복제 gnb 붙여넣기
m_wrap.appendChild(gnbClone)

// main-nav (jquery)
// sub, sub_bg 숨기기
$('nav .sub').hide()
$('nav .sub_bg').hide()
//2. nav 마우스 오버 시 sub 보이기 
$('nav').on('mouseover',function(){
    $('nav .sub').stop(true).slideDown(300)
    $('nav .sub_bg').stop(true).slideDown(300)
        // $('nav .sub').show()
    // $('nav .sub_bg').show()
})
$('nav').on('mouseout',function(){
    $('nav .sub').stop(true).slideUp(300)
    $('nav .sub_bg').stop(true).slideUp(300)
    // $('nav .sub').hide()
    // $('nav .sub_bg').hide()
})

//모바일 메뉴
$('.m_nav_wrap .gnb').hide();
    //0 모바일 메뉴의 현재 상태를알기위한 논리형 데이터 생성
    var m_nav_state = true;
//2. 전체 메뉴 아이콘 클릭시
$('.m_nav').on('click',function(){
    m_nav_state = !m_nav_state
    console.log('현재 상태는 : ${m_nav_state}')
//2-1 (모바일 메뉴가 보이는 상태라면) 숨기기
if(m_nav_state == false) {
    $('.m_nav_wrap .gnb').show();
    //m_nav_state = true //상태 변경
}else{
//2-2 (모바일 메뉴가 보이는 상태라면) 보이기
    $('.m_nav_wrap .gnb').hide();
    //m_nav_state = false //상태변경
    }
})
/*
$('.m_nav').on('click' ,function(){
    m_nav_state = !m_nav_state
if(m_nav_state == false) {
    $('.m_nav_wrap .gnb').show();
}else{
    $('.m_nav_wrap .gnb').hide();
    }
})
 */
