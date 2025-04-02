document.addEventListener('DOMContentLoaded',function(){
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    
    botaoAcessibilidade.addEventListener('click',function(){
        botaoAcessibilidade.classList.toggle('rotacao-botao')
        opcoesAcessibilidade.classList.toggle('apresenta-lista')
    }
    )
    
        const aumentarFonteBotao = document.getElementById('aumentar-fonte');
        const diminuirFonteBotao = document.getElementById('diminuir-fonte');
        let tamanhoAtualFonte= 1;
        aumentarFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
        })
        diminuirFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
        })
        })