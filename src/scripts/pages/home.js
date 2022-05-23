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

function goFromHomeToProject(fileName) {
  const path = './src/pages/projects/'+fileName;

  window.open(path);
}