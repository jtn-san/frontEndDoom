var dosbox_DOOM;  // Definindo a variável globalmente

// Verificando se o DOM está totalmente carregado antes de inicializar o Dosbox
document.addEventListener("DOMContentLoaded", function () {
  dosbox_DOOM = new Dosbox({
    id: "DOOM",
    onload: function (dosbox) {
      console.log("Dosbox carregado com sucesso");
      
      // Verifique se a URL e o caminho do arquivo estão corretos
      dosbox_DOOM.run("https://thedoggybrad.github.io/doom_on_js-dos/DOOM-@evilution.zip", "./DOOM/DOOM.EXE");
      
      // Verificando se o elemento fullscreen_DOOM existe
      var fullscreenButton = document.getElementById("fullscreen_DOOM");
      if (fullscreenButton) {
        fullscreenButton.addEventListener("click", function () {
          if (dosbox_DOOM && typeof dosbox_DOOM.requestFullScreen === "function") {
            dosbox_DOOM.requestFullScreen();
          } else {
            console.error("Erro: dosbox_DOOM ou requestFullScreen não estão disponíveis");
          }
        });
      } else {
        console.error("Erro: Elemento com ID 'fullscreen_DOOM' não encontrado");
      }
    },
    onrun: function (dosbox, app) {
      console.log("App '" + app + "' está rodando");
    },
  });
});
