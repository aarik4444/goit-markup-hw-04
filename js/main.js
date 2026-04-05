const navList = document.querySelector(".nav-list")
const allLinks = document.querySelectorAll(".nav-link")

const handleClick = (event) => {

  const clickedLink = event.target.closest(".nav-link")

  if (!clickedLink) return

  allLinks.forEach(link => {
    link.classList.remove("active")
  })

  clickedLink.classList.add("active")
}

navList.addEventListener("click", handleClick)
