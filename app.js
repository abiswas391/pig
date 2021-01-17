/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//dice = Math.floor(Math.random() *  6) + 1;
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-1').textContent;
//console.log(x);



/*******************************************************
var scores, roundScore, activePlayer, dice;


initGame();
function initGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    dice = Math.floor(Math.random() *  6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    console.log(dice);
    
    if(dice !== 1) {
        document.querySelector('.btn-hold').style.display = 'block';
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        
        changeActivePlayer();
        
        //document.querySelector('#current-' + activePlayer).textContent = 0;
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
        /*roundScore = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDOM.style.display = 'none';*/
        
 //   }
//});

/*
document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 20) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.dice').style.display = 'none';
    } else {
        changeActivePlayer();
    }
    
    /*activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');*/
    
//});
/*
document.querySelector('.btn-new').addEventListener('click', initGame);


function changeActivePlayer() {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;      
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
}  */

/*****************************************************************************************************/








/*Coding Challenge 6*/

/*
var scores, roundScore, activePlayer, dice, previousDice, winningScore;


initGame();
function initGame() {
    scores = [0,0];
    roundScore = 0;
    previousDice = 0;
    activePlayer = 0;
    winningScore = prompt('Please enter the winning score :');
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    dice = Math.floor(Math.random() *  6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    console.log(dice);
    
    if(dice !== 1) {
        if(dice === 6 && previousDice === 6) {
            roundScore = 0;
            scores[activePlayer] = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            changeActivePlayer();
        } else {
            document.querySelector('.btn-hold').style.display = 'block';
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    } else {
        changeActivePlayer();
    }
        
    previousDice = dice;                                                 
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= winningScore) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.dice').style.display = 'none';
    } else {
        changeActivePlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', initGame);


function changeActivePlayer() {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;      
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
}
*/

/**********************************************************


var scores, roundScore, activePlayer, firstDice, secondDice, winningScore;


initGame();
function initGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    winningScore = prompt('Please enter the winning score :');
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    firstDice = Math.floor(Math.random() *  6) + 1;
    secondDice = Math.floor(Math.random() *  6) + 1;
//    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice-0').style.display = 'block';
    document.querySelector('.dice-1').style.display = 'block';
    document.querySelector('.dice-0').src = 'dice-' + firstDice + '.png';
    document.querySelector('.dice-1').src = 'dice-' + secondDice + '.png';
    console.log(firstDice, secondDice);
    
     if(firstDice !== 1 && secondDice !== 1) {
            if(firstDice === 6 && secondDice === 6) {
                roundScore = 0;
                scores[activePlayer] = 0;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                changeActivePlayer();
            } else {
                
                document.querySelector('.btn-hold').style.display = 'block';
                roundScore += (firstDice + secondDice);
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                
            }
              
     } else {
             
        changeActivePlayer();
             
     }
    
                                                
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= winningScore) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.dice-0').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
    } else {
        changeActivePlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', initGame);


function changeActivePlayer() {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;      
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
}


*****************************************************************************************/

















































