$( document ).ready(function(){
   var id=this.id;
    $('#CB3-playerInfo').hide();
    $('#CB4-playerInfo').hide();
    $('#CB5-playerInfo').hide();
//kapaki teach me how to to this smarter

});

//$(".button").click(function(e){
//    e.preventDefault();
//    $("p").hide();
//});
//$(".my-button").on("click", function(e){
//    console.log("click me mofu");
//    e.preventDefault();
//    $("p").hide();
//});
//function () {
//
//        if ( $('.custom_image:checked').length > 0) {
//            $(".playerInfo").show();
//        } else {
//            $(".playerInfo").hide();
//        }
//}


$('.custom_image').click(function() {
    var id=this.id;
    $('#'+id+'-playerInfo').slideToggle("show");
});
