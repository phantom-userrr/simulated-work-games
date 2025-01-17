const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice, computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateComputerChoice()
	getResult()
}))

function generateComputerChoice(){
	const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
	if (randomNumber === 1){
		computerChoice = 'rock'
	}
	if (randomNumber === 2){
		computerChoice = 'scissors'
	}
	if (randomNumber === 3){
		computerChoice = 'paper'
	}
	computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
	if (computerChoice === userChoice){
		resultDisplay.innerHTML = 'draw'
	}
	if (computerChoice === 'rock' && userChoice === 'paper'){
		resultDisplay.innerHTML = 'you win'
	}
	if (computerChoice === 'rock' && userChoice === 'scissors'){
		resultDisplay.innerHTML = 'you lose'
	}
	if (computerChoice === 'paper' && userChoice === 'scissors'){
		resultDisplay.innerHTML = 'you win'
	}
	if (computerChoice === 'paper' && userChoice === 'rock'){
		resultDisplay.innerHTML = 'you lose'
	}
	if (computerChoice === 'scissors' && userChoice === 'rock'){
		resultDisplay.innerHTML = 'you win'
	}
	if (computerChoice === 'scissors' && userChoice === 'paper'){
		resultDisplay.innerHTML = 'you lose'
	}
}