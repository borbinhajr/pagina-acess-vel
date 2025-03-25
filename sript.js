document.addEventListener('DOMContentLoaded',function(){
    const aumentarfonteBotao = document.getElementById('aumentar-fonte');
    const diminuirfonteBotao = document.getElementById('diminuir-fonte');
    let tamanhoAtualFonte= 1;
    aumentarfonteBotao. addEventListener('click',function (){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize= `${tamanhoAtualFonte}rem`

    } 
    )
    diminuirfonteBotao. addEventListener('click',function (){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize= `${tamanhoAtualFonte}rem`
}
)
})