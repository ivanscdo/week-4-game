$(document).ready(function() {


// object with attributes for each character
// health points - decrease after attack, cannot heal (increase)
// attack power - base attack power, used for hero only, increases by base after each attack
// counter attack power - used for villain only, remains constant, does not increase like attack power
var characterAttributes = {
    aang:{
        id: "aang", 
        hp: 120,
        ap: 8,
        cap: 8
    },
    zhao:{
        id: "zhao", 
        hp: 100,
        ap: 5,
        cap: 5,
    },
    azula:{
        id: "azula", 
        hp: 150, 
        ap: 20, 
        cap: 20, 
    },
    ozai:{
        id: "ozai", 
        hp: 180, 
        ap: 25, 
        cap: 25, 
    } 


// end of: var characterAttributes = {
}




// selecting hero, move others to div.enemies
// select div.pick-character, when user clicks on .character within div.pick-character, execute function
// function: this=the .character the user clicked on, add the hero class, remove the character class, move character to div.your-character, all other characters become enemies, moved to div.enemies and add the class of enemy
$(".pick-character").on("click", ".character", function () {
    //try using .one() to fire on first click, perhaps no need to add/remove classes

    $(this).addClass("hero");
    $(this).removeClass("character");
    $(this).appendTo(".your-character");
    $(".character").appendTo(".enemies");
    $(".character").addClass("enemy");
    // $(".character").removeClass("character");


    // test for $(this).prop("classList");
    // var numberOfClasses = $(this).prop("classList");
    // console.log("this element's class:", $(this).attr("class") );
    // console.log(numberOfClasses);

// end of: $(".pick-character").on("click", ".character", function () {
});

// selecting villain from div.enemies
// select div.enemies, when user clicks on .character (ie enemies since hero had character class removed) within div.enemies, execute function
// function: this=the .character the user clicked on, add villain class, remove character class, and move to div.defender.
$(".enemies").on("click", ".character", function (){
    $(this).addClass("villain");
    $(this).appendTo(".defender");
    $(".enemy").removeClass("character");

// end of: $(".enemies").on("click", ".character", function (){
});

// test: removing villain from div.defender
$(".defender").on("click", ".villain", function() {
    $(this).remove();


// end of: $(".defender").on("click", ".villain", function() {
});


//test: after 1st villain defeat, adding 2nd villain from div.enemies; doesn't work as intended, will allow multiple enemies in defender, test only
// $(".enemies").on("click", ".enemy", function(){
//     $(this).addClass("villain");
//     $(this).appendTo(".defender");
//     $(this).removeClass("enemy");

// // end of: $(".enemies").on("click", ".enemy", function(){
// });


//test to get var to match id
// console.log(characterAttributes.aang.id);

// test for grabbing and changing character attributes
// console.log("aang hp:", characterAttributes.aang.hp);
// console.log("aang attack on azula:", characterAttributes.azula.hp - characterAttributes.aang.ap)

// test for attack button
$(".attack-button").on("click", function() {

// end of: $(".attack-button").on("click", function() {
});


// test button 
$(".test-button").on("click", function (){

    // // test to find id based on class, hero and villain
    // console.log( "id of hero class:", $(".hero").attr("id") );
    // console.log( "id of villain class:", $(".villain").attr("id") );
    
    // // test if id will equal true with variable of same name, ie #aang vs var.characterAttributes.aang
    // if ( $(".hero").attr("id") === characterAttributes.aang.id) {
    //     console.log("id matches var!");
    // }

    // //test for finding attributes of hero
    // $(".hero").attr("id", function() {
    //     if ( $(this).attr("id") === characterAttributes.aang.id ) {
    //         console.log("hero aang!");
    //         // console.log("this:", this);
    //         console.log("hp:", characterAttributes.aang.hp );
    //         console.log("ap:", characterAttributes.aang.ap);
    //         console.log("cap:", characterAttributes.aang.cap);

    //     } else if ( $(this).attr("id") === characterAttributes.zhao.id ) {
    //         console.log("hero zhao!");

    //     } else if ( $(this).attr("id") === characterAttributes.azula.id ) {
    //         console.log("hero azula!");

    //     } else if ( $(this).attr("id") === characterAttributes.ozai.id ) {
    //         console.log("hero ozai!");
    //     }
    // // end of: $(".hero").attr("id", function() {
    // });

    
    // // test for finding attributes of villain
    // $(".villain").attr("id", function() {
    //     if ( $(this).attr("id") === characterAttributes.aang.id ) {
    //         console.log("villain aang!");
    //     } else if ( $(this).attr("id") === characterAttributes.zhao.id ) {
    //         console.log("villain zhao!");

    //     } else if ( $(this).attr("id") === characterAttributes.azula.id ) {
    //         console.log("villain azula!");

    //     } else if ( $(this).attr("id") === characterAttributes.ozai.id ) {
    //         console.log("villain ozai!");
    //     }
    // // end of: $(".villain").attr("id", function() {
    // });

    // test for setting data attributes using: $("#x").attr("data-y", value of y);
    $("#aang").attr("data-hp", characterAttributes.aang.hp);
    console.log("hp:",  $("#aang").attr("data-hp") );
    $("#aang").attr("data-ap", characterAttributes.aang.ap);
    console.log("ap:",  $("#aang").attr("data-ap") );
    $(".aang-attributes").text( $("#aang").attr("data-hp") );




    

// end of: $(".test-button").on("click", function (){
});


    

    



// end of: $(document).ready(function() {
});