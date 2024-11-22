let conteudo = document.querySelector('h1');
conteudo.innerHTML = 'Hora do desafio';

function botaoConsole(){
    console.log('O botão foi clicado!');
}

function botaoAlert(){
    alert('Eu amo JS');
}

function botaoPrompt(){
    let cidade = prompt('Digite o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma(){
    let n1 = parseInt(prompt('Digite um número'));
    let n2 = parseInt(prompt('Digite outro número'));
    let resultado = n1 + n2;
    alert(`A soma dos dois valores digitados é de ${resultado}`);
}