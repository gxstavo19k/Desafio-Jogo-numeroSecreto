export function generateRandomNum(sortedNumbers) {
    let generatedNum;
    do {
        generatedNum = Math.floor(Math.random() * 10) + 1;
    } while (sortedNumbers.includes(generatedNum));
    return generatedNum;
}


export function checkGameCompletion(sortedNumbers, displayTextElement, startGame) {
    if (sortedNumbers.length === 10) {
        displayTextElement('h1', 'Todos os números foram acertados!');
        displayTextElement('p', 'O jogo será reiniciado automaticamente.');
        // location.reload(); 
        setTimeout(() => {
            sortedNumbers = [];  
            location.reload();  
        }, 2000);
        return true;
    }
    return false;
}

export function handleIncorrectGuess(guess, secretNum, displayTextElement) {
    const message = guess > secretNum ? `O número secreto é menor que: ${guess}` : `O número secreto é maior que ${guess}`;
    displayTextElement('p', message);
}


