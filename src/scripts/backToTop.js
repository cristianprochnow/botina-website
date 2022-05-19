window.addEventListener('scroll', onScroll)

function onScroll() {
  showBackToTop()
}
function showBackToTop() {
  if (scrollY > 500) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}
