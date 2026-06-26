function carregar(){
var msg = document.getElementById('msg');
var img = document.getElementById('img');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    img.src = 'imagens/manha2.png'
    document.body.style.background = '#e2cd9f'
}else if(hora >= 12 && hora <= 18){
    img.src = 'imagens/tarde2.png'
    document.body.style.background = '#a76a53'
}else{
    img.src = 'imagens/noite2.png'
    document.body.style.background = '#515154'
}
}