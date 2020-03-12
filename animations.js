const portfolioProject = document.querySelector(".portfolio__project")
const portfolio = document.querySelector(".portfolio__projects");

window.onload = () => {
    (portfolio.firstElementChild).before(portfolio.lastElementChild);
}

const slideAnimation = (direction, projectLeft) => {
    const width = portfolioProject.offsetWidth;
    portfolio.animate([
        { left: 0 },
        { left: width*direction + 'px' }
    ], {
        duration: 1
    });
    projectLeft
        ? (portfolio.firstElementChild).before(portfolio.lastElementChild)
        : (portfolio.lastElementChild).after(portfolio.firstElementChild)
}

document.getElementById("left-arrow").addEventListener("click", () => slideAnimation(1, true));
document.getElementById("right-arrow").addEventListener("click", () => slideAnimation(-1, false));

const arrowDown = document.querySelector(".header__arrow-link");
const about = document.getElementById("about-me");
arrowDown.addEventListener("click", () => about.scrollIntoView({behavior:'smooth'}))