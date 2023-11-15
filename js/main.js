$(document).ready(function(){
    // 헤더-------------
    $('nav').mouseenter(function(){
        $('.sub').slideDown()
    })
    $('.sub-inner').mouseleave(function(){
        $('.sub').slideUp(400)
    })

 
})