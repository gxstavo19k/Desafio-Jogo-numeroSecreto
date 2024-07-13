import displayTextElement from "./codeLogic-modules/userInterface.js";
import { generateRandomNum, checkGameCompletion, handleIncorrectGuess } from "./codeLogic-modules/gameLogic.js";
import { updateGameStatus } from "./codeLogic-modules/userInterface.js";

let sortedNumbers = [];
let secretNum;
let tries;

function clearInput() {
    let guess = document.querySelector('input');
    guess.value = '';
}

export function startGame() {
    displayTextElement('h1', 'Bem-vindo ao jogo do número secreto!');
    secretNum = generateRandomNum(sortedNumbers);
    tries = 1;
    displayTextElement('p', 'Escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    console.log("Números acertados até agora:", sortedNumbers);
}

function checkGuess() {
    let inputElement = document.querySelector('input');
    let guess = parseInt(inputElement.value);

    if (isNaN(guess)) {
        displayTextElement('p', 'Por favor, insira um número válido.');
        return;
    }

    if (guess === secretNum) {
        displayTextElement('h1', 'Você acertou o número secreto!');
        updateGameStatus(secretNum, tries, sortedNumbers, displayTextElement);

        if (!checkGameCompletion(sortedNumbers, displayTextElement, startGame)) {
            secretNum = generateRandomNum(sortedNumbers);
        }
    } else {
        handleIncorrectGuess(guess, secretNum, displayTextElement);
    }

    tries++;
    clearInput();
}

function newGame() {
    startGame();
    clearInput();
    displayTextElement('p', 'Escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

document.querySelector('input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

globalThis.checkGuess = checkGuess;
globalThis.newGame = newGame;

startGame();
