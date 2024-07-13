# Desafio do Jogo Secreto

<div align="center">

![HTML](https://img.shields.io/badge/HTML-F24F1E?style=for-the-badge&logo=HTML5&logoColor=white) ![Javascript](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=JavaScript&logoColor=ffeb44) ![CSS](https://img.shields.io/badge/css-blue?style=for-the-badge&logo=CSS3&logoColor=add8e6)
<br>

</div>

## Código Fonte

O código-fonte pode ser encontrado na raiz deste repositório. Para executar o projeto, você pode abrir o arquivo `index.html` com um servidor de desenvolvimento ou usar uma extensão como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VSCode.

## Estrutura do Projeto

```.
├── index.html
├── browser-src/
│ ├── codeLogic-modules/
│ │ ├── gameLogic.js
│ │ └── userInterface.js
│ ├── app.js
│ └── style.css
└── img
```


### Arquivos e lógica de programação

1. **`index.html`**
   - O arquivo HTML principal do projeto.
   - Inclui a estrutura da página e a ligação ao CSS e ao JavaScript.

2. **`style.css`**
   - Contém os estilos básicos para a página HTML.

#### Organização do Código

Este projeto utiliza uma abordagem modular para organizar o código-fonte, seguindo boas práticas de programação para melhorar a manutenção e a escalabilidade. Abaixo está uma visão geral de como o código está estruturado e como os módulos foram separados com base em suas responsabilidades:

3. **`app.js`**
   - **Responsabilidades**: Arquivo principal JavaScript que coordena a lógica do jogo e a interface do usuário.
   - **Funções principais**:
     - `startGame()`: Inicializa o jogo e configura o número secreto.
     - `checkGuess()`: Verifica a adivinhação do usuário e atualiza o estado do jogo.
     - `newGame()`: Reinicia o jogo manualmente.
   - **Variáveis globais**:
     - `sortedNumbers`: Armazena os números que já foram acertados.
     - `secretNum`: O número secreto atual.
     - `tries`: Contador de tentativas do usuário.
   - **Módulos importados**:
     - `displayTextElement`, `updateGameStatus`: Funções para atualizar a interface do usuário.
     - `generateRandomNum`, `checkGameCompletion`, `handleIncorrectGuess`: Funções de lógica do jogo.

4. **`gameLogic.js`**
   - **Responsabilidades**: Contém funções relacionadas à lógica do jogo, como a geração de números aleatórios e verificação do estado do jogo/reinicio do jogo.
   - **Funções exportadas**:
     - `generateRandomNum(sortedNumbers)`: Gera um número aleatório que não está em `sortedNumbers` — que é uma lista | Array.
     - `checkGameCompletion(sortedNumbers, displayTextElement, startGame)`: Verifica se todos os números foram acertados e reinicia o jogo se necessário.
     - `handleIncorrectGuess(guess, secretNum, displayTextElement)`: Exibe uma mensagem sobre a adivinhação incorreta.

5. **`userInterface.js`**
   - **Responsabilidades**: Contém funções para atualizar a interface do usuário.
   - **Funções exportadas**:
     - `displayTextElement(tag, text)`: Atualiza o conteúdo de um elemento no DOM.
     - `updateGameStatus(secretNum, tries, sortedNumbers, displayTextElement)`: Atualiza o status do jogo após uma tentativa bem-sucedida.

##### Motivação para o Uso de Módulos

O uso de módulos e submódulos foi adotado para:

- **Separar Responsabilidades**: Cada módulo tem uma responsabilidade única, como a lógica do jogo ou a atualização da interface. Isso ajuda a manter o código organizado e mais fácil de entender.
- **Reduzir a Quantidade de Código**: Ao dividir o código em arquivos menores, cada um com uma função específica, o arquivo `app.js` foi mantido mais limpo e focado na lógica de controle do jogo.
- **Facilitar a Manutenção**: Com uma estrutura modular, é mais fácil atualizar, testar e expandir funcionalidades sem impactar outras partes do código.
- **Reutilização de Código**: Funções e variáveis podem ser facilmente importadas e reutilizadas em diferentes partes do projeto.


## Funcionamento do Programa

1. **Início do Jogo**
   - O jogo começa chamando a função `startGame()` que gera um número secreto e define o número de tentativas.

2. **Adivinhação**
   - O usuário insere um número e pressiona Enter.
   - A função `checkGuess()` verifica se o número está correto e atualiza o estado do jogo.
   - Se o número estiver correto, `updateGameStatus()` é chamada e o jogo verifica se todos os números foram acertados com `checkGameCompletion()`.

3. **Reinício do Jogo**
   - Se todos os números forem acertados, o jogo reinicia automaticamente após uma breve pausa usando `setTimeout()` e `location.reload()`.

4. **Tentativas Incorretas**
   - Se a adivinhação estiver errada, `handleIncorrectGuess()` fornece uma dica sobre o número secreto.

## Referências

- [Document Object Model (DOM)](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model): Estrutura e manipulação do DOM.
- [Element.querySelector()](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/querySelector): Seleção de elementos no DOM.
- [Element.addEventListener()](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener): Adiciona eventos aos elementos do DOM.
- [W3Schools – JavaScript HTML DOM Methods](https://www.w3schools.com/js/js_htmldom_document.asp): Métodos de manipulação do DOM com JavaScript.



## Dicionário/Sumário

- **`index.html`**: Arquivo principal HTML.
- **`style.css`**: Estilos da página.
- **`app.js`**: Arquivo principal JavaScript; lógica do jogo e controle de estado.
- **`gameLogic.js`**: Lógica do jogo; funções de verificação e geração de números.
- **`userInterface.js`**: Interface do usuário; funções para atualizar a UI.
- **`sortedNumbers`**: Array de números acertados.
- **`secretNum`**: Número secreto atual.
- **`tries`**: Contador de tentativas.
- **`startGame()`**: Inicializa o jogo.
- **`checkGuess()`**: Verifica a adivinhação do usuário.
- **`newGame()`**: Reinicia o jogo manualmente.
- **`generateRandomNum()`**: Gera um número aleatório.
- **`checkGameCompletion()`**: Verifica se todos os números foram acertados.
- **`handleIncorrectGuess()`**: Fornece uma dica sobre o número secreto.
- **`displayTextElement()`**: Atualiza o conteúdo do DOM.
- **`updateGameStatus()`**: Atualiza o status do jogo após uma adivinhação correta.

## Licença

Este projeto está sob a licença MIT.

---