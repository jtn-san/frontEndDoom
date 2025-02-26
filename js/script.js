var logoNav = document.getElementById("logo-nav")
window.addEventListener('scroll', function (e) {

    const currentScrollY = this.scrollY;

    if (currentScrollY < lastScrollTop) {
        logoNav.style.height = "500px"
        logoNav.style.marginTop = "-100px";
    }
    else if (currentScrollY > lastScrollTop) {
        logoNav.style.height = "200px"
        logoNav.style.marginTop = "0";

    }

    lastScrollTop = currentScrollY;
}, true)


var lastScrollTop = 0;
var logoNav = document.getElementById("logo-nav")
window.addEventListener('scroll', function (e) {

    const currentScrollY = this.scrollY;

    if (currentScrollY < lastScrollTop) {
        logoNav.style.height = "500px"
        logoNav.style.marginTop = "-100px";
    }
    else if (currentScrollY > lastScrollTop) {
        logoNav.style.height = "200px"
        logoNav.style.marginTop = "0";

    }

    lastScrollTop = currentScrollY;
}, true)


// Funcao trocar imagens
function trocarImgDoom1() {

    // document.body.style.backgroundImage = "url('./img/doom 1994 logo.png')"
    const slides = document.querySelector('.slides')
    let textoH1 = document.getElementById("textoH1")
    let textoP1 = document.getElementById("textoP1")
    slides.style.backgroundImage = "url('./img/wallpaperDoom/wallpaperDoom1.jpg')"
    textoP1.textContent = "Doom é um clássico jogo de tiro em primeira pessoa (1993) onde você enfrenta hordas de demônios com ação rápida e violenta. Revolucionário, marcou o gênero FPS e a cultura dos games."
    textoH1.textContent = "Doom 1"
}

function trocarImgDoom2() {
    // document.body.style.backgroundImage = "url('./img/doom 1994 logo.png')"
    let textoH1 = document.getElementById("textoH1")
    let textoP1 = document.getElementById("textoP1")
    const slides = document.querySelector('.slides')
    slides.style.backgroundImage = "url('./img/wallpaperDoom/wallpaperDoom2.jpeg')"
    textoP1.textContent = "Doom 2 (1994) é a sequência direta do clássico jogo de tiro em primeira pessoa da id Software. Com mais armas, inimigos e níveis desafiadores, o jogo mantém a ação rápida e violenta do original, introduzindo o icônico Super Shotgun. Assim como seu predecessor, 'Doom 2'consolidou-se como um marco dos FPS, ampliando o legado da franquia e influenciando gerações de jogos."
    textoH1.textContent = "Doom 2"
}
function trocarImgDoom3() {

    // document.body.style.backgroundImage = "url('./img/doom 1994 logo.png')"
    let textoH1 = document.getElementById("textoH1")
    let textoP1 = document.getElementById("textoP1")
    const slides = document.querySelector('.slides')
    slides.style.backgroundImage = "url('./img/wallpaperDoom/wallpaperDoom3.png')"
    textoP1.textContent = "Doom 3 (2004), da id Software, revolucionou gráficos e atmosfera na série, focando em horror e imersão. Ambientado em Marte, onde experimentos abrem portais para demônios, o jogo equilibra ação e tensão, marcando a franquia com visuais e iluminação inovadores."
    textoH1.textContent = "Doom 3"
}

function trocarImgDoom4() {

    // document.body.style.backgroundImage = "url('./img/doom 1994 logo.png')"
    let textoH1 = document.getElementById("textoH1")
    let textoP1 = document.getElementById("textoP1")
    const slides = document.querySelector('.slides')
    slides.style.backgroundImage = "url('./img/wallpaperDoom/wallpaperDoom64.jpg')"
    textoP1.textContent = "Doom 64 é um jogo de tiro em primeira pessoa lançado em 1997 para o Nintendo 64. A trama segue o Doom Slayer, que retorna a uma estação espacial para combater demônios que infestaram o local. O enredo se passa após os eventos de Doom II, com uma narrativa que explora o mistério por trás da abertura de portais infernais e a luta pela sobrevivência. O jogo se destaca por sua atmosfera sombria, gráficos avançados para a época e mecânicas de jogo desafiadoras."
    textoH1.textContent = "Doom 64"
}

//Funcao para leitura de texto - Utilizando a API: Speech Synthesis - testada apenas no chrome
function lerTexto() {
    var paragrafo = document.getElementById("textoP1");
    var mensagem = new SpeechSynthesisUtterance();
    mensagem.text = paragrafo.textContent || paragrafo.innerText;
    speechSynthesis.speak(mensagem);
    // while (audio.play) {
    //     audio.pause();
    // } 
}
function lerTexto2() {
    var paragrafo2 = document.getElementById("textoP2");
    var mensagem2 = new SpeechSynthesisUtterance();
    mensagem2.text = paragrafo2.textContent || paragrafo2.innerText;
    speechSynthesis.speak(mensagem2);
    // while (audio.play) {
    //     audio.pause();
    // } 
}

document.getElementById("btnFalar").addEventListener("click", lerTexto);
document.getElementById("btnFalar2").addEventListener("click", lerTexto2);


// // botão play para o áudio

// var audio = document.getElementById("meuAudio");

// function playPause() {
//     if (audio.paused) {
//         audio.play();

//     } else {
//         audio.pause();

//     }
function alerta(){
    alert("você será redirecionado para outra página do jogo em PDF")
}

