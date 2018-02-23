$(document).ready(function() {



// ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT - 
// health points(hp) - decrease after attack, cannot heal (increase)
// attack power(ap) - base attack power, used for hero only, increases by base after each attack
// counter attack power(cap) - used for villain only, remains constant, does not increase like attack power
var characterAttributes = {
    // // TEST: for in loop in test button
    // hp: 120, 
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
// END OF: var characterAttributes = {
}


// ATTRIBUTES INDEX FUNC: TAKES INT, RETURNS ATTRIBUTE - ATTRIBUTES INDEX FUNC: TAKES INT, RETURNS ATTRIBUTE - 
function attributesIndex (x) {
    // counter used to cycle through attributes; only increases after func loops through inside of nested charactersAttributes object
    let characterAttributesIndex = 0;
    // prop = characters; loops through four initial values(nested objects) in characterAttributes object
    for (const prop in characterAttributes) {
        // "inception" for loop; goes inside the each character object; characterAttributes[prop] is key! refers to individual character
        for (const nestedProp in characterAttributes[prop]) {
            // increase counter once inside character object
            characterAttributesIndex++;
            // checks if the value passed equals the counter; inception for loop cycles through all 16 attributes; "if" checks if the integer passed is the same as the number( "index" ) of the attribute
            if (x === characterAttributesIndex) {
                // if so, function returns that attribute
                return characterAttributes[prop][nestedProp] ;
            }

            // x - returned attribute
            // 1 - id: "aang", 
            // 2 - hp: 120,
            // 3 - ap: 8,
            // 4 - cap: 8
            // 5 - id: "zhao", 
            // 6 - hp: 100,
            // 7 - ap: 5,
            // 8 - cap: 5,
            // 9 - id: "azula", 
            // 10 - hp: 150, 
            // 11 - ap: 20, 
            // 12 - cap: 20, 
            // 13 - id: "ozai", 
            // 14 - hp: 180, 
            // 15 - ap: 25, 
            // 16 - cap: 25, 

        // END OF: for (const nestedProp in characterAttributes[prop]) {
        }
            
    // END OF: for (const prop in characterAttributes) {
    }

//END OF: function attributesIndex (x) {
}

// ATTACH HP TO ALL CHARACTERS -  ATTACH HP TO ALL CHARACTERS -  ATTACH HP TO ALL CHARACTERS -  ATTACH HP TO ALL CHARACTERS - 
// select id (in this case aang), then create data-hp attribute and set it equal to characterAttributes.x.hp (in this case characterAttributes.x.hp)
$("#aang").attr("data-hp", characterAttributes.aang.hp );
// console.log("hp:",  $("#aang").attr("data-hp") );

// select hp class(aang-hp), insert into it the value from data-hp
$(".aang-hp").text( $("#aang").attr("data-hp") );

// same as above, however now using function attributesIndex();
$("#zhao").attr("data-hp", attributesIndex(6));
$(".zhao-hp").text( $("#zhao").attr("data-hp") );

$("#azula").attr("data-hp", attributesIndex(10));
$(".azula-hp").text( $("#azula").attr("data-hp") );

$("#ozai").attr("data-hp", attributesIndex(14));
$(".ozai-hp").text( $("#ozai").attr("data-hp") );

// // TEST ap before and after hero click
// console.log("ap before hero click:",  $("#aang").attr("data-ap") );

// SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO - 
// select div.pick-character, when user clicks on .character within div.pick-character, execute function
// function: this=the .character the user clicked on, add the hero class, remove the character class, move character to div.your-character, all other characters become enemies, moved to div.enemies and add the class of enemy
$(".pick-character").on("click", ".character", function () {

    //try using .one() to fire on first click, perhaps no need to add/remove classes?

    $(this).addClass("hero");
    $(this).removeClass("character");
    $(this).appendTo(".your-character");
    $(".character").appendTo(".enemies");
    $(".character").addClass("enemy");
    // $(".character").removeClass("character");


    // if/else if loop to figure out which character was clicked to attach corresponding ap (ap not cap since this is hero)
    $(".hero").attr("id", function() {
        if ( $(this).attr("id") === characterAttributes.aang.id ) {
            // console.log("hero aang!");
            // console.log("this:", this);
            $(this).attr("data-ap", characterAttributes.aang.ap);
            // console.log("data-ap test:", $(this).attr("data-ap") )
            // console.log("hp:", characterAttributes.aang.hp );
            // console.log("ap:", characterAttributes.aang.ap);
            // console.log("cap:", characterAttributes.aang.cap);
            console.log ( "hero", $(".hero").attr("id"), "ap", $(this).attr("data-ap") );

        } else if ( $(this).attr("id") === characterAttributes.zhao.id ) {
            // console.log("hero zhao!");
            $(this).attr("data-ap", characterAttributes.zhao.ap);
            // console.log("data-ap test:", $(this).attr("data-ap") )

        } else if ( $(this).attr("id") === characterAttributes.azula.id ) {
            // console.log("hero azula!");
            $(this).attr("data-ap", characterAttributes.azula.ap);
            // console.log("data-ap test:", $(this).attr("data-ap") )

        } else if ( $(this).attr("id") === characterAttributes.ozai.id ) {
            // console.log("hero ozai!");
            $(this).attr("data-ap", characterAttributes.ozai.ap);
            // console.log("data-ap test:", $(this).attr("data-ap") )
        }
    // END OF: $(".hero").attr("id", function() {
    });



    // // TEST: select id aang, create data-ap attribute and set it equal to characterAttributes.aang.ap
    // $("#aang").attr("data-ap", characterAttributes.aang.ap);
    // console.log("ap after hero click:",  $("#aang").attr("data-ap") );



    // // TEST: $(this).prop("classList");
    // var numberOfClasses = $(this).prop("classList");
    // console.log("this element's class:", $(this).attr("class") );
    // console.log(numberOfClasses);

// END OF: $(".pick-character").on("click", ".character", function () {
});



// SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - 
// select div.enemies, when user clicks on .character (ie enemies since hero had character class removed) within div.enemies, execute function
// function: this=the .character the user clicked on, add villain class, remove character class, and move to div.defender.
$(".enemies").on("click", ".character", function (){
    $(this).addClass("villain");
    $(this).appendTo(".defender");
    $(".enemy").removeClass("character");

    //attaches corresponding cap to selected .villain
    $(".villain").attr("id", function() {
        //for loop instead of "if" now possible thanks to function attributesIndex();
        // cycles through all 16 attributes in characterAttributes object
        for (let i = 0; i < 16; i++) {
            // check if the id of the selected(clicked) .villain (this) matches the id value in characterAttributes object
            if ( $(this).attr("id") === attributesIndex(i) ) {
                // if so, create data attribute "data-cap" and add to it the cap value from characterAttributes object; i = id, i+3 = cap
                $(this).attr("data-cap", attributesIndex(i+3) );
                console.log( "villain", $(".villain").attr("id"), "cap", $(this).attr("data-cap") );
            }
        }

    // END OF: $(".villain").attr("id", function() {
    });

// END OF: $(".enemies").on("click", ".character", function (){
});



// TEST: removing villain from div.defender
$(".defender").on("click", ".villain", function() {
    $(this).remove();

// END OF: $(".defender").on("click", ".villain", function() {
});



// TEST ONLY: after 1st villain defeat, adding 2nd villain from div.enemies;
// doesn't work as intended, will allow multiple enemies in defender, TEST ONLY;
// $(".enemies").on("click", ".enemy", function(){
//     $(this).addClass("villain");
//     $(this).appendTo(".defender");
//     $(this).removeClass("enemy");

// // END OF: $(".enemies").on("click", ".enemy", function(){
// });



// ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON - 
$(".attack-button").on("click", function() {



// END OF: $(".attack-button").on("click", function() {
});



// TEST BUTTON -  TEST BUTTON -  TEST BUTTON -  TEST BUTTON -  TEST BUTTON -  TEST BUTTON -
$(".test-button").on("click", function (){

    // TEST to get var to match id
    // console.log(characterAttributes.aang.id);

    // TEST for grabbing and changing character attributes
    // console.log("aang hp:", characterAttributes.aang.hp);
    // console.log("aang attack on azula:", characterAttributes.azula.hp - characterAttributes.aang.ap)

    // // TEST to find id based on class, hero and villain
    // console.log( "id of hero class:", $(".hero").attr("id") );
    // console.log( "id of villain class:", $(".villain").attr("id") );
    
    // // TEST if id will equal true with variable of same name, ie #aang vs var.characterAttributes.aang
    // if ( $(".hero").attr("id") === characterAttributes.aang.id) {
    //     console.log("id matches var!");
    // }

    // // TEST for finding attributes of hero
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
    // // END OF: $(".hero").attr("id", function() {
    // });

    
    // // TEST for finding attributes of villain
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
    // // END OF: $(".villain").attr("id", function() {
    // });

    // // TEST for setting data attributes using: $("#x").attr("data-y", value of y);
    // // select id aang, create data-hp attribute and set it equal to x.aang.hp
    // $("#aang").attr("data-hp", characterAttributes.aang.hp);
    // // console.log("hp:",  $("#aang").attr("data-hp") );
    
    // // select id aang, create data-ap attribute and set it equal to x.aang.ap
    // $("#aang").attr("data-ap", characterAttributes.aang.ap);
    // // console.log("ap:",  $("#aang").attr("data-ap") );
    
    // // select class aang-hp, insert into it the value from data-hp
    // $(".aang-hp").text( $("#aang").attr("data-hp") );

    // $("#zhao").attr("data-hp", characterAttributes.zhao.hp);
    // $(".zhao-hp").text( $("#zhao").attr("data-hp") );

    // $("#azula").attr("data-hp", characterAttributes.azula.hp);
    // $(".azula-hp").text( $("#azula").attr("data-hp") );

    // $("#ozai").attr("data-hp", characterAttributes.ozai.hp);
    // $(".ozai-hp").text( $("#ozai").attr("data-hp") );

    // // TEST: for in loop using characterAttributes object, ie iteration over nested object
    // // TEST 1
    // // using characterAttributes object
    // function forInTest () {
    //     var string1 = "";
    //     for (var characters in characterAttributes) {
    //             for (var attributes in characters) {
    //                 for (var value in attributes) {
    //                     string1 = string1 + value + ": " + attributes[value] + ". ";
    //                     // string1 = string1 + attributes + ": " + characters[attributes] + ". ";
    //                 }
    //             }
    //         // string1 = string1 + characterAttributes[i];
    //         // console.log(string1);
    //     }
    //     return string1;
    // }
    // // forInTest();
    // console.log(forInTest());
    // // RETURNS: [object Object][object Object][object Object][object Object]
    // // including "hp:120" in object returns the value "120"
    // // issue seems to be nested object, need to switch to individual objects!

    // // // TEST 2 - success!!!
    // // // using test object
    // function forInTest () {
    //     var obj = {
    //         a:{
    //             d:4,
    //             e:5
    //         },
    //         b:2,
    //         c:3
    //     };
    //     // var forInTestReturn = {};
    //     // ^ test using object to store return values - fail
    //     var forInTestReturn = [];
    //     // ^ test using array to store return values success!

    //     for (const prop in obj) {
    //         if( typeof(obj[prop])  === "object"){
    //             // console.log(obj[prop], " is an object!");
    //             // for (const nestProp in prop) {
    //                 for (const nestedProp in obj[prop]) {
    //                     // console.log("nested for:", obj[prop][nestedProp] )
    //                     // ^ logs "4" and "5"!!!
    //                     // forInTestReturn += obj[prop][nestedProp];
    //                     forInTestReturn.push(obj[prop][nestedProp]);
                    
    //                 // END OF: for (const nestedProp in obj[prop]) {
    //                 }
    //                 // console.log( prop[nestProp] ); //logs "a"

    //             // }
            
    //         // END OF: if( typeof(obj[prop])  === "object"){
    //         } else if (typeof(obj[prop])  === "number" ) {
    //             // console.log(obj[prop], " is a number!");
    //             // console.log(obj[prop]); //logs "2" and "3"
    //             // forInTestReturn += obj[prop];
    //             forInTestReturn.push(obj[prop]);
            
    //         // END OF: else if (typeof(obj[prop])  === "number" ) {
    //         }
    //         // console.log( typeof(obj[prop]) );

    //     // END OF: for (const prop in obj) {
    //     }
    //     return forInTestReturn;
    //     // ^ forInTestReturn as object "{}" returns: " [object Object]4523 " - fail
    //     // ^ forInTestReturn as array "[]" returns: " [4,5,2,3] " - success!

    // // END OF: function forInTest () {
    // }
    // console.log( forInTest() );

    // // // TEST 3 - absolute success!!!
    // // // take results from test 2 and use characterAttributes object
    // // // function takes int and returns specific character attribute, 1-16, see below
    // function attributesIndex (x) {
    //     let characterAttributesIndex = 0;
    //     for (const prop in characterAttributes) {
    //         // console.log( typeof(characterAttributes[prop]) );
    //         // console.log(characterAttributes[prop]);
    //         for (const nestedProp in characterAttributes[prop]) {

    //             // console.log(nestedProp,":",characterAttributes[prop][nestedProp] );
    //             // ^logs 16 lines, goes inside the nested object
    //             // ^^ logs "id:value, hp:value, ap:value, cap:value" individually

    //             characterAttributesIndex++;
    //             if (x === characterAttributesIndex) {
    //                 return characterAttributes[prop][nestedProp] ;
    //             }

    //             // console.log(characterAttributesIndex, characterAttributes[prop][nestedProp]);
    //             // ^logs number for each attribute in each character, total of 16; tags number to attributes, ghetto index!
    //             // 1 - id: "aang", 
    //             // 2 - hp: 120,
    //             // 3 - ap: 8,
    //             // 4 - cap: 8
    //             // 5 - id: "zhao", 
    //             // 6 - hp: 100,
    //             // 7 - ap: 5,
    //             // 8 - cap: 5,
    //             // 9 - id: "azula", 
    //             // 10 - hp: 150, 
    //             // 11 - ap: 20, 
    //             // 12 - cap: 20, 
    //             // 13 - id: "ozai", 
    //             // 14 - hp: 180, 
    //             // 15 - ap: 25, 
    //             // 16 - cap: 25, 

    //         // END OF: for (const nestedProp in characterAttributes[prop]) {
    //         }

    //         // console.log( characterAttributes[prop] );
    //         // ^ logs 4 lines, 4 objects with "id:value, hp:value, ap:value, cap:value" for each character (prop in characterAttributes)
                
    //     // END OF: for (const prop in characterAttributes) {
    //     }

    // //END OF: function attributesIndex (x) {
    // }
    // console.log( attributesIndex(16) );
    // ^ END OF: function attributesIndex (x) {

    // // TEST attack sequence
    // // simple attack sequence, hero aang vs villain zhao; manual, no loop
    // // overall, need 4 sections: variables, math, update with .text(), and remove() or win/defeat
    console.log(" street fighter II: fight! ");
    var heroHP = $(".hero").attr("data-hp");
    var heroAP = parseInt( $(".hero").attr("data-ap") );
    // ^ will need to parseInt() data-ap
    var heroBaseAP = attributesIndex(3);
    // ^ will need base ap
    var villainHP = $(".villain").attr("data-hp");
    var villainCAP = $(".villain").attr("data-cap");
    console.log( "hero ap:",  $(".hero").attr("data-ap"));

    heroHP = heroHP - villainCAP;
    villainHP = villainHP - heroAP;
    heroAP = heroAP + heroBaseAP;

    $(".hero").attr("data-hp", heroHP);
    $(".villain").attr("data-hp", villainHP);
    $(".hero").attr("data-ap", heroAP);

    $(".aang-hp").text( $("#aang").attr("data-hp") );
    $(".zhao-hp").text( $("#zhao").attr("data-hp") );
    

    console.log( "hero hp:", $(".hero").attr("data-hp") );
    console.log( "villain hp:", $(".villain").attr("data-hp") );
    console.log( "hero ap:", $(".hero").attr("data-ap") );









// END OF: $(".test-button").on("click", function (){
});
    

    



// END OF: $(document).ready(function() {
});