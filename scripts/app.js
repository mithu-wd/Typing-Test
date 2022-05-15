const url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
let paragraph = "";
let current_index = 0;
let text = document.querySelector(".text-remaining");

let fetchdata = () => {
  let response = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      paragraph = data.message;
      text.textContent = `|${paragraph}`;
    });
};

let userinput = (e) => {
  if (e.key === paragraph[current_index]) {
    text.textContent = `|${paragraph.slice(
      current_index + 1,
      paragraph.length
    )}`;
    current_index++;
  }
};
