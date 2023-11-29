$(document).ready(function(){
    // 헤더-------------
    $('nav').mouseenter(function(){
        $('.sub').slideDown()
    })
    $('.sub-inner').mouseleave(function(){
        $('.sub').slideUp(400)
    })

    $('.f-site a').click(function(e){
        e.preventDefault();
        $('.site ul').toggle()
    })
})