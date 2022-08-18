document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    if(input !== ""){
        mostrarAviso('Carregando...');
        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${encodeURI(input)}&units=metric&lang=pt_br&appid=d06cdb298fafc83c520d5ab677fc477e`);
        let json = await results.json();

        if(json.cod === 200){
            mostrarInfo({
                nome: json.name,
                pais: json.sys.country,
                temp: json.main.temp,
                icone: json.weather[0].icon,
                ventoVel: json.wind.speed,
                ventoAng: json.wind.deg
            })
        } else{
            mostrarAviso('Não encontrado!');
        }
    }
});

function mostrarInfo(info){
    mostrarAviso('');
    document.querySelector('.cidade-info').style.display = 'block';
    document.querySelector('.nome-cidade').innerHTML = `${info.nome}, ${info.pais}`;
    document.querySelector('.temp').innerHTML = `${info.temp} <sup>ºC</sup>`;
    document.querySelector('.temperatura img').setAttribute('src', 
    `http://openweathermap.org/img/wn/${info.icone}@2x.png`);
    document.querySelector('.vent').innerHTML = `${info.ventoVel} <span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${info.ventoAng-90}deg)`;
}

function mostrarAviso(msg){
    document.querySelector('.aviso').innerHTML = msg;
}