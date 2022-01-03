$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
        } else {
            $("header" ).removeClass("scrolled");
        }
    }
    onScroll();
    
    if($(window).width() <= 950) {
        $(".mobile_menu").simpleMobileMenu({
            "menuStyle": "slide",
        });
    }

    $(".tabs-menu .title-mobile").on("click", function(){
        var cont = $(this).closest(".tabs-menu");
        cont.find(".items").slideToggle();
    });
    $(".tabs-menu .item").on("click", function(){
        var cont = $(this).closest(".tabs-menu");
        cont.find(".item").removeClass("active");
   
        $(this).addClass("active");

        if($(window).width() <= 950) {
            var text = $(this).text();
            cont.find(".title-mobile").text(text);
            cont.find(".items").slideToggle();
        }
    });

    $(".open-button").on("click", function(){
        var cont = $(this).closest(".sidebar");
        cont.toggleClass("open");
    });

    $(".share .title").on("click", function(){
        var icons = $(this).parent().find(".icons-wrapper");
        icons.slideToggle();
    });

    $(document).click(function(event) { 
        $target = $(event.target);
        if(!$target.closest('.share').length) {
            $(".share .icons-wrapper").slideUp();  
        }
    });

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );
});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}