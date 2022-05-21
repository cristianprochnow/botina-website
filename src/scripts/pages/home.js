function toggleResponsiveMenu() {
  const responsiveMenu = document.querySelector('section#responsive-menu');
  const classes = {
    show: 'visible',
    hide: 'hidden' 
  };
  const isVisible = responsiveMenu.className == classes.show;

  console.log(responsiveMenu.className)

  if (isVisible) {
    responsiveMenu.className = classes.hide;
  } else {
    responsiveMenu.className = classes.show;
  }
}