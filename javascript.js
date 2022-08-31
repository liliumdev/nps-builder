let stars = document.querySelector(".stars-rating").children;
let scores = document.querySelector(".score-rating").children;
let emojis = document.querySelector(".emoji-rating").children;
let button = document.querySelector("button");

function hover(object) {
  for (let i = 0; i < object.length; i++) {
    object[i].onmouseover = function () {
      object[i].style.cursor = "pointer";
      for (let j = 0; j <= i; j++) {
        object[j].style.color = "yellow";
      }
      for (let j = object.length - 1; j > i; j--) {
        object[j].style.color = "white";
      }
    };
  }
}

button.addEventListener("click", function () {
  surveyTypeCheck = [
    document.querySelector(".stars").checked,
    document.querySelector(".rating").checked,
    document.querySelector(".emoji").checked,
  ];
  surveyHiddenPanes = [
    document.querySelector(".hidden-stars"),
    document.querySelector(".hidden-scores"),
    document.querySelector(".hidden-emojis"),
  ];

  sTitle = document.querySelector(".s-title").value;
  sDescription = document.querySelector(".s-description").value;

  document.querySelector("h1").textContent = sTitle;
  document.querySelector("h1").removeAttribute("hidden");
  document.querySelector("h2").textContent = sDescription;
  document.querySelector("h2").removeAttribute("hidden");

  for (let i = 0; i < surveyHiddenPanes.length; i++) {
    if (surveyTypeCheck[i] === true) {
      surveyHiddenPanes[i].removeAttribute("hidden");
      hover(stars);
      hover(scores);
      hover(emojis);
    } else {
      surveyHiddenPanes[i].setAttribute("hidden", "hidden");
    }
  }
});
