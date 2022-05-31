// componente que faz o menu do home aparecer e esconder.
function toggleResponsiveMenu() {
  const responsiveMenu = document.querySelector('section#responsive-menu');
  const classes = {
    show: 'visible',
    hide: 'hidden' 
  };
  const isVisible = responsiveMenu.className == classes.show;

  if (isVisible) {
    responsiveMenu.className = classes.hide;
  } else {
    responsiveMenu.className = classes.show;
  }
}

// função que muda para a pagina dos "projetos".
function goFromHomeToProject(fileName) {
  const path = './src/pages/projects/'+fileName;

  goTo(path);
}

// função que mudar para a pagina dos "aprenda conosco".
function goFromHomeToArduino(fileName) {
  const path = './src/pages/learn-with-us/'+fileName;
  
  goTo(path);
}

function goTo(path) {
  location.href = path;
}
