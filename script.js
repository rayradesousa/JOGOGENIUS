let order = [];  // Ordem do jogo aleatório que vai ascender ao clicar.
let clickedOrder = [];  //Ordem dos cliques.
let score = 0; // Começa com 0, pois vai contar o score da pessoa enquanto ela estiver clicando até errar, e mostra quando errou.

//0 = Verde
//1 = Vermelho
//2 = Amarelo
//3 = azul



const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = creatColorElement(order[i]);
        lightColor(elementColor,Number(i) + 1);
    }
}

//Ascende a próxima cor
let lightColor = (element, number) =>{
    number= number * 500;
    setTimeout (() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Verifica se os botões clicados são os mesmos da ordem do jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
if(clickedOrder[i] != order[i]){
    perdeu();
    break;
}
    }
    if(clickedOrder.length == order.length){
          alert(`Pontuação: ${score}\n Parabéns você ganhou! Iniciar o próximo nível!!!`);
          nextLevel();
    }
}

//Função para o clique do usuários
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    creatColorElement(color).classList.add('selected');

  setTimeout(() => {
    creatColorElement(color).classList.remove('selected');
    checkOrder();
  },250);
}

// função que retorna a cor
let creatColorElement = (color) => {
    if(color == 0) {
        return green;
    }else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    }else if(color == 3) {
        return blue;
    }
}

//Próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para quem perder o jogo

 let perdeu = () => {
     alert(`Pontuação: ${score}!\nQue pena você perdeu!\nVamos tentar outra vez, clique em OK!!!`)
     order = [];
    clickedOrder = [];

     playgame();
 }
 //Função do início do jogo
 let playgame = () => {
     alert('Bem vindo ao Gênesis!\n Vamos inicar o jogo!')
  
     score = 0;

     nextLevel();
 }

 //Função de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


 //Início do jogo
 playgame();
