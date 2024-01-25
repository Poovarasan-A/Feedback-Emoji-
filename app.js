const ratings = document.querySelectorAll(".ratings");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("button");
const panel = document.querySelector("#panel");

let selectedRating = "";

ratingsContainer.addEventListener("click", (emoji) => {
  if (emoji.target.parentNode.classList.contains("ratings")) {
    // console.log(emoji.target.parentNode.classList.contains("ratings"));
    removeActive();
    emoji.target.parentNode.classList.add("active");
    selectedRating = emoji.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <p class="feedback"><span>💖</span> <br>Thankyou for your feedback<br><strong>- ${selectedRating} -</strong></P>
    `;
});

function removeActive() {
  for (i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
