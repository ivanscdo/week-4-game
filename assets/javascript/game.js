$(document).ready(function() {


// object with attributes for each character
// health points - decrease after attack, cannot heal (increase)
// attack power - base attack power, used for hero only, increases by base after each attack
// counter attack power - used for villain only, remains constant, does not increase like attack power
var characterAttributes = {
    aang:{
        hp: 120,
        ap: 8,
        cap: 8
    },
    zhao:{
        hp: 100,
        ap: 5,
        cap: 5,
    },
    azula:{
        hp: 150, 
        ap: 20, 
        cap: 20, 
    },
    ozai:{
        hp: 180, 
        ap: 25, 
        cap: 25, 
    }, 
}

// test for grabbing and changing character attributes
// console.log("aang hp:", characterAttributes.aang.hp);
// console.log("aang attack on azula:", characterAttributes.azula.hp - characterAttributes.aang.ap)

//test for attack button
$(".attack-button").on("click", function() {
    console.log("azula hp:", characterAttributes.azula.hp);
    console.log("demo aang attack azula:", characterAttributes.azula.hp - characterAttributes.aang.ap);
});


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

    var numberOfClasses = $(this).prop("classList");
    console.log("this element's class:", $(this).attr("class") );
    console.log(numberOfClasses);

});

// selecting villain from div.enemies
// select div.enemies, when user clicks on .character (ie enemies since hero had character class removed) within div.enemies, execute function
// function: this=the .character the user clicked on, add villain class, remove character class, and move to div.defender.
$(".enemies").on("click", ".character", function (){
    $(this).addClass("villain");
    $(this).appendTo(".defender");
    $(".enemy").removeClass("character");

});

// test: removing villain from div.defender
$(".defender").on("click", ".villain", function() {
    $(this).remove();
});


//test: after 1st villain defeat, adding 2nd villain from div.enemies; doesn't work as intended, will allow multiple enemies in defender, test only
// $(".enemies").on("click", ".enemy", function(){
//     $(this).addClass("villain");
//     $(this).appendTo(".defender");
//     $(this).removeClass("enemy");
// });
    
    



// end of: $(document).ready(function() {
});