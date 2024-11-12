var button_colours = ["red", "blue", "green", "yellow"];
var game_pattern = [];
var user_clicked_pattern = [];
var started = false;
var level = 0;

$("body").keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        game_started = true;
    }
   
});


$(".btn").click(function () {
    var user_chosen_colour = $(this).attr("id")
    user_clicked_pattern.push(user_chosen_colour);
    playSound(user_chosen_colour);
    animatePress(user_chosen_colour);
});

function nextSequence() {

    level = level + 1;
    $("#level-title").text("Level " + level);

    var random_number = Math.random() * 4;
    random_number = Math.floor(random_number);

    var random_chosen_colour = button_colours[random_number];

    game_pattern.push(random_chosen_colour);


    playSound(random_chosen_colour);
    $("#" + random_chosen_colour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

};

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
};

function animatePress(current_colour) {
    $("#" + current_colour).addClass("pressed");
    setTimeout(() => {
        $("#" + current_colour).removeClass("pressed");
    }, 100);
};


function checkAnswer(currentLevel) {
    
}

