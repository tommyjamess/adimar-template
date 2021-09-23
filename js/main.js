$(document).ready(function(){
            
    $("li").click( function(){

        $("li").removeClass("active")
        $("li").removeClass("secondary-active")
        $(this).addClass("active")
        $(this).prevAll().addClass("secondary-active")
    });
    
})