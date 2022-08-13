const mainPs = document.querySelectorAll('.mainPara')
mainPs.forEach((mainP) => {
  mainP.addEventListener('click', () => {
    mainP.classList.toggle('active')
    mainP.nextElementSibling.classList.toggle('active')
  })

  // find out how to remove the font weight when another is clicked
})
