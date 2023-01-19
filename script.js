function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pega a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }

  // substituir a alt
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "foto de Gabriel com camisa branca")
  } else {
    img.setAttribute("alt", "foto de Gabriel no banheiro")
  }
}
