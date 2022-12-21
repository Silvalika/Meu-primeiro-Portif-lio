/*--- menu mobile ---*/
const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

/*--- interesses ---*/
const LISTA_INTERESSES = document.querySelectorAll('.icones-interesses')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-bolo': 'No momento pandêmico eu me aproximei da confeitaria e hoje sou apaixonada é uma coisa que me acalma, posso criar sabores e afagar quem eu amo e do jeito mais doce',
    'interesse-planta': 'Cultivo algumas plantas, porem minha favorita é a orquídea. Curiosidades sobre orquídeas: São 50 mil espécies de orquídeas, 20 mil encontradas diretamente na natureza e outras 30 mil criadas em laboratório',
    'interesse-Ra-tim-bum': 'Tv cultura, sempre fui apaixonada e marcou varios momentos da minha vida, minha infancia foi mais feliz com castelo ra-tim-bum e outros.',
    
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}

