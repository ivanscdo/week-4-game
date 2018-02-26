$(document).ready(function() {

// ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT
// ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT -  ATTRIBUTES OBJECT
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
        cap: 8,
        name: "Avatar Aang"
    },
    zhao:{
        id: "zhao", 
        hp: 100,
        ap: 5,
        cap: 5,
        name: "Commander Zhao"
    },
    azula:{
        id: "azula", 
        hp: 150, 
        ap: 20, 
        cap: 20,
        name: "Princess Azula" 
    },
    ozai:{
        id: "ozai", 
        hp: 180, 
        ap: 25, 
        cap: 25,
        name: "Firelord Ozai"
    } 

// END OF: var characterAttributes = {
}

// counter for attack button console.log 
// also needed for .gameInfo
var counters = {
    attack: 1
    // TEST: gameInfo:  0
};

var youNeverEvenCalledMeByMyNameHero =  "";
var youNeverEvenCalledMeByMyNameVillain =  "";

var imageSourceHero = "";
var dotImageHero = "";

var imageSourceVillain = "";
var dotImageVillain = "";

// RESET BUTTON FUNC
// turns off attack button and creates reset button
function resetButton () {

    // turns off click for .attack-button
    $(".attack-button").off("click");

    // dynamically creates reset button after hero defeat (losing game) or villain defeat (winning game)
    var resetBtn = $("<button>");
    resetBtn.addClass("reset-button");
    resetBtn.text("Reset");
    resetBtn.appendTo(".reset")
    $(".reset-button").click(function() {
        location.reload();
    });

// END OF: function resetButton () {
}

function davidAllenCoeHero () {
    for (let i = 0; i < 20; i++) {
        if ( $(".hero").attr("id") === attributesIndex(i) ) {
            youNeverEvenCalledMeByMyNameHero = attributesIndex(i+4);
            // console.log( attributesIndex(i+4) );
        }
    } 
    return youNeverEvenCalledMeByMyNameHero;

//END OF: function davidAllenCoeHero () {
}

function davidAllenCoeVillain () {
    for (let i = 0; i < 20; i++) {
        if ( $(".villain").attr("id") === attributesIndex(i) ) {
            youNeverEvenCalledMeByMyNameVillain = attributesIndex(i+4);
            // console.log( attributesIndex(i+4) );
        }
    } 
    return youNeverEvenCalledMeByMyNameVillain;

//END OF: function davidAllenCoeHero () {
}

// ATTRIBUTES INDEX FUNC - ATTRIBUTES INDEX FUNC - ATTRIBUTES INDEX FUNC - ATTRIBUTES INDEX FUNC - ATTRIBUTES INDEX FUNC 
// ATTRIBUTES INDEX FUNC - ATTRIBUTES INDEX FUNC - ATTRIBUTES INDEX FUNC - ATTRIBUTES INDEX FUNC - ATTRIBUTES INDEX FUNC 
// takes int (0-15), returns attribute
function attributesIndex (x) {
    // counter used to cycle through attributes; only increases after func loops through inside of nested charactersAttributes object
    let characterAttributesIndex = 0;
    // prop = characters; loops through four initial values(nested objects) in characterAttributes object
    for (const prop in characterAttributes) {
        // "inception" for loop; goes inside the each character object; characterAttributes[prop] is key! it refers to individual character, nested prop refers to characteristic;
        for (const nestedProp in characterAttributes[prop]) {
            
            // checks if the value (int) passed equals the counter; inception for loop cycles through all 16 attributes (0-15); if statement checks if the integer passed is the same as the number( "index" ) of the attribute...
            if (x === characterAttributesIndex) {
                // ...if so, function returns that attribute
                return characterAttributes[prop][nestedProp] ;
            }
                // increase counter, inside character object but after if statement (ensures 0-15 index instead of 1-16);
                characterAttributesIndex++;

            // x - returned attribute
            // 0 - id: "aang", 
            // 1 - hp: 120,
            // 2 - ap: 8,
            // 3 - cap: 8
            // 4 - name: "Avatar Aang"
            // 5 - id: "zhao", 
            // 6 - hp: 100,
            // 7 - ap: 5,
            // 8 - cap: 5,
            // 9 - name: "Commander Zhao"
            // 10 - id: "azula", 
            // 11 - hp: 150, 
            // 12 - ap: 20, 
            // 13 - cap: 20, 
            // 14 - name: "Princess Azula"
            // 15 - id: "ozai", 
            // 16 - hp: 180, 
            // 17 - ap: 25, 
            // 18 - cap: 25, 
            // 19 - name: "Firelord Ozai"

        // END OF: for (const nestedProp in characterAttributes[prop]) {
        }
            
    // END OF: for (const prop in characterAttributes) {
    }

//END OF: function attributesIndex (x) {
}



