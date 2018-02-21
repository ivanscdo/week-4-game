$(document).ready(function() {

var counters = {
    characterClick: 0
};


$("body").on("click", ".character", function () {
    // console.log("clicked character");
    // console.log( $(this).attr("id")  );
    // if ( $(this).attr("id") === "azula" ){
    //     console.log("this is azula!");
    // }
    while (counters.characterClick === 0) {
        $(this).addClass("hero");
        counters.characterClick++;
        $(this).appendTo(".your-character");
        var numberOfClasses = [];
        numberOfClasses.push($(this).attr("class"));

    }
    console.log("this element's class:", $(this).attr("class") );
    console.log("counter.characterClick:", counters.characterClick);
    console.log(numberOfClasses);



});
    
    




});