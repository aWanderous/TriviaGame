$(document).ready(function () {
    
    //  10 questions 
    
    var questions = [
    {   //  pikachu type (Dragon, Fairy, .Lightning, Normal)
        question: "What type of Pokémon is Pikachu?",
        choices: ["Dragon", "Fairy", "Lightning", "Normal"],
        answer: "Lightning",
        rightGif: "<img src='assets/images/RightPikachu.gif'>",
        wrongGif:"<img src='assets/images/Wrong.gif'>",
    },
    {   //  Pokédex no.1 Pokémon (Squirtle, Mew, .Bubasaur, Pikachu)
        question: "Which Pokémon is number 1 in the Pokédex?",
        choices: ["Squirtle", "Mew", "Bulbasaur", "Pikachu"],
        answer: "Bulbasaur",
        rightGif: "<img src='assets/images/RightBulbasaur.gif'>",
        wrongGif:"<img src='assets/images/WrongPikachu.gif'>",
    }, 
    {   //  no evolution (Wailmer, .Farfetch'd, Clefairy, Marill)
        question: "Which Pokémon does not have an evolution form?",
        choices: ["Wailmer", "Farfetch'd", "Clefairy", "Marill"],
        answer: "Farfetch'd",
        rightGif: "<img src='assets/images/RightEevee.gif'>",
        wrongGif:"<img src='assets/images/WrongPika.gif'>",
    },
    {   //  Kanto region Pokémon ( .Togepi, Dewgong, Porygon, Bellsprout)
        question: "Which Pokémon is not from the Kanto region?",
        choices: ["Togepi", "Dewgong", "Porygon", "Bellsprout"],
        answer: "Togepi",
        rightGif: "<img src='assets/images/RightTogepi.gif'>",
        wrongGif:"<img src='assets/images/WrongTogepi.gif'>",
    },
    {   //  pikachu evolution tree (.Pichu, Mimikyu, Emolga, Dedenne)
        question: "Which Pokémon is of the Pikachu evolution tree?",
        choices: ["Pichu", "Mimikyu", "Emolga", "Dedenne"],
        answer: "Pichu",
        rightGif: "<img src='assets/images/RightPika.gif'>",
        wrongGif:"<img src='assets/images/WrongSad.gif'>",
    },
    {   //  fairy type Pokémon ( Snubbull, Mawile, .Cherubi, Morelull)
        question: "Which Pokémon is not a fairy type?",
        choices: ["Snubbull", "Mawile", "Cherubi", "Morelull"],
        answer: "Cherubi",
        rightGif: "<img src='assets/images/RightGroup.gif'>",
        wrongGif:"<img src='assets/images/WrongFairy.gif'>",
    },
    {   //  dual type (Charizard, .Nidorina, Delibird, Oddish)
        question: "Which Pokémon does not have duel type?",
        choices: ["Charizard", "Nidorina", "Delibird", "Oddish"],
        answer: "Nidorina",
        rightGif: "<img src='assets/images/Right2.gif'>",
        wrongGif:"<img src='assets/images/WrongButterfree.gif'>",
    },    
    {   //  legendary Pokémon (Rapdash, .Articuno, Aggron, Gardevoir)1
        question: "Which Pokémon is a legendary?",
        choices: ["Rapidash", "Articuno", "Aggron", "Gardevoir"],
        answer: "Articuno",
        rightGif: "<img src='assets/images/Right.gif'>",
        wrongGif:"<img src='assets/images/WrongMewtwo.gif'>",
    },
    {   //  Eevee evolutions (Suicune, Houndoom, Luxray, .Espeon)
        question: "Which Pokémon is an Eevee evolution?",
        choices: ["Suicune", "Houndoom", "Luxray", "Espeon"],
        answer: "Espeon",
        rightGif: "<img src='assets/images/RightEspeon.gif'>",
        wrongGif:"<img src='assets/images/WrongSo.gif'>",
    },
    {   //  aloha forms (Diglett, Vulpix, Exeggutor, .Shellder)
        question: "Which Pokémon does not have an Aloha form?",
        choices: ["Diglett", "Vulpix", "Exeggutor", "Shellder"],
        answer: "Shellder",
        rightGif: "<img src='assets/images/RightAloha.gif'>",
        wrongGif:"<img src='assets/images/WrongKetchup.gif'>",
    }]    


    var timer = 30;
    var currentQuestion = 0;
    var correct = 0;
    var countdown;
    
    // button to start game
    $("#start").click(function(){
        $("#start, h1").hide();
        $("#logo").attr("src","assets/images/Pokémon_logo.png");
        
        // timer
        function clock(){
            timer--;
            $("#timer").html("Timer: "+ timer)
            
            if (timer == 0){
                resultGif("wrong");
                setTimeout(timesUp, 3000);
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
            $("#question").text(now.question);
            var picks = now.choices;
            $("#multi").empty() ;
            
            for (var i =0; i < picks.length; i++) {
                var selections = $("<img>")
                selections.attr("class", "pick")
                .attr("src", "assets/images/" + picks[i] + ".png")
                .attr("name", picks[i])
                .text(picks[i])
                .appendTo($("#multi"));
            }
        };
        
        // click on questions
        $(document).on("click", ".pick", function() {
            var selected = $(this).attr("name")

            if (selected === questions[currentQuestion].answer) {
                correct++;
                resultGif("win");
                setTimeout(timesUp, 3000);
            } else {
                resultGif("wrong")
                setTimeout(timesUp, 3000);
            }
        })
        // fun gifs for results
        function resultGif(result) {
            var celebrate = questions[currentQuestion].rightGif;
            var sad = questions[currentQuestion].wrongGif;

            if (result === "win") {
                clearInterval(countdown)
                $("#timer").empty();
                $("#question").html("<h2 class='resultGIf'>Alright! You got the question Right!</h2>");
                $("#multi").html(celebrate);

            } else {
                clearInterval(countdown)
                $("#timer").empty();
                $("#question").html("<h2 class='resultGIf'>Oh no! That was the wrong answer...</h2>");
                $("#multi").html(sad);
            };


        }

        // next question load and end game
        function nextQuestion() {
            if (questions.length -1 === currentQuestion){
                $("#multi").empty();
                $("#timer").empty();
                $("#question").text("You scored: " + correct + "/10");
                $("#multi").append("<button id='reset'>Restart Game?</button>");
            } else {
            currentQuestion++;
            quiz();
            };
        }

        quiz();
        
        // reset button
        $(document).on("click", "#reset", function() {
            correct = 0;
            currentQuestion = 0;
            quiz();
        })


    });
        

})