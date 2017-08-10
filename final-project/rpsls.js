//Comparison Chart:
// >> Greater than (beats)
// Spock, Rock >> (Scissors) >> Paper, Lizard
// Scissors, Lizard >> (Paper) >> Rock, Spock
// Paper, Spock >> (Rock) >> Scissors, Lizard
// Rock, Scissors >> (Lizard) >> Paper, Spock
// Paper, Lizard >>(Spock) >> Rock, Scissors

// Paper Disproves Spock, Paper Covers Rock
// Spock Vaporizes Rock, Spock Smashes Scissors
// Scissors Cuts Paper, Scissors Decapitates Lizard
// Rock Crushes Lizard, Rock Crushes Scissors
// Lizard Poisons Spock, Lizard Eats Paper

var playerWins = 0;
var computerWins = 0;
var ties = 0;
var addImage;
var choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
var paperWin = {
    'vsSpock': 'Paper Disproves Spock',
    'vsRock': 'Paper Covers Rock'
};
var spockWin = {
    'vsRock': 'Spock Vaporizes Rock',
    'vsScissors': 'Spock Smashes Scissors'
};
var scissorsWin = {
    'vsPaper': 'Scissors Cuts Paper',
    'vsLizard': 'Scissors Decapitates Lizard'
};
var rockWin = {
    'vsLizard': 'Rock Crushes Lizard',
    'vsScissors': 'Rock Crushes Scissors'
};
var lizardWin = {
    'vsSpock': 'Lizard Poisons Spock',
    'vsPaper': 'Lizard Eats Paper'
};
var tieText = "It's a Tie!!!";

var images = {
    'rock': 'https://s4.postimg.org/nd2p8ouj1/rock.png',
    'paper': 'https://s6.postimg.org/t71mggzyp/paper.png',
    'scissors': 'https://s6.postimg.org/imroxvvgx/scissors.png',
    'lizard': 'https://s6.postimg.org/g1m4ad635/lizard.png',
    'spock': 'https://s6.postimg.org/und4ym2vl/spock.png'
}

playGame();

function playGame() {
    //Reset Choices and Results
    resetGame();
    //Computer's choices
    compSelection = getRandomInt(0, choices.length)
    computerChoice = choices[compSelection];
    //console.log("Comp chooses: ", computerChoice);

    //Shows the player buttons on a new game
    $('.button-containers').show(2000);

}

function resetGame() {
    playerChoice = '';
    computerChoice = '';
    resultText = '';
    //$('.outcome').html(" <h1 class='outcome'>" + 'RESULT!' + "</h1>");
    $('.outcome').text("RESULT!")
        .removeClass('you-win')
        .removeClass('you-lose')
        .removeClass('you-tie');
    $('#comp-output').text("This is where the computer displays it's action");
    $('.player-display').text("");
}

//CLICK EVENT: Start another game of RPSLS!
$('.play-game').click(function(event) {
    playGame();
})

//CLICK EVENT: Any of the player buttons!
$('.button-containers').children().click(function(event) {
    hideButtons();
    //Since the player made their choice, show the icon for the computer's choice.
    showCompChoice();
})

//CLICK EVENT: When player/rock is pressed
$('#rock').click(function(event) {
    playerChoice = choices[0];
    //console.log('Player chooses: ', playerChoice);
    $('.player-display').text("Player chooses " + playerChoice);
    //Adding the icon of the selection to the display
    addImage = '<img src=' + images.rock + ' title="rock">';
    $('.player-display').append(addImage);
    //Redundant, better to send to a single function.
    //$('#comp-output').text("Computer chooses " + computerChoice);
    compare();
})

//CLICK EVENT: When player/paper is pressed
$('#paper').click(function(event) {
    playerChoice = choices[1];
    //console.log('Player chooses: ', playerChoice);
    $('.player-display').text("Player chooses " + playerChoice);
    //Adding the icon of the selection to the display
    addImage = '<img src=' + images.paper + ' title="rock">';
    $('.player-display').append(addImage);
    //$('#comp-output').text("Computer chooses " + computerChoice);
    compare();
})

//CLICK EVENT: When player/scissors is pressed
$('#scissors').click(function(event) {
    playerChoice = choices[2];
    //console.log('Player chooses: ', playerChoice);
    $('.player-display').text("Player chooses " + playerChoice);
    //Adding the icon of the selection to the display
    addImage = '<img src=' + images.scissors + ' title="rock">';
    $('.player-display').append(addImage);
    //$('#comp-output').text("Computer chooses " + computerChoice);
    compare();
})

//CLICK EVENT: When player/lizard is pressed
$('#lizard').click(function(event) {
    playerChoice = choices[3];
    //console.log('Player chooses: ', playerChoice);
    $('.player-display').text("Player chooses " + playerChoice);
    //Adding the icon of the selection to the display
    addImage = '<img src=' + images.lizard + ' title="rock">';
    $('.player-display').append(addImage);
    //$('#comp-output').text("Computer chooses " + computerChoice);
    compare();
})

//CLICK EVENT: When player/spock is pressed
$('#spock').click(function(event) {
    playerChoice = choices[4];
    //console.log('Player chooses: ', playerChoice);
    $('.player-display').text("Player chooses " + playerChoice);
    //Adding the icon of the selection to the display
    addImage = '<img src=' + images.spock + ' title="rock">';
    $('.player-display').append(addImage);
    //$('#comp-output').text("Computer chooses " + computerChoice);
    compare();
})

