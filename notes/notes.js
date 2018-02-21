// // v1.1.1
// // problem 1.1.1 solution

// $(document).ready(function() {

//     selectHero();
    
//     function selectHero () {     
//             $(".aang").on("click", function (){
//                 $(".aang").appendTo(".your-character");
//                 // alert("clicking aang");
//                 $(".zhao").appendTo(".enemies");
//                 $(".azula").appendTo(".enemies");
//                 $(".ozai").appendTo(".enemies");
//             });
//         }
    
//     // selectHero();
    
//     function selectVillian () {
//         $(".zhao").on("click", function(){
//             $(".aang").appendTo(".your-character");
//             // alert("clicking aang");
//             $(".zhao").appendTo(".defender");
//             $(".azula").appendTo(".enemies");
//             $(".ozai").appendTo(".enemies");
//         });
//     }
    
//     selectVillian();
    
    
//     });

// // v1.2.1
// // problem 1.2.1 solution
// $(document).ready(function() {

//     var counters = {
//         characterClick: 0
//     };
    
    
//     $("body").on("click", ".character", function () {
//         // console.log("clicked character");
//         // console.log( $(this).attr("id")  );
//         // if ( $(this).attr("id") === "azula" ){
//         //     console.log("this is azula!");
//         // }
//         while (counters.characterClick === 0) {
//             $(this).addClass("hero");
//             $(this).removeClass("character");
//             $(this).appendTo(".your-character");
//             $(".character").appendTo(".enemies");
//             counters.characterClick++;
    
//             var numberOfClasses = $(this).prop("classList");
//             // numberOfClasses.push( $(this).attr("class").split("") );
//             // numberOfClasses.push( $(this).prop("classList") );
    
//         }
//         console.log("this element's class:", $(this).attr("class") );
//         // console.log("counter.characterClick:", counters.characterClick);
//         console.log(numberOfClasses);
//     });
//     });




// // v1.2.2
// // problem 1.2.2 solution
// $(document).ready(function() {

//     // var counters = {
//     //     characterClick: 0
//     // };
    
    
//     $("body").on("click", ".character", function () {
    
//         // while (counters.characterClick === 0) {
//             $(this).addClass("hero");
//             $(this).removeClass("character");
//             $(this).appendTo(".your-character");
//             $(".character").appendTo(".enemies");
//             $(".character").addClass("enemy");
            
//             // counters.characterClick++;
    
//             var numberOfClasses = $(this).prop("classList");
//         // }
    
//         // while (counters.characterClick === 1) {
//         //     $(this).addClass("villain");
//         //     $(".villain").appendTo(".defender");
    
//         //     counters.characterClick++;
    
//         // }
    
//         console.log("this element's class:", $(this).attr("class") );
//         // console.log("counter.characterClick:", counters.characterClick);
//         console.log(numberOfClasses);
    
//     });
    
//     $("body").on("click", ".enemy", function (){
//         $(this).addClass("villain");
//         $(this).appendTo(".defender");
        
//     });

//     });

