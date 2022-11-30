//função de tocar som

function tocaSom (idElementoAudio) 
{document.querySelector(idElementoAudio).play();}

const listadeteclas = document.querySelectorAll('.tecla');

for (contador = 0;
    contador < listadeteclas.length; 
    contador ++) 
    {
    const tecla = listadeteclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    listadeteclas[contador].onclick= function (){
    tocaSom(idAudio);
}

tecla.onkeydown = function (evento) {if(evento.code === "Enter" || evento.code === "Space"){tecla.classList.add('ativa')}}
tecla.onkeyup = function (){tecla.classList.remove('ativa') }

}

