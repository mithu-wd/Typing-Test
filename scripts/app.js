const url = "https://quotes.stormconsultancy.co.uk/random.json";
let paragraph = "";
let current_index = 0;
let text = document.querySelector(".text-remaining");

let fetchdata = () => {
  let response = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      paragraph = data.quote;
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
