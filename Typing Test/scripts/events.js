document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("load", fetchdata());
document.addEventListener("keypress", (e) => {
  userinput(e);
});
