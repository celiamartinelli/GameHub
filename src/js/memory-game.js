const emojis = [
  "🥑",
  "🥑",
  "🌻",
  "🌻",
  "🔥",
  "🔥",
  "😍",
  "😍",
  "👽",
  "👽",
  "💩",
  "💩",
  "✌🏻",
  "✌🏻",
  "😎",
  "😎",
];
const shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));
for (let i = 0; i < emojis.length; i++) {
  const card = document.createElement("div");
  card.className = "item";
  card.innerHTML = shuf_emojis[i];
  card.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(() => {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (document.querySelectorAll(".boxMatch").length == emojis.length) {
            alert("You Win!");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };
  document.querySelector(".game").appendChild(card);
}
