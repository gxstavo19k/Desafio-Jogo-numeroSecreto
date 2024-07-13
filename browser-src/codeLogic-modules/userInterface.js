export default function displayTextElement(tag, text) {
    let element = document.querySelector(tag);
    element.innerHTML = text;
}


export function updateGameStatus(secretNum, tries, sortedNumbers, displayTextElement) {
    let showTries = tries === 1 ? 'tentativa' : 'tentativas';
    let messageTries = `Você descobriu o número secreto com ${tries} ${showTries}!`;
    displayTextElement('p', messageTries);
    document.getElementById('reiniciar').removeAttribute('disabled');
    sortedNumbers.push(secretNum);
}