let todos = entrada.concat(principal, sobremesa, bebida);
let alimentoEscolhido;

function listar(){
    document.querySelectorAll('.food').forEach((item, itemIndex)=>{
        item.setAttribute('index', itemIndex);
    })
}

function removerMarcacao(){
    if(document.querySelector('.borda-baixa')){
        document.querySelector('.borda-baixa').classList.remove('borda-baixa')
    }
}

function tudo(){
    removerMarcacao()
    document.querySelector('.todos').classList.add('borda-baixa');
    let item = '';
    for(let i = 0; i<todos.length; i++){
        item += `
        <div class="food">
            <div class="food-image">
                <img src="${todos[i].img}" alt="${todos[i].alt}">
            </div>
            <div class="food-description">
                <h1>${todos[i].nome}<span>$${todos[i].preco.toFixed(2)}</span></h1>
                <p>${todos[i].descricao}</p>
            </div>
        </div>
        `;
    }
    document.querySelector('.food-list').innerHTML = item;
    listar();
    janelaAlimentos();
}

function entradas(){
    removerMarcacao()
    document.querySelector('.entradas').classList.add('borda-baixa');
    let item = '';
    for(let i = 0; i<entrada.length; i++){
        item += `
        <div class="food">
            <div class="food-image">
                <img src="${entrada[i].img}" alt="${entrada[i].alt}">
            </div>
            <div class="food-description">
                <h1>${entrada[i].nome}<span>$${entrada[i].preco.toFixed(2)}</span></h1>
                <p>${entrada[i].descricao}</p>
            </div>
        </div>
        `;
    }
    document.querySelector('.food-list').innerHTML = item;
    listar();
    janelaAlimentos();
}

function principais(){
    removerMarcacao()
    document.querySelector('.principais').classList.add('borda-baixa');
    let item = '';
    for(let i = 0; i<principal.length; i++){
        item += `
        <div class="food">
            <div class="food-image">
                <img src="${principal[i].img}" alt="${principal[i].alt}">
            </div>
            <div class="food-description">
                <h1>${principal[i].nome}<span>$${principal[i].preco.toFixed(2)}</span></h1>
                <p>${principal[i].descricao}</p>
            </div>
        </div>
        `;
    }
    document.querySelector('.food-list').innerHTML = item;
    listar();
    janelaAlimentos();
}

function sobremesas(){
    removerMarcacao()
    document.querySelector('.sobremesas').classList.add('borda-baixa');
    let item = '';
    for(let i = 0; i<sobremesa.length; i++){
        item += `
        <div class="food">
            <div class="food-image">
                <img src="${sobremesa[i].img}" alt="${sobremesa[i].alt}">
            </div>
            <div class="food-description">
                <h1>${sobremesa[i].nome}<span>$${sobremesa[i].preco.toFixed(2)}</span></h1>
                <p>${sobremesa[i].descricao}</p>
            </div>
        </div>
        `;
    }
    document.querySelector('.food-list').innerHTML = item;
    listar();
    janelaAlimentos();
}

function bebidas(){
    removerMarcacao()
    document.querySelector('.bebidas').classList.add('borda-baixa');
    let item = '';
    for(let i = 0; i<bebida.length; i++){
        item += `
        <div class="food">
            <div class="food-image">
                <img src="${bebida[i].img}" alt="${bebida[i].alt}">
            </div>
            <div class="food-description">
                <h1>${bebida[i].nome}<span>$${bebida[i].preco.toFixed(2)}</span></h1>
                <p>${bebida[i].descricao}</p>
            </div>
        </div>
        `;
    }
    document.querySelector('.food-list').innerHTML = item;
    listar();
    janelaAlimentos();
}

document.querySelector('.food-list').innerHTML = '';
tudo();

document.querySelector('.todos').addEventListener("click", tudo);
document.querySelector('.entradas').addEventListener("click", entradas);
document.querySelector('.principais').addEventListener("click", principais);
document.querySelector('.sobremesas').addEventListener("click", sobremesas);
document.querySelector('.bebidas').addEventListener("click", bebidas);

function janelaAlimentos(){
    document.querySelectorAll('.food').forEach((item, itemIndex)=>{
        item.addEventListener('click', ()=>{
            document.querySelector('main').classList.add('transparent-background');
            document.querySelector('.window-area').style.display = 'flex';
            document.querySelector('.window-area').style.opacity = 1;
            let indexItem = item.getAttribute('index');
            let objeto = document.querySelector('.borda-baixa').innerHTML;
            let infos = '';
            switch(objeto){
                case 'Todos':
                    alimentoEscolhido = todos[indexItem];
                    break;
                case 'Entradas':
                    alimentoEscolhido = entrada[indexItem];
                    break;
                case 'Pratos Principais':
                    alimentoEscolhido = principal[indexItem];
                    break;
                case 'Sobremesas':
                    alimentoEscolhido = sobremesa[indexItem];
                    break;
                case 'Bebidas':
                    alimentoEscolhido = bebida[indexItem];
                    break;
            }
            infos = `
                <img src="${alimentoEscolhido.img}">
                <div class="central-window">
                    <h1>${alimentoEscolhido.nome}</h1>
                    <p>${alimentoEscolhido.descricao}</p>
                    </br>
                    <p>Serve 2 pessoas.</p>

                </div>
            `;
            document.querySelector('.window').innerHTML = infos;
            document.querySelector('.window-area').addEventListener("click", ()=>{
                document.querySelector('.window-area').style.display = 'none';
                document.querySelector('.window-area').style.opacity = 0;
                document.querySelector('main').classList.remove('transparent-background');
            })
        })
    });
}



