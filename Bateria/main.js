function som(chosenKey, item){
    document.querySelector(`#s_key${chosenKey}`).play();
    teclaAcesa(item);
}

function teclaAcesa(item){
    item.style.color = 'yellow';
    item.style.border = '2px solid yellow';
    setTimeout(()=>{
        item.style.color = '#FFF';
        item.style.border = '2px solid #FFF';
    }, 300)
}

document.querySelectorAll('.key').forEach((item)=>{
    item.addEventListener("click",()=>{
        let chosenKey = item.innerHTML.toLowerCase();
        som(chosenKey, item);
    })
})

document.addEventListener('keydown', (event)=>{
    let keyName = event.key;
    let elemento;
    document.querySelector(`[data-key=key${keyName}]`).click();
})

document.querySelector('.composicao button').addEventListener("click", ()=>{
    let composicao = document.querySelector('.composicao input').value;
    if(composicao !== ''){
        let musica = composicao.split('');
        let tempo = 0;
        for(let i = 0; i<musica.length; i++){
            setTimeout(()=>{
                document.querySelector(`[data-key=key${musica[i]}]`).click();
            }, tempo)
            tempo += 300;
        }
    }
})