// ATTACH HP TO ALL CHARACTERS - ATTACH HP TO ALL CHARACTERS - ATTACH HP TO ALL CHARACTERS - ATTACH HP TO ALL CHARACTERS -
// ATTACH HP TO ALL CHARACTERS - ATTACH HP TO ALL CHARACTERS - ATTACH HP TO ALL CHARACTERS - ATTACH HP TO ALL CHARACTERS -
// select id (in this case aang), then create data-hp attribute and set it equal to characterAttributes.x.hp (in this case characterAttributes.aang.hp)
$("#aang").attr("data-hp", characterAttributes.aang.hp );
// console.log("hp:",  $("#aang").attr("data-hp") );

// select hp class(aang-hp), insert into it the value from data-hp
$(".aang-hp").text( $("#aang").attr("data-hp") );

// same as above, however now using function attributesIndex();
$("#zhao").attr("data-hp", attributesIndex(6));
$(".zhao-hp").text( $("#zhao").attr("data-hp") );

$("#azula").attr("data-hp", attributesIndex(11));
$(".azula-hp").text( $("#azula").attr("data-hp") );

$("#ozai").attr("data-hp", attributesIndex(16));
$(".ozai-hp").text( $("#ozai").attr("data-hp") );

// // TEST ap before and after hero click, see line 154
// console.log("ap before hero click:",  $("#aang").attr("data-ap") );

// SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO - SELECT HERO - SELECT HERO - SELECT HERO - 
// SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO -  SELECT HERO - SELECT HERO - SELECT HERO - SELECT HERO - 
// select div.pick-character, when user clicks on .character within div.pick-character, execute function;
// function: this=.character the user clicked on, add the hero class, remove the character class, move character to div.your-character, all other characters become enemies, move enemies to div.enemies and add the class of enemy;
$(".pick-character").on("click", ".character", function () {

    //clears game info text if user clicked on attack with no enemy present
    $(".gameInfo-line1").text( " " );
    $(".gameInfo-line2").text(" ");

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

        // for loop using function attributesIndex()
        for (let i = 0; i < 20; i++) {
            // check if the id of the selected(clicked) .hero (this) matches the id value in characterAttributes object
            if ( $(this).attr("id") === attributesIndex(i) ) {
                // if so, create data attribute "data-cap" and add to it the cap value from characterAttributes object; i = id, i+2 = ap
                $(this).attr("data-ap", attributesIndex(i+2) );
                console.log("hero:", $(".hero").attr("id"), "| hp:", $(this).attr("data-hp"), "| ap:", $(this).attr("data-ap") );
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

    // change .hero image to gif
    for (let i = 0; i < 20; i++) {
        if ( $(".hero").attr("id") === attributesIndex(i) ) {
            imageSourceHero = "assets/images/" + attributesIndex(i) + ".gif";
            dotImageHero = ".img-" + attributesIndex(i);
        }
    }
    $(dotImageHero).attr("src", imageSourceHero);




// END OF: $(".pick-character").on("click", ".character", function () {
});



// SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - 
// SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - SELECT VILLAIN - 
// select div.enemies, when user clicks on .character (ie enemies since hero had character class removed) within div.enemies, execute function
// function: (this= .character the user clicked on) add villain class, remove character class, and move to div.defender.
$(".enemies").on("click", ".character", function (){

    //clears game info text if user clicked on attack with no enemy present
    $(".gameInfo-line1").text( " " );
    $(".gameInfo-line2").text(" ");
    
    $(this).addClass("villain");
    // $(this).addClass("villain-1");
    $(this).appendTo(".defender");
    $(".enemy").removeClass("character");


    //attaches corresponding cap to selected .villain
    $(".villain").attr("id", function() {
        //for loop instead of if statement now possible thanks to function attributesIndex();
        // cycles through all 16 attributes (0-15) in characterAttributes object
        for (let i = 0; i < 20; i++) {
            // check if the id of the selected(clicked) .villain(this) matches the id value in characterAttributes object...
            if ( $(this).attr("id") === attributesIndex(i) ) {
                // ...if so, create data attribute "data-cap" and add to it the cap value from characterAttributes object; i = id, i+3 = cap
                $(this).attr("data-cap", attributesIndex(i+3) );
                console.log("villain:", $(".villain").attr("id"), "| hp:", $(this).attr("data-hp"), "| cap:", $(this).attr("data-cap"));
            }
        }

    // END OF: $(".villain").attr("id", function() {
    });

    // change .villain image to gif
    for (let i = 0; i < 20; i++) {
        if ( $(".villain").attr("id") === attributesIndex(i) ) {
            imageSourceVillain = "assets/images/" + attributesIndex(i) + ".gif";
            dotImageVillain = ".img-" + attributesIndex(i);
        }
    }
    $(dotImageVillain).attr("src", imageSourceVillain);

// END OF: $(".enemies").on("click", ".character", function (){
});

// // TEST: removing villain from div.defender
// $(".defender").on("click", ".villain", function() {
//     $(this).remove();
// END OF: $(".defender").on("click", ".villain", function() {
// });

// TEST ONLY: after 1st villain defeat, adding 2nd villain from div.enemies;
// doesn't work as intended, will allow multiple enemies in defender, TEST ONLY;
// $(".enemies").on("click", ".enemy", function(){
//     $(this).addClass("villain");
//     $(this).appendTo(".defender");
//     $(this).removeClass("enemy");
// END OF: $(".enemies").on("click", ".enemy", function(){
// });



// SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN - 
// SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN -  SELECT NEXT VILLAIN - 
// select next villain after defeating previous villain
$(".enemies").on("click", ".enemy", function(){

    //clears game info text if user clicked on attack with no enemy present
    $(".gameInfo-line1").text( " " );
    $(".gameInfo-line2").text(" ");

    // prevent multiple enemies in .defender, ie multiple .villains
    // check if .villain exists, ie .enemy in .defender, ie if user clicked on .character from .enemies;
    // if so, do nothing
    if ( $(".villain")[0] ) {
        console.log(" only 1 villain in .defender!");
    // if .villain does not exist, create .villain by adding villain class to .enemy user clicked on and moving to div.defender
    } else {
                
        $(this).addClass("villain");
        $(this).appendTo(".defender");
        // $(this).removeClass("enemy");

        //attaches corresponding cap to selected .villain
        $(".villain").attr("id", function() {
            //for loop instead of "if" now possible thanks to function attributesIndex();
            // cycles through all 16 attributes (0-15) in characterAttributes object
            for (let i = 0; i < 20; i++) {
                // check if the id of the selected(clicked) .villain (this) matches the id value in characterAttributes object
                if ( $(this).attr("id") === attributesIndex(i) ) {
                    // if so, create data attribute "data-cap" and add to it the cap value from characterAttributes object; i = id, i+3 = cap
                    $(this).attr("data-cap", attributesIndex(i+3) );
                    console.log( "villain:", $(".villain").attr("id"), "| hp:", $(".villain").attr("data-hp"), "| cap:", $(this).attr("data-cap") );
                }
            //END OF: for (let i = 0; i < 20; i++) {
            }
        // END OF: $(".villain").attr("id", function() {
        });
    // END OF: else {
    }

    // change .villain image to gif
    for (let i = 0; i < 20; i++) {
        if ( $(".villain").attr("id") === attributesIndex(i) ) {
            imageSourceVillain = "assets/images/" + attributesIndex(i) + ".gif";
            dotImageVillain = ".img-" + attributesIndex(i);
        }
    }
    $(dotImageVillain).attr("src", imageSourceVillain);

// END OF: $(".enemies").on("click", ".enemy", function(){
});



// attack button click with no enemy present
// if .villain does not exist...
// if ( !$(".villain")[0] && $(".hero")[0]) {
//     // ...when user clicks on .attack-button, display "no enemy present..."
//     $(".attack-button").on("click", function(){

//         // console.log("test: villain defeated");
//         $(".gameInfo-line1").text( "Select hero and enemy from above. " );
    
//     // END OF: $(".attack-button").on("click", function(){
//     });

// //END OF: if ( !$(".villain")[0] ) {
// }


// ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON - ATTACK BUTTON - ATTACK BUTTON - 
// ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON -  ATTACK BUTTON - ATTACK BUTTON - ATTACK BUTTON - 
$(".attack-button").on("click", function() {

    // attack button click with no enemy present
    // if .villain & hero have not been chosen...
    if ( !$(".hero")[0] && !$(".villain")[0] ) {
        console.log("select hero and villain");
        $(".gameInfo-line1").text( "Select hero and enemy. " );
    
    // of hero has been chosen, but not villain...
    } else if ( $(".hero")[0] && !$(".villain")[0] ) {
        console.log("select villain")
        $(".gameInfo-line1").text( "Select enemy. " );
    
    }

    console.log("---street fighter II: fight!---");


    console.log("attack #:", counters.attack);
    
    console.log("---before attack---")

    // // capture hero hp and ap, along with villain hp and cap in variables
    var heroHP = $(".hero").attr("data-hp");
    var heroAP = parseInt( $(".hero").attr("data-ap") );
    console.log("heroHP:", heroHP);
    console.log("heroAP:", heroAP);

    // static capture of base AP for hero
    // var heroBaseAP = attributesIndex(3);
    // console.log("for loop/heroBaseAP test:", heroBaseAP);
    
    // dynamic capture of base AP for hero
    // for loop finds base AP for hero
    for (let i = 0; i < 20; i++) {
        // console.log(attributesIndex(i));
        if ( $(".hero").attr("id") === attributesIndex(i) ) {
            heroBaseAP = attributesIndex(i+2);
        }
    }

    var villainHP = $(".villain").attr("data-hp");
    var villainCAP = $(".villain").attr("data-cap");
    console.log("villainHP:", villainHP);
    console.log("villainCAP:", villainCAP);

    // BUG: if .attack-button spammed after hero is selected, but before villain is selected, heroAP will continue building up;
    // PATCH: check if .villain exists before adding heroBaseAP to heroAP, included entire hero attack sequence to keep consistency. 
    if ( !$(".villain")[0] ) {
        console.log("jurassic park: ah ah ah, you didn't say the magic word.");
    } else {

    // // hero attack

    villainHP = villainHP - heroAP;;
    heroAP += heroBaseAP;
    $(".hero").attr("data-ap", heroAP);

    $(".villain").attr("data-hp", villainHP);

    // dynamically creates push of data-hp to villain
    dotVillainHP = "." + $(".villain").attr("id") + "-hp";
    poundVillain = "#" + $(".villain").attr("id");
    $(dotVillainHP).text( $(poundVillain).attr("data-hp") );  

    }

    // // villain attack

    // check if villain has been defeated, if so hero is not attacked, if not hero is attacked;
    // > 0 villain not defeated
    if ( $(".villain").attr("data-hp") > 0 ) {
        heroHP = heroHP - villainCAP;
        $(".hero").attr("data-hp", heroHP);
        // $(".hero").attr("data-ap", heroAP);
        // ^^^DEBUG!!!^^^ this placement was causing hero data-ap to not get updated after villain defeat since villain hp was < 0; moved up, immediately following var heroAP update

        // dynamically creates push of data-hp to hero
        var dotHeroHP = "." + $(".hero").attr("id") +"-hp";
        var poundHero = "#" + $(".hero").attr("id");
        $(dotHeroHP).text( $(poundHero).attr("data-hp") );

        // .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - 
        // hero attack
        // builds string using .hero, .villain, and data-ap attr; minus heroBaseAP since data-ap is updated for next round;
        $(".gameInfo-line1").text( davidAllenCoeHero() + " attacked " + davidAllenCoeVillain() + " for " + ($(".hero").attr("data-ap")-heroBaseAP) + " damage."  );
        //villain attack
        $(".gameInfo-line2").text( davidAllenCoeVillain() + " counter attacked " + davidAllenCoeHero() + " for " + $(".villain").attr("data-cap") + " damage."  );


        if ( $(".hero").attr("data-hp") <= 0 ) {
            $(".gameInfo-line1").text( davidAllenCoeHero() + " has been defeated!" );
            $(".gameInfo-line2").text("You lose. Game over.");

            $(".hero").remove();

            resetButton();

        }


    // END OF: if ( $(".villain-1").attr("data-hp") > 0 ) {
    // <=0 villain defeated
    } else if ( $(".villain").attr("data-hp") <= 0 ) {
        console.log("enemy defeated!");
        // console.log(this);
        // $(this).remove();
        // $(".villain").remove();

        // .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo -
        // villain has been defeated dialog, pushed to .gameInfo-line1, line2 empty
        $(".gameInfo-line1").text( davidAllenCoeVillain() + " has been defeated!" );
        $(".gameInfo-line2").text(" ");

        $(".villain").remove();

        // .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo -
        // all villains defeated, winning dialog
        if ( !$(".enemy").attr("class") && !$(".hero").attr("class") ) {
            // console.log( "no enemies or hero" );
        } else if ( $(".enemy").attr("class") && $(".hero").attr("class") ) {
            // console.log("heroes", $(".hero").length, "| enemies:", $(".enemy").length );
        } else if ( !$(".enemy").attr("class") && $(".hero").attr("class" )) {
            $(".gameInfo-line2").text("All enemies have been defeated! YOU WIN!!!");
            
            resetButton();

        // END OF: else if ( !$(".enemy").attr("class") && $(".hero").attr("class" )) {
        }



    // // CONSOLE LOGS & COMMENTS (TESTS) FROM HERE TO END...
    // // CONSOLE LOGS & COMMENTS (TESTS) FROM HERE TO END...
    // // CONSOLE LOGS & COMMENTS (TESTS) FROM HERE TO END...



    // END OF: else if ( $(".villain").attr("data-hp") <= 0 ) {
    }
    

    //  TEST: .gameInfo
    // counters.gameInfo++;
    // // .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo - .gameInfo -
    // if ( !$(".villain")[0] && counters.gameInfo > 0) {
    //     // console.log("test: villain defeated");
    //     $(".gameInfo-line1").text( "No enemy present. Select new enemy from above. " );
    // } 





    // TEST: .gameInfo
    // $(".gameInfo-line1").text( "test" );
    // $(".gameInfo-line2").text( "test2" );
    // $(".gameInfo-line1").text( .hero attacked .villain for .hero.data-hp damage );
    //hero attack
    // $(".gameInfo-line1").text( $(".hero").attr("id") + " attacked " + $(".villain").attr("id") + " for " + ($(".hero").attr("data-ap")-heroBaseAP) + " damage."  );
    // // villain attack
    // $(".gameInfo-line2").text( $(".villain").attr("id") + " counter attacked " + $(".hero").attr("id") + " for " + $(".villain").attr("data-cap") + " damage."  );

    



    // INITIAL ATTACK SEQUENCE STRUCTURE
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
        
    console.log("---after attack--");
    console.log( "heroHP:", $(".hero").attr("data-hp") );
    console.log( "heroAP:", $(".hero").attr("data-ap") );
    console.log( "villainHP:", $(".villain").attr("data-hp") );
    console.log( "villainCAP:", $(".villain").attr("data-cap") );
    counters.attack++;

    if ( $(".hero").attr("id") === attributesIndex(0) && $(".villain").attr("id") === attributesIndex(15) ) {
        $(".bodyGif").css("background-image", "url(assets/images/aang-vs-ozai.gif)");
    }



// END OF: $(".attack-button").on("click", function() {
});







// // INITIAL RESET BUTTON 
// always present, changed to be dynamically created after defeat
// $(".restart-button").click(function() {
//     location.reload();
// });









// TEST BUTTON -  TEST BUTTON -  TEST BUTTON -  TEST BUTTON -  TEST BUTTON -  TEST BUTTON - TEST BUTTON - TEST BUTTON - TEST BUTTON - 
// TEST BUTTON -  TEST BUTTON -  TEST BUTTON -  TEST BUTTON -  TEST BUTTON -  TEST BUTTON - TEST BUTTON - TEST BUTTON - TEST BUTTON - 
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
    // for (let i = 0; i < 20; i++) {
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
    // // for ( let i = 0; i < 20; i++ ) {
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
    // //     for ( let i = 0; i < 20; i++ ) {
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
    // //     for ( let i = 0; i < 20; i++ ) {
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
    // //     for ( let i = 0; i < 20; i++ ) {
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

    // TEST: game info when all enemies are defeated
    // if ( !$(".enemy").attr("class") && !$(".hero").attr("class") ) {
    //     // console.log( "no enemies or hero" );
    // } else if ( $(".enemy").attr("class") && $(".hero").attr("class") ) {
    //     // console.log("heroes", $(".hero").length, "| enemies:", $(".enemy").length );
    // } else if ( !$(".enemy").attr("class") && $(".hero").attr("class" )) {
    //     console.log( "all enemies defeated!" );
    // }

    // TEST: dynamically create reset button upon defeating all enemies
    // var resetBtn = $("<button>");
    // resetBtn.addClass("reset-button");
    // resetBtn.text("Reset");
    // resetBtn.appendTo(".reset")
    // $(".reset-button").click(function() {
    //     location.reload();
    // });

    // TEST: need to change names in .gameInfo from id's to in-game name, ie aang to Avatar Aang;
    // need to call them by their name!
    // function davidAllenCoe () {
    //     //"https://www.youtube.com/watch?v=vAOVRkSCWmg"
    //     for (let i = 0; i < 20; i++) {
    //         if ( $(".hero").attr("id") === attributesIndex(i) ) {
    //             youNeverCallMeByMyName = attributesIndex(i+4);
    //             console.log(attributesIndex(i+4));
    //         }
    //     } 
    // }

    // davidAllenCoe();

    // if ( !$(".hero")[0] && !$(".villain")[0] ) {
    //     console.log("select hero and villain");
    //     $(".attack-button").on("click", function(){
    //         $(".gameInfo-line1").text( "Select hero and enemy. " );
        
    //     // END OF: $(".attack-button").on("click", function(){
    //     });
    // } else if ( $(".hero")[0] && !$(".villain")[0] ) {
    //     console.log("select villain")
    //     $(".attack-button").on("click", function(){
    //         $(".gameInfo-line1").text( "Select enemy. " );
        
    //     // END OF: $(".attack-button").on("click", function(){
    //     });

    // }




// END OF: $(".test-button").on("click", function (){
});






// END OF: $(document).ready(function() {
});