//compare() tests the playerChoice against computerChoice
function compare() {
    console.log("player: ", playerChoice);
    console.log('comp: ', computerChoice);
    //Handles if the player and computer pick the same thing
    if (playerChoice == computerChoice) {
        tie(tieText);
    } else {
        //Switch statements to handle multiple possibilities
        //Each playerChoice can be compared against 4 possible computer outcomes, 2 win, 2 loss combinations
        switch (playerChoice) {
            case 'Rock':
                switch (computerChoice) {
                    case 'Paper':
                        lose(paperWin.vsRock);
                        // result = "lose";
                        // winText = paperWin.vsRock;
                        break;
                    case 'Scissors':
                        win(rockWin.vsScissors);
                        // result = "win";
                        // winText = rockWin.vsScissors;
                        break;
                    case 'Lizard':
                        win(rockWin.vsLizard);
                        // result = "win";
                        // winText = rockWin.vsLizard;
                        break;
                    case 'Spock':
                        lose(spockWin.vsRock);
                        // result = "lose";
                        // winText = spockWin.vsRock;
                        break;
                    default:
                        console.log('143 error!');
                        break;
                }
                break;
            case 'Paper':
                switch (computerChoice) {
                    case 'Rock':
                        win(paperWin.vsRock);
                        break;
                    case 'Scissors':
                        lose(scissorsWin.vsPaper);
                        break;
                    case 'Lizard':
                        lose(lizardWin.vsPaper);
                        break;
                    case 'Spock':
                        win(paperWin.vsSpock);
                        break;
                    default:
                        console.log('161 error!');
                        break;
                }
                break;
            case 'Scissors':
                switch (computerChoice) {
                    case 'Paper':
                        win(scissorsWin.vsPaper);
                        break;
                    case 'Rock':
                        lose(rockWin.vsScissors);
                        break;
                    case 'Lizard':
                        win(scissorsWin.vsLizard);
                        break;
                    case 'Spock':
                        lose(spockWin.vsScissors);
                        break;
                    default:
                        console.log('179 error!');
                        break;
                }
                break;
            case 'Lizard':
                switch (computerChoice) {
                    case 'Paper':
                        win(lizardWin.vsPaper);
                        break;
                    case 'Scissors':
                        lose(scissorsWin.vsLizard);
                        break;
                    case 'Rock':
                        lose(rockWin.vsLizard);
                        break;
                    case 'Spock':
                        win(lizardWin.vsSpock);
                        break;
                    default:
                        console.log('197 error!');
                        break;
                }
                break;
            case 'Spock':
                switch (computerChoice) {
                    case 'Paper':
                        lose(paperWin.vsSpock);
                        break;
                    case 'Scissors':
                        win(spockWin.vsScissors);
                        break;
                    case 'Lizard':
                        lose(lizardWin.vsSpock);
                        break;
                    case 'Rock':
                        win(spockWin.vsRock);
                        break;
                    default:
                        console.log('215 error!');
                        break;
                }
                break;
            default:
                console.log('219 error!');
                break;
        }
    }
}

//showCompChoice() will display the icon of the computer's selection to the computer picks container.
function showCompChoice() {
    $('#comp-output').text("Computer chooses " + computerChoice);
    switch (computerChoice) {
        case 'Rock':
            var output = images.rock;
            break;
        case 'Paper':
            var output = images.paper;
            break;
        case 'Scissors':
            var output = images.scissors;
            break;
        case 'Lizard':
            var output = images.lizard;
            break;
        case 'Spock':
            var output = images.spock;
            break;
    }
    addImage = '<img src=' + output + ' title=" ' + computerChoice + ' ">';
    $('#comp-output').append(addImage);
}

//win() will take the win result and result text and adjust the Scoreboard display and score count
function win(resultText) {
    console.log('win', resultText)
        //Display the result text
    $('.outcome').text(resultText).addClass('you-win');
    //Adjust the 'Wins' score:
    var winScore = parseInt($('.wins').text());
    winScore++;
    console.log(winScore);
    $('.wins').text(winScore);
}

//lose() will take the lose result and result text and adjust the Scoreboard display and score count
function lose(resultText) {
    console.log('lose', resultText)
        //Display the result text
    $('.outcome').text(resultText).addClass('you-lose');
    //Adjust the "Losses" score:
    var loseScore = parseInt($('.losses').text());
    loseScore++;
    console.log(loseScore);
    $('.losses').text(loseScore);
}

//tie() will take the tie result and result text and adjust the scoreboard display and score count
function tie(resultText) {
    console.log('draw', resultText)
        //Display the result text
    $('.outcome').text(resultText).addClass('you-tie');
    //Adjust the "Ties" score
    var tieScore = parseInt($('.ties').text());
    tieScore++;
    console.log(tieScore);
    $('.ties').text(tieScore);
}

//Function hideButtons() called when a button is pressed, so that the player cannot press any others until the next round.
function hideButtons() {
    $('.button-containers').hide(1500);
}

//getRandomInt() will determine a random number between 0 and the maximum number given.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}