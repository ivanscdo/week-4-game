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
          
            // checks if the value (int) passed equals the counter; inception for loop cycles through all 16 attributes (0-15); "if" checks if the integer passed is the same as the number( "index" ) of the attribute...
            if (x === characterAttributesIndex) {
                // if so, function returns that attribute
                return characterAttributes[prop][nestedProp] ;
            }
              // increase counter once inside character object, but after if (ensures 0-15 index instead of 1-16);
              characterAttributesIndex++;

            // x - returned attribute
            // 0 - id: "aang", 
            // 1 - hp: 120,
            // 2 - ap: 8,
            // 3 - cap: 8
            // 4 - id: "zhao", 
            // 5 - hp: 100,
            // 6 - ap: 5,
            // 7 - cap: 5,
            // 8 - id: "azula", 
            // 9 - hp: 150, 
            // 10 - ap: 20, 
            // 11 - cap: 20, 
            // 12 - id: "ozai", 
            // 13 - hp: 180, 
            // 14 - ap: 25, 
            // 15 - cap: 25, 

        // END OF: for (const nestedProp in characterAttributes[prop]) {
        }
            
    // END OF: for (const prop in characterAttributes) {
    }

//END OF: function attributesIndex (x) {
}

// ATTACH HP TO ALL CHARACTERS -  ATTACH HP TO ALL CHARACTERS -  ATTACH HP TO ALL CHARACTERS -  ATTACH HP TO ALL CHARACTERS - 
// select id (in this case aang), then create data-hp attribute and set it equal to characterAttributes.x.hp (in this case characterAttributes.aang.hp)
$("#aang").attr("data-hp", characterAttributes.aang.hp );
// console.log("hp:",  $("#aang").attr("data-hp") );

// select hp class(aang-hp), insert into it the value from data-hp
$(".aang-hp").text( $("#aang").attr("data-hp") );

// same as above, however now using function attributesIndex();
$("#zhao").attr("data-hp", attributesIndex(5));
$(".zhao-hp").text( $("#zhao").attr("data-hp") );

$("#azula").attr("data-hp", attributesIndex(9));
$(".azula-hp").text( $("#azula").attr("data-hp") );

$("#ozai").attr("data-hp", attributesIndex(13));
$(".ozai-hp").text( $("#ozai").attr("data-hp") );

// // TEST ap before and after hero click, see line 154
// console.log("ap before hero click:",  $("#aang").attr("data-ap") );

// SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO - 
// select div.pick-character, when user clicks on .character within div.pick-character, execute function
// function: this=the .character the user clicked on, add the hero class, remove the character class, move character to div.your-character, all other characters become enemies, moved to div.enemies and add the class of enemy
$(".pick-character").on("click", ".character", function () {

    //try using .one() to fire on first click, perhaps no need to add/remove classes???

    $(this).addClass("hero");
    $(this).removeClass("character");
    $(this).appendTo(".your-character");
    $(".character").appendTo(".enemies");
    $(".character").addClass("enemy");
    // $(".character").removeClass("character");


    // attaches corresponding ap to .hero
    $(".hero").attr("id", function() {
        // if/else if loop to figure out which character was clicked to attach corresponding ap (ap not cap since this is hero)
        // if ( $(this).attr("id") === characterAttributes.aang.id ) {
        //     // console.log("hero aang!");
        //     // console.log("this:", this);
        //     $(this).attr("data-ap", characterAttributes.aang.ap);
        //     // console.log("data-ap test:", $(this).attr("data-ap") )
        //     // console.log("hp:", characterAttributes.aang.hp );
        //     // console.log("ap:", characterAttributes.aang.ap);
        //     // console.log("cap:", characterAttributes.aang.cap);
        //     console.log ( "hero", $(".hero").attr("id"), "ap", $(this).attr("data-ap") );

        // } else if ( $(this).attr("id") === characterAttributes.zhao.id ) {
        //     // console.log("hero zhao!");
        //     $(this).attr("data-ap", characterAttributes.zhao.ap);
        //     // console.log("data-ap test:", $(this).attr("data-ap") )

        // } else if ( $(this).attr("id") === characterAttributes.azula.id ) {
        //     // console.log("hero azula!");
        //     $(this).attr("data-ap", characterAttributes.azula.ap);
        //     // console.log("data-ap test:", $(this).attr("data-ap") )

        // } else if ( $(this).attr("id") === characterAttributes.ozai.id ) {
        //     // console.log("hero ozai!");
        //     $(this).attr("data-ap", characterAttributes.ozai.ap);
        //     // console.log("data-ap test:", $(this).attr("data-ap") )
        // }

        //for loop using function attributesIndex()
        for (let i = 0; i < 16; i++) {
            // check if the id of the selected(clicked) .hero (this) matches the id value in characterAttributes object
            if ( $(this).attr("id") === attributesIndex(i) ) {
                // if so, create data attribute "data-cap" and add to it the cap value from characterAttributes object; i = id, i+2 = ap
                $(this).attr("data-ap", attributesIndex(i+2) );
                console.log("hero:", $(".hero").attr("id"), "hp:", $(this).attr("data-hp"), "ap:", $(this).attr("data-ap") );
            }
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
    // $(this).addClass("villain-1");
    $(this).appendTo(".defender");
    $(".enemy").removeClass("character");

    //attaches corresponding cap to selected .villain
    $(".villain").attr("id", function() {
        //for loop instead of "if" now possible thanks to function attributesIndex();
        // cycles through all 16 attributes (0-15) in characterAttributes object
        for (let i = 0; i < 16; i++) {
            // check if the id of the selected(clicked) .villain (this) matches the id value in characterAttributes object
            if ( $(this).attr("id") === attributesIndex(i) ) {
                // if so, create data attribute "data-cap" and add to it the cap value from characterAttributes object; i = id, i+3 = cap
                $(this).attr("data-cap", attributesIndex(i+3) );
                console.log("villain:", $(".villain").attr("id"), "hp:", $(this).attr("data-hp"), "cap:", $(this).attr("data-cap"));
            }
        }

    // END OF: $(".villain").attr("id", function() {
    });

// END OF: $(".enemies").on("click", ".character", function (){
});



// // TEST: removing villain from div.defender
// $(".defender").on("click", ".villain", function() {
//     $(this).remove();

// // END OF: $(".defender").on("click", ".villain", function() {
// });



// TEST ONLY: after 1st villain defeat, adding 2nd villain from div.enemies;
// doesn't work as intended, will allow multiple enemies in defender, TEST ONLY;
// $(".enemies").on("click", ".enemy", function(){
//     $(this).addClass("villain");
//     $(this).appendTo(".defender");
//     $(this).removeClass("enemy");

// // END OF: $(".enemies").on("click", ".enemy", function(){
// });

// SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN - 
// select next villain after defeating previous villain
$(".enemies").on("click", ".enemy", function(){
    if ( $(".villain")[0] ) {
        console.log("villain in .defender");
    } else {
                
        $(this).addClass("villain");
        $(this).appendTo(".defender");
        $(this).removeClass("enemy");

        //attaches corresponding cap to selected .villain
        $(".villain").attr("id", function() {
            //for loop instead of "if" now possible thanks to function attributesIndex();
            // cycles through all 16 attributes (0-15) in characterAttributes object
            for (let i = 0; i < 16; i++) {
                // check if the id of the selected(clicked) .villain (this) matches the id value in characterAttributes object
                if ( $(this).attr("id") === attributesIndex(i) ) {
                    // if so, create data attribute "data-cap" and add to it the cap value from characterAttributes object; i = id, i+3 = cap
                    $(this).attr("data-cap", attributesIndex(i+3) );
                    console.log( "villain:", $(".villain").attr("id"), "hp:", $(".villain").attr("data-hp"), "cap", $(this).attr("data-cap") );
                }
            }
        // END OF: $(".villain").attr("id", function() {
        });

    }

// END OF: $(".enemies").on("click", ".enemy", function(){
});



// counter for attack button console.log 
var attackCounter = 1;


// ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON - 
$(".attack-button").on("click", function() {

    console.log("---street fighter II: fight!---");


    console.log("attack #:", attackCounter);
    
    console.log("---before attack---")

    // capture hp, ap and cap in variables
    var heroHP = $(".hero").attr("data-hp");
    var heroAP = parseInt( $(".hero").attr("data-ap") );
    console.log("heroHP:", heroHP);
    console.log("heroAP:", heroAP);

    // static capture of base AP for hero
    // var heroBaseAP = attributesIndex(3);
    // console.log("for loop/heroBaseAP test:", heroBaseAP);
    
    // dynamic capture of base AP for hero
    // for loop finds base AP for hero
    for (let i = 0; i < 16; i++) {
        // console.log(attributesIndex(i));
        if ( $(".hero").attr("id") === attributesIndex(i) ) {
            heroBaseAP = attributesIndex(i+2);
        }
    }

    var villainHP = $(".villain").attr("data-hp");
    var villainCAP = $(".villain").attr("data-cap");
    console.log("villainHP:", villainHP);
    console.log("villainCAP:", villainCAP);

    // // hero attack

    villainHP = villainHP - heroAP;;
    heroAP += heroBaseAP;
    $(".hero").attr("data-ap", heroAP);

    $(".villain").attr("data-hp", villainHP);

    dotVillainHP = "." + $(".villain").attr("id") + "-hp";
    poundVillain = "#" + $(".villain").attr("id");
    $(dotVillainHP).text( $(poundVillain).attr("data-hp") );    

    // // villain attack

    // check if villain has been defeated, if so hero is not attacked, if not hero is attacked;
    if ( $(".villain").attr("data-hp") > 0 ) {
        heroHP = heroHP - villainCAP;
        $(".hero").attr("data-hp", heroHP);
        // $(".hero").attr("data-ap", heroAP);
        // ^^^DEBUG!!!^^^ this placement was causing hero data-ap to not get updated after villain defeat since villain hp was < 0, moved up, immediately after/following var heroAP update

        var dotHeroHP = "." + $(".hero").attr("id") +"-hp";
        var poundHero = "#" + $(".hero").attr("id");
        $(dotHeroHP).text( $(poundHero).attr("data-hp") );

    // END OF: if ( $(".villain-1").attr("data-hp") > 0 ) {
    } else if ( $(".villain").attr("data-hp") <= 0 ) {
        console.log("enemy defeated!");
        // console.log(this);
        // $(this).remove();
        $(".villain").remove();

    // END OF: if ( $(".villain").attr("data-hp") <= 0 ) {
    }


    // attack math
    // heroHP = heroHP - villainCAP;
    // villainHP = villainHP - heroAP;;
    // heroAP += heroBaseAP;

    // add new values to hero and villain
    // $(".hero").attr("data-hp", heroHP);
    // $(".villain").attr("data-hp", villainHP);
    // $(".hero").attr("data-ap", heroAP);

    // // static push of hp (hero & villain) to page
    // $(".aang-hp").text( $("#aang").attr("data-hp") );
    // $(".zhao-hp").text( $("#zhao").attr("data-hp") );

    // dynamic push of hp for hero
    // var dotHeroHP = "." + $(".hero").attr("id") +"-hp";
    // var poundHero = "#" + $(".hero").attr("id");
    // // console.log("dotHeroHP:", dotHeroHP);
    // // console.log("poundHero:", poundHero);
    // $(dotHeroHP).text( $(poundHero).attr("data-hp") );

    // dynamic push of hp for villain
    // dotVillainHP = "." + $(".villain").attr("id") + "-hp";
    // poundVillain = "#" + $(".villain").attr("id");
    // console.log("dotVillainHP:", dotVillainHP);
    // console.log("poundVillain:", poundVillain);
    // $(dotVillainHP).text( $(poundVillain).attr("data-hp") );
        
    console.log("---after attack--");
    console.log( "heroHP:", $(".hero").attr("data-hp") );
    console.log( "heroAP:", $(".hero").attr("data-ap") );
    console.log( "villainHP:", $(".villain").attr("data-hp") );
    console.log( "villainCAP:", $(".villain").attr("data-cap") );
    attackCounter++;

    // if ( $(".villain-1").attr("data-hp") <= 0 ) {
    //     console.log("villain 1 defeated");
    // }
    // // // defeating villain
    // if ( $(".villain").attr("data-hp") <= 0 ) {
    //     console.log("enemy defeated!");
    //     // console.log(this);
    //     // $(this).remove();
    //     $(".villain").remove();
    // }





// END OF: $(".attack-button").on("click", function() {
});


// // RESET BUTTON 

$(".restart-button").click(function() {
    location.reload();
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
    // // // function takes int and returns specific character attribute, 0-15, see below
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
    //             // 0 - id: "aang", 
    //             // 1 - hp: 120,
    //             // 2 - ap: 8,
    //             // 3 - cap: 8
    //             // 4 - id: "zhao", 
    //             // 5 - hp: 100,
    //             // 6 - ap: 5,
    //             // 7 - cap: 5,
    //             // 8 - id: "azula", 
    //             // 9 - hp: 150, 
    //             // 10 - ap: 20, 
    //             // 11 - cap: 20, 
    //             // 12 - id: "ozai", 
    //             // 13 - hp: 180, 
    //             // 14 - ap: 25, 
    //             // 15 - cap: 25, 
    //         // END OF: for (const nestedProp in characterAttributes[prop]) {
    //         }
    //         // console.log( characterAttributes[prop] );
    //         // ^ logs 4 lines, 4 objects with "id:value, hp:value, ap:value, cap:value" for each character (prop in characterAttributes)   
    //     // END OF: for (const prop in characterAttributes) {
    //     }
    // //END OF: function attributesIndex (x) {
    // }
    // console.log( attributesIndex(15) );
    // ^ END OF: function attributesIndex (x) {

    // // TEST: attack sequence
    // // simple attack sequence, manual code, no loop; hero aang vs villain zhao;
    // // overall, need 4 sections: variables, math, update hp with .text(), and remove() on win/defeat
    // console.log("---street fighter II: fight!---");
    
    // console.log("-before attack-")
    // // capture hp, ap and cap in variables
    // var heroHP = $(".hero").attr("data-hp");
    // var heroAP = parseInt( $(".hero").attr("data-ap") );
    
    // // // TEST: base AP finder for .hero
    // // console.log("---for loop test---");
    // for (let i = 0; i < 16; i++) {
    //     // console.log(attributesIndex(i));
    //     if ( $(".hero").attr("id") === attributesIndex(i) ) {
    //         heroBaseAP = attributesIndex(i+2);
    //     }
    // }
    // // var heroBaseAP = attributesIndex(3);
    // // console.log("for loop/heroBaseAP test:", heroBaseAP);

    // console.log("heroHP:", heroHP);
    // console.log("heroAP:", heroAP);

    // var villainHP = $(".villain").attr("data-hp");
    // var villainCAP = $(".villain").attr("data-cap");
    // // console.log( "hero ap before attack:",  $(".hero").attr("data-ap"));
    // console.log("villainHP:", villainHP);
    // console.log("villainCAP:", villainCAP);

    // // attack math
    // heroHP = heroHP - villainCAP;
    // villainHP = villainHP - heroAP;;
    // heroAP += heroBaseAP;

    // // add new values to hero and villain
    // $(".hero").attr("data-hp", heroHP);
    // $(".villain").attr("data-hp", villainHP);
    // $(".hero").attr("data-ap", heroAP);

    // // // need loop!
    // // $(".aang-hp").text( $("#aang").attr("data-hp") );
    // // $(".zhao-hp").text( $("#zhao").attr("data-hp") );

    // // ^ TEST: for loop w/ atrributesIndex(), 
    // // automatically match data-hp to id,
    // // insert ( .text() ) to character class hp, eg .aang-hp;

    // // TEST 1
    // // fail
    // // for ( let i = 0; i < 16; i++ ) {
    // //     if ( $(".hero").attr("id") === attributesIndex(i) ) {
    // //         var dotHeroHP = "." + $(".hero").attr("id") +"-hp";
    // //         var poundHero = "#" + $(".hero").attr("id");
    // //         console.log("dotHeroHP:", dotHeroHP);
    // //         console.log("poundHero:", poundHero);
    // //         var dotTextHero = "$(" + "\"" + dotHeroHP + "\"" + ").text(" + "$(" + "\"" + poundHero + "\"" + ").attr(" + "\"" + "data" + "-" + "hp" + "\"" + "))" ;
    // //         console.log("dotTextHero:", dotTextHero); 
    // //     }
    // //     if ( $(".villain").attr("id") === attributesIndex(i) ) {
    // //         dotVillainHP = "." + $(".villain").attr("id") + "-hp";
    // //         poundVillain = "#" + $(".villain").attr("id");
    // //         console.log("dotVillainHP:", dotVillainHP);
    // //         console.log("poundVillain:", poundVillain);
    // //     }
    // //     dotTextHero;
    // // }

    // // TEST 2
    // // fail
    // //  // function textHero () {
    // //     for ( let i = 0; i < 16; i++ ) {
    // //         if ( $(".hero").attr("id") === attributesIndex(i) ) {
    // //             var dotHeroHP = "." + $(".hero").attr("id") +"-hp";
    // //             var poundHero = "#" + $(".hero").attr("id");
    // //             console.log("dotHeroHP:", dotHeroHP);
    // //             console.log("poundHero:", poundHero);
    // //             // var dotTextHero = "(" + "\"" + dotHeroHP + "\"" + ").text(" + "$(" + "\"" + poundHero + "\"" + ").attr(" + "\"" + "data" + "-" + "hp" + "\"" + "));" ;
    // //             // console.log("dotTextHero:", dotTextHero); 
    // //         }
    // //     if ( $(".villain").attr("id") === attributesIndex(i) ) {
    // //         dotVillainHP = "." + $(".villain").attr("id") + "-hp";
    // //         poundVillain = "#" + $(".villain").attr("id");
    // //         console.log("dotVillainHP:", dotVillainHP);
    // //         console.log("poundVillain:", poundVillain);
    // //     }
    // //     }
    // //     $(dotHeroHP).text( $(poundHero).attr("data-hp") );
    // //     $(dotVillainHP).text( $(poundVillain).attr("data-hp") );
    // // // return dotTextHero;
    // // // }

    // // TEST 3
    // // success! but don't need function, for, or if
    // //  function textHero () {
    // //     for ( let i = 0; i < 16; i++ ) {
    // //         if ( $(".hero").attr("id") === attributesIndex(i) ) {
    // //            var dotHeroHP = "." + $(".hero").attr("id") +"-hp";
    // //          var poundHero = "#" + $(".hero").attr("id");
    // //            console.log("dotHeroHP:", dotHeroHP);
    // //            console.log("poundHero:", poundHero);
    // //         }
    // //     }
    // // return $(dotHeroHP).text( $(poundHero).attr("data-hp") );
    // // }
    // // textHero();
    
    // // function textVillain () {
    // //     for ( let i = 0; i < 16; i++ ) {
    // //         if ( $(".villain").attr("id") === attributesIndex(i) ) {
    // //            dotVillainHP = "." + $(".villain").attr("id") + "-hp";
    // //            poundVillain = "#" + $(".villain").attr("id");
    // //            console.log("dotVillainHP:", dotVillainHP);
    // //            console.log("poundVillain:", poundVillain);
    // //         }
    // //     }
    // // return $(dotVillainHP).text( $(poundVillain).attr("data-hp") );
    // // }
    // // textVillain();

    // // TEST 4
    // // identical to test 3 without func/for/if
    //     var dotHeroHP = "." + $(".hero").attr("id") +"-hp";
    //     var poundHero = "#" + $(".hero").attr("id");
    //     console.log("dotHeroHP:", dotHeroHP);
    //     console.log("poundHero:", poundHero);
    //     $(dotHeroHP).text( $(poundHero).attr("data-hp") );

    //     dotVillainHP = "." + $(".villain").attr("id") + "-hp";
    //     poundVillain = "#" + $(".villain").attr("id");
    //     console.log("dotVillainHP:", dotVillainHP);
    //     console.log("poundVillain:", poundVillain);
    //     $(dotVillainHP).text( $(poundVillain).attr("data-hp") );
            
            
    


    
    // console.log("-after attack");
    // console.log( "hero hp:", $(".hero").attr("data-hp") );
    // console.log( "hero ap:", $(".hero").attr("data-ap") );
    // console.log( "villain hp:", $(".villain").attr("data-hp") );
    // console.log( "villain cap:", $(".villain").attr("data-cap") );

    // TEST: determine if .villain exists
    // if ( $(".villain")[0] ) {
    //     console.log("villain true");
    
    // } else {
    //     console.log("villain false");
    // }









// END OF: $(".test-button").on("click", function (){
});
    

    



// END OF: $(document).ready(function() {
});