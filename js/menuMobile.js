$(function(){

    $('.menu-mobile i').click(function(){
        $('#menu-items-mobile').fadeToggle()
    })

    $('.menu-mobile i.fa-bars').click(function(){
        $(this).css("display","none")
        $('.menu-mobile i.fa-times').fadeIn()
            $('.menu-mobile i.fa-times').click(function(){
                $(this).css("display","none")
                $('.menu-mobile i.fa-bars').fadeIn()
            })
    })
})