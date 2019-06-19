$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.overlay').toggleClass('active')
        $('.menu').toggleClass('active')
    })
});
$(document).ready(function(){
    $('.face').on("mouseenter", function(){
        $('.face').toggleClass('active')
    })
    $('.face').on("mouseleave", function(){
        $('.face').removeClass('active')
    })
})
$(document).ready(function(){
    $('.insta').on("mouseenter", function(){
        $('.insta').toggleClass('active')
    })
    $('.insta').on("mouseleave", function(){
        $('.insta').removeClass('active')
    })
})
