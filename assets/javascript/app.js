$(document).ready(function () {
    

    var timer = 30;
    var correct = 0;
    var wrong = 0;
    var questions = "";
    // set start screen
    // button to start game
    $("#start").click(function(){
        $("#start, header").hide();
        
        $("#question").text(questions[0]);

        
    
        console.log(questions[0])
    })
    // timer starts when pressed
    
    
    questions = new Array("what type of pokemon is Pikachu?", "Dragon", "Fairy", "Lightning", "Normal");
        
        
//  10 questions 

//  pikachu type (Dragon, Fairy, .Lightning, Normal)2
//  pokedex no.1 pokemon (Squirtle, Mew, .Bubasaur, Pikachu)2
//  Kanto region pokemon ( .Togepi, Dewgong, Porygon, Bellsprout)0
//  Eevee evolutions (Suicune, Houndoom, Luxray, .Espeon)3
//  pikachu evolution tree (.Pichu, Mimikyu, Emolga, Dedenne)0
//  fairy type pokemon ( Snubbull, Mawile, .Cherubi, Morelull)2
//  legendary pokemon (Rapdash, .Articuno, Aggron, Gardevoir)1
//  dual type (Charizard, .Nidorina, Delibird, Oddish)2
//  aloha forms (Diglett, Vulpix, Exeggutor, .Shellder)3
//  no evolution (Wailmer, .Farfetch'd, Clefairy, Marill)1

// show correct answer 
// show score correct out of /10

})