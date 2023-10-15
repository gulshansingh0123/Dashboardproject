const close = document.querySelector(".close");
const sidebar = document.querySelector(".slider");
const closeSlider = () => {
    close.addEventListener("click", () => {
        sidebar.classList.toggle("left-0");
        close.classList.toggle("rotate")

    })
}
closeSlider();