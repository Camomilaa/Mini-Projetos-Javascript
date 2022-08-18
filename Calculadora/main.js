let visor = document.querySelector('.visor');
visor.innerHTML = '';

let itens = [];
let itensCompletos = '';
let ok = false;
let segunda = false;

function clicou(elemento){
    if(segunda === true){
        itensCompletos = visor.innerHTML;
        segunda = false;
    }
    itensCompletos += elemento;
    visor.innerHTML = itensCompletos;
    if(elemento === ' ='){
        resultado(itensCompletos);
    }
}

function resultado(itensCompletos){
    itens = itensCompletos.split(' ');
    for(let i=0; i<itens.length; i++){
        if(itens[i] == ""){
            itens.splice(i, 1);
        }
    }

    if(itens.length%2==0){
        while(ok === false){
            for(let i = 0; i<itens.length; i++){
                if(itens[i] === 'x'){
                    let resultado = itens[i-1]*itens[i+1];
                    itens.splice(i+2,0,resultado);
                    itens.splice(i-1,3);
                }
            }
            for(let i = 0; i<itens.length; i++){
                if(itens[i] === '÷'){
                    let resultado = itens[i-1]/itens[i+1];
                    itens.splice(i+2,0,resultado);
                    itens.splice(i-1,3);
                }
            }
            for(let i = 0; i<itens.length; i++){
                if(itens[i] === '+'){
                    let resultado = parseFloat(itens[i-1])+parseFloat(itens[i+1]);
                    itens.splice(i+2,0,resultado);
                    itens.splice(i-1,3);
                }
            }
            for(let i = 0; i<itens.length; i++){
                if(itens[i] === '-'){
                    let resultado = itens[i-1]-itens[i+1];
                    itens.splice(i+2,0,resultado);
                    itens.splice(i-1,3);
                }
            }
            if(itens.length === 2){
                ok = true;
            }
        }

        ok = false;
        itens.splice(itens.length - 1, 1);
        visor.innerHTML = itens.toString();
        segunda = true;

    } else{
        window.alert('Erro! Equação inválida pois há sinal matemático junto ao =');
    }
}

function apagarTudo(){
    visor.innerHTML = '';
    itensCompletos = '';
    itens = [];
}

function apagar(){
    let itensModificados = itensCompletos;
    let conjuntoModificacoes = [];
    let index = 0;
    let simbolo = false;

    conjuntoModificacoes = itensModificados.split('');
    for(let i=0; i<conjuntoModificacoes.length; i++){
        if(conjuntoModificacoes[i] == "-"||conjuntoModificacoes[i] == "÷"||conjuntoModificacoes[i] == "+"||conjuntoModificacoes[i] == "x"){
            index = i;
            if(index === conjuntoModificacoes.length - 1){
                simbolo = true;
            }
        }
    }
    if(simbolo === false){
        conjuntoModificacoes.splice(index+1, conjuntoModificacoes.length - 1);
    }else{
        for(let i=0; i<conjuntoModificacoes.length; i++){
            if(conjuntoModificacoes[i] != "-" && conjuntoModificacoes[i] != "÷" && conjuntoModificacoes[i] != "+"  && conjuntoModificacoes[i] != "x"){
                index = i;
            }
            if(conjuntoModificacoes.length == 1){
                index = 0;
            }
        }
        conjuntoModificacoes.splice(index+1, conjuntoModificacoes.length - 1);
    }

    if(conjuntoModificacoes.length === 1){
        conjuntoModificacoes = [];
    }
    let conjuntoModificado = conjuntoModificacoes.toString().replace(/\,/g,'');
    
    itensCompletos = conjuntoModificado;
    itens = conjuntoModificacoes;
    visor.innerHTML = itensCompletos;
    simbolo = false;
}