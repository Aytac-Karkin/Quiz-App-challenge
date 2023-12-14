// phew… not a lot going on here. Please add some code!

const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

function toggleAnswer () {
    var answer = document.getElementById("answer");
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none"
    }
}
