let sTitle = "";
let sDescription = "";

document.querySelector(".render").addEventListener("click", function () {
    sTitle = document.querySelector(".title").value
    sDescription = document.querySelector(".description").value

    let stars = document.querySelector(".choice-stars").checked
    let rating = document.querySelector(".choice-rating").checked
    let emoji = document.querySelector(".choice-emoji").checked

    document.querySelector("h1").textContent = sTitle;
    document.querySelector("h1").removeAttribute("hidden")
    document.querySelector("h2").textContent = sDescription;
    document.querySelector("h2").removeAttribute("hidden")

    if (stars) {
        document.querySelector(".checked_stars").removeAttribute("hidden")
        document.querySelector(".checked_rating").setAttribute("hidden", "hidden")
        document.querySelector(".checked_emoji").setAttribute("hidden", "hidden")
    } else if (rating) {
        document.querySelector(".checked_rating").removeAttribute("hidden")
        document.querySelector(".checked_stars").setAttribute("hidden", "hidden")
        document.querySelector(".checked_emoji").setAttribute("hidden", "hidden")
    } else if (emoji) {
        document.querySelector(".checked_emoji").removeAttribute("hidden")
        document.querySelector(".checked_rating").setAttribute("hidden", "hidden")
        document.querySelector(".checked_stars").setAttribute("hidden", "hidden")
    }

});