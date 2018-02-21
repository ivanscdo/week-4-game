$(document).ready(function() {

$(".pick-character").on("click", ".character", function () {

    $(this).addClass("hero");
    $(this).removeClass("character");
    $(this).appendTo(".your-character");
    $(".character").appendTo(".enemies");
    $(".character").addClass("enemy");
    // $(".character").removeClass("character");

    var numberOfClasses = $(this).prop("classList");
    console.log("this element's class:", $(this).attr("class") );
    console.log(numberOfClasses);

});

$(".enemies").on("click", ".character", function (){
    $(this).addClass("villain");
    $(this).appendTo(".defender");
    $(".enemy").removeClass("character");

});

$(".defender").on("click", ".villain", function() {
    $(this).remove();
});

// $(".enemies").on("click", ".enemy", function(){
//     $(this).addClass("villain");
//     $(this).appendTo(".defender");
//     $(this).removeClass("enemy");
// });
    
    



// end of: $(document).ready(function() {
});