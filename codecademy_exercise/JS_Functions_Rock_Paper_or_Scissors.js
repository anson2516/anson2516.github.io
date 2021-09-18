  const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb'){
      return userInput;
    }else{
      console.log('Error!')
    }
  }
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };


  

  const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice){
      return 'the game is a tie.';
    } if(userChoice === 'rock' && computerChoice === 'paper'){
      return 'the computer won';
    } if(userChoice === 'paper' && computerChoice === 'scissors'){
      return 'the computer won';
    } if(userChoice === 'scissors' && computerChoice === 'rock'){
      return 'the computer won';
    } else {
      return 'you won'
    }
        
  }

  
const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  console.log('computer threw ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame()