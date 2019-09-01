$(document).ready(function () {
    
    //  10 questions 
    
    var questions = [
    {   //  pikachu type (Dragon, Fairy, .Lightning, Normal)
        question: "What type of Pokémon is Pikachu?",
        choices: ["Dragon", "Fairy", "Lightning", "Normal"],
        answer: "Lightning"
    },
    {   //  Pokédex no.1 Pokémon (Squirtle, Mew, .Bubasaur, Pikachu)
        question: "Which Pokémon is number 1 in the Pokédex?",
        choices: ["Squirtle", "Mew", "Bulbasaur", "Pikachu"],
        answer: "Bulbasaur"
    }, 
    {   //  no evolution (Wailmer, .Farfetch'd, Clefairy, Marill)
        question: "Which Pokémon does not have an evolution form?",
        choices: ["Wailmer", "Farfetch'd", "Clefairy", "Marill"],
        answer: "Farfetch'd"
    },
    {   //  Kanto region Pokémon ( .Togepi, Dewgong, Porygon, Bellsprout)
        question: "Which Pokémon is not from the Kanto region?",
        choices: ["Togepi", "Dewgong", "Porygon", "Bellsprout"],
        answer: "Togepi"
    },
    {   //  pikachu evolution tree (.Pichu, Mimikyu, Emolga, Dedenne)
        question: "Which Pokémon is of the Pikachu evolution tree?",
        choices: ["Pichu", "Mimikyu", "Emolga", "Dedenne"],
        answer: "Pichu"
    },
    {   //  fairy type Pokémon ( Snubbull, Mawile, .Cherubi, Morelull)
        question: "Which Pokémon is not a fairy type?",
        choices: ["Snubbull", "Mawile", "Cherubi", "Morelull"],
        answer: "Cherubi"
    },
    {   //  dual type (Charizard, .Nidorina, Delibird, Oddish)
        question: "Which Pokémon does not have duel type?",
        choices: ["Charizard", "Nidorina", "Delibird", "Oddish"],
        answer: "Nidorina"
    },    
    {   //  legendary Pokémon (Rapdash, .Articuno, Aggron, Gardevoir)1
        question: "Which Pokémon is a legendary?",
        choices: ["Rapdash", "Articuno", "Aggron", "Gardevoir"],
        answer: "Articuno"
    },
    {   //  Eevee evolutions (Suicune, Houndoom, Luxray, .Espeon)
        question: "Which Pokémon is an Eevee evolution?",
        choices: ["Suicune", "Houndoom", "Luxray", "Espeon"],
        answer: "Espeon"
    },
    {   //  aloha forms (Diglett, Vulpix, Exeggutor, .Shellder)
        question: "Which Pokémon does not have an Aloha form?",
        choices: ["Diglett", "Vulpix", "Exeggutor", "Shellder"],
        answer: "Shellder"
    }]    


    var timer = 30;
    var currentQuestion = 0;
    var correct = 0;
    var countdown;
    
    // set start screen
    // button to start game
    $("#start").click(function(){
        $("#start, h1").hide();
        $("#logo").attr("src","assets/images/Pokémon_logo.png");
        
        // timer starts when pressed
        function clock(){
            timer--;
            $("#timer").html("Timer: "+ timer)
            
            if (timer == 0){
                timesUp();
            }
        }
        
        function timesUp() {
            clearInterval(countdown);
            nextQuestion();
        }
        // load questions
        function quiz() {
            timer = 30;
            countdown = setInterval(clock, 1000);
            $("#timer").text("Timer: " + timer);
            var now = questions[currentQuestion];
            var ask  = $("#question").text(now.question);
            var picks = now.choices;
            $("#multi").empty() ;
            
            for (var i =0; i < picks.length; i++) {
                var selections = $("<img>")
                selections.attr("class", picks[i]);
                selections.attr("src", "assets/images/" + picks[i] + ".png");
                selections.appendTo($("#multi"));
            }
        };
        
        function nextQuestion() {
            currentQuestion++;
            quiz();
        }
        quiz();
    });
        
    

    

    
        
        

// show correct answer 
// show score correct out of /10

})