const video = document.querySelector("video")
const muteIcon = document.querySelector(".fa-volume-mute")
const muteButton = muteIcon.parentNode


muteButton.addEventListener("click", () => 
{
  if (video.muted) 
  {
    video.muted = false
    muteIcon.classList.remove("fa-volume-mute")
    muteIcon.classList.add("fa-volume-up")
  }
  else 
  {
    video.muted = true
    muteIcon.classList.remove("fa-volume-up")
    muteIcon.classList.add("fa-volume-mute")
  }
})


const button = document.createElement("button")
document.body.appendChild(button)
button.innerHTML = "<i class='fas fa-chevron-up'></i>"

button.style.position = "fixed"
button.style.bottom = "30px"
button.style.right = "20px"


button.addEventListener("click", () => 
{
  window.scrollTo({ top: 0, behavior: "smooth" })
})

window.addEventListener("scroll", () => 
{
    if (window.scrollY > 800) 
    {
      button.style.display = "block"
    } 
    else 
    {
      button.style.display = "none"
    }
})

const dateElement = document.getElementById('current-date')
const today = new Date()
const options = { year: 'numeric', month: 'long', day: 'numeric' }
dateElement.textContent = today.toLocaleDateString('pt-BR', options)