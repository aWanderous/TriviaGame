$(document).ready(function () {
    
    //  10 questions 
    
    var questions = [
    {   //  pikachu type (Dragon, Fairy, .Lightning, Normal)
        question: "What type of Pokemon is Pikachu?",
        choices: ["Dragon", "Fairy", "Lightning", "Normal"],
        answer: "Lightning"
    },
    {   //  pokedex no.1 pokemon (Squirtle, Mew, .Bubasaur, Pikachu)
        question: "Which Pokemon is number 1 in the pokedex?",
        choices: ["Squirtle", "Mew", "Bulbasaur", "Pikachu"],
        answer: "Bulbasaur"
    }, 
    {   //  no evolution (Wailmer, .Farfetch'd, Clefairy, Marill)
        question: "Which Pokemon does not have an evolution form?",
        choices: ["Wailmer", "Farfetch'd", "Clefairy", "Marill"],
        answer: "Farfetch'd"
    },
    {   //  Kanto region pokemon ( .Togepi, Dewgong, Porygon, Bellsprout)
        question: "Which Pokemon is not from the Kanto region?",
        choices: ["Togepi", "Dewgong", "Porygon", "Bellsprout"],
        answer: "Togepi"
    },
    {   //  pikachu evolution tree (.Pichu, Mimikyu, Emolga, Dedenne)
        question: "Which Pokemon is of the Pikachu evolution tree?",
        choices: ["Pichu", "Mimikyu", "Emolga", "Dedenne"],
        answer: "Pichu"
    },
    {   //  fairy type pokemon ( Snubbull, Mawile, .Cherubi, Morelull)
        question: "Which Pokemon is not a fairy type?",
        choices: ["Snubbull", "Mawile", "Cherubi", "Morelull"],
        answer: "Cherubi"
    },
    {   //  dual type (Charizard, .Nidorina, Delibird, Oddish)
        question: "Which Pokemon does not have duel type?",
        choices: ["Charizard", "Nidorina", "Delibird", "Oddish"],
        answer: "Nidorina"
    },    
    {   //  legendary pokemon (Rapdash, .Articuno, Aggron, Gardevoir)1
        question: "Which Pokemon is a legendary?",
        choices: ["Rapdash", "Articuno", "Aggron", "Gardevoir"],
        answer: "Articuno"
    },
    {   //  Eevee evolutions (Suicune, Houndoom, Luxray, .Espeon)
        question: "Which Pokemon is an Eevee evolution?",
        choices: ["Suicune", "Houndoom", "Luxray", "Espeon"],
        answer: "Espeon"
    },
    {   //  aloha forms (Diglett, Vulpix, Exeggutor, .Shellder)
        question: "Which Pokemon does not have an Aloha form?",
        choices: ["Diglett", "Vulpix", "Exeggutor", "Shellder"],
        answer: "Shellder"
    },]    
console.log(questions)

    var timer = 30;
    var currentQuestion = 0;
    var correct = 0;
    var countdown;
    
    // set start screen
    // button to start game
    $("#start").click(function(){
        $("#start, header").hide();
        
        function quiz() {
            
            var ask  = $("#question").text(questions[currentQuestion].question)
            var picks =  questions[currentQuestion].choices
        }
        
        quiz()
    })
    // timer starts when pressed
    
    
        
        

// show correct answer 
// show score correct out of /10

})