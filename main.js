var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  var turn = null;
  var moves = {
    1: [],
    2: []
  }
  prompt.get(['username1', 'username2'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  Player1 Name: ' + result.username1);
    console.log('  Player2 Name: ' + result.username2);
    console.log('Let\'s play!');
    printBoard()
    turn = 1;
    round();
  });

var round = function() {
    makeMove(function() {
      changeTurn(function(){
            checkWinner();
      });
    });
}

var makeMove = function(cb){
    console.log('Make a move by entering the number at the position of your preference');
    console.log('It is Player' + turn + '\'s turn:');
    move(turn, cb);

}

var myBoard = {
  1: 1,
  2: 2,
  3: 3, 
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8, 
  9: 9
}

console.log('hey there! Let\'s play Tic Tac Toe. Please let me know your name:')
var move = function(turn, cb) {

    prompt.get(['move'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  Player\'s Move: ' + result.move);
    // printBoard()
    markdown(result.move, turn)
    cb();
    // makeMove();
  });


  // markdown(result.move, turn)
}
var winningmoves = ['1,2,3', '4,5,6', '7,8,9', '1,4,7', '2,5,8', '3,6,9', '1,5,9', '3,5,7']

var checkWinner = function() {
  var winner = false;
  for(var key in moves){
    var movesStr = moves[key].toString();
    for(var i = 0; i < winningmoves.length; i++){
      if(movesStr === winningmoves[i]){
        winner = true;
      }
    }
  }
  if(winner){
    prompt('player' + turn + ' won!')
  } else {
    round();
  }
}

var changeTurn = function(cb){
  if(turn === 1){
    turn = 2;
  } else {
    turn = 1;
  }
  cb()
}
var markdown = function(number, user){
  console.log('markdown', number, user)
  if(user === 1){
    var mark = 'x'
  } else {
    var mark = 'o'
  }
  myBoard[number] = mark;
  moves[user].push(number);
  printBoard();
  // calculateWin();
}


function printBoard() {
  console.log('\n' +
      ' ' + myBoard[1] + ' | ' + myBoard[2]  + ' | ' + myBoard[3] + '\n' +
      ' ---------\n' +
      ' ' + myBoard[4]  + ' | ' + myBoard[5]  + ' | ' + myBoard[6]  + '\n' +
      ' ---------\n' +
      ' ' + myBoard[7]  + ' | ' + myBoard[8]  + ' | ' + myBoard[9]  + '\n');

}

// var calculateWin = functino() {

// }

