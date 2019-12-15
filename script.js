$(document).ready(function() {
    var $element = $("#fullpage").children('.section');
    var elemCount = $("#fullpage").children('.section').length;
    var current_elem = 0;
    var slideSpeed = 500;
    
    $(document).on('mousewheel', function(event){
        var scrollpos = $(window).scrollTop();
        var sliderpos = Math.round($("#fullpage").offset().top);
            console.log(event.deltaY, event.deltaX, event.deltaFactor)

            if(event.deltaY == -1 && scrollpos < sliderpos){
                if($("#fullpage").visible(true)){
                    $('html, body').animate({
                    scrollTop: $($element[current_elem]).offset().top
                    }, slideSpeed);
                    $($element[current_elem]).addClass("active");
                }
            }else if(event.deltaY == -1 && scrollpos >= sliderpos && $element.is(".active") && current_elem == elemCount -1){
        
                $element.removeClass("active");   
                
            }else if(event.deltaY == -1 && scrollpos >= sliderpos && $element.is(".active")){
                
                kbc();
                function kbc() {
                    current_elem += 1;
                }
                $element.removeClass("active");
                $($element[current_elem]).addClass("active");
                $('html, body').animate({
                    scrollTop: $($element[current_elem]).offset().top
                }, slideSpeed);

            }else if(event.deltaY == 1 && scrollpos > sliderpos && $element.is(".active")){
                
                kbc();
                function kbc() {
                    current_elem -= 1;
                }
                $element.removeClass("active");
                $($element[current_elem]).addClass("active");
                $('html, body').animate({
                    scrollTop: $($element[current_elem]).offset().top
                }, slideSpeed);
                

            }else if(event.deltaY == 1 && scrollpos > sliderpos){
                if($("#fullpage").visible(true)){
                    kbc();
                    function kbc() {
                        current_elem = elemCount -1;
                    }
                    $element.removeClass("active");
                    $($element[current_elem]).addClass("active");
                    $('html, body').animate({
                        scrollTop: $($element[current_elem]).offset().top
                    }, 500);
                }
                
                

            }
                
            else if($("#fullpage").visible() == false){

                kbc();
                function kbc() {
                    current_elem = 0;
                }
                
            }
        
        // var scroll = $(".gim").offset().top;
        // var el = document.getElementsByClassName("gim")[0];
        
    });

   

    
});
