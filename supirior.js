$(document).ready(function(){
    var measureHeight = 0;
    var viewport = Number($(window).height());

    $(window).scroll(function(){
        var curheight = $(window).scrollTop();
        var top = Number($(".daughter").offset().top - curheight);
        elemHeight = Number($(".daughter").height());
        if(curheight > measureHeight == true){
            //Scroll Down code
            console.log("Down"+ top);
            if(top < (elemHeight/100*40)*-1 ){
                $(".daughter").removeClass("start animated fadeInRight");
                $(".daughter").addClass("stop animated fadeOutLeft");
                console.log("Down-")
            }else if(top < viewport-(elemHeight/100*59) == true){
                $(".daughter").removeClass("stop animated fadeOutLeft");
                $(".daughter").addClass("start animated fadeInRight");
                console.log("Down+")
            }
            
        }else{
            // Scroll up code
            console.log("Up" + top)
            if(top > viewport-(elemHeight/100*71) == true){
                $(".daughter").removeClass("start animated fadeInRight");
                $(".daughter").addClass("stop animated fadeOutLeft");
                console.log("up-");
            }else if(top > (elemHeight/100*70)*-1){
                $(".daughter").removeClass("stop animated fadeOutLeft");
                $(".daughter").addClass("start animated fadeInRight");
                console.log("up+");
            }
        }

        measureHeight = curheight;
        
    })
});
