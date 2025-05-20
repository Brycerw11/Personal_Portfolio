$(function(){

    $(".skill").on("click", function(){
        if ($(this).attr("ref-link") != null){
            window.open( $(this).attr("ref-link") )
        }
    })

})