function tempo(){
    //definir horário no relógio digital
    let dataAtual = new Date();
    let hora = dataAtual.getHours();
    let minuto = dataAtual.getMinutes();
    let segundo = dataAtual.getSeconds();
    document.querySelector('.digital').innerHTML = `${fixzero(hora)}:${fixzero(minuto)}:${fixzero(segundo)}`

    //definir horario no relógio analógico
    let hGrau = (360/12)*hora - 90;
    let mGrau = (360/60)*minuto - 90;
    let sGrau = (360/60)*segundo - 90;
    document.querySelector('.p_h').style.transform = `rotate(${hGrau}deg)`;
    document.querySelector('.p_m').style.transform = `rotate(${mGrau}deg)`;
    document.querySelector('.p_s').style.transform = `rotate(${sGrau}deg)`;
}

function fixzero(num){
    return num<10 ? `0${num}` : num;
}

setInterval(tempo, 1000);