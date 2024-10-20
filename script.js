function Generate() {
  const letters = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż".split("");
  let shuffled = "";
  const len = letters.length;
  for (let i = 0; i < len; i++) {
    let randomLetterIndex = Math.floor(Math.random() * letters.length);
    shuffled += letters[randomLetterIndex];
    letters.splice(randomLetterIndex, 1);
  }

  let file = document.createElement("a");
  file.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(shuffled)
  );
  file.setAttribute("download", "key.txt");

  file.style.display = "none";
  document.body.appendChild(file);
  file.click();
  document.body.removeChild(file);
}

const openFile = (e) => {
  let input = e.target;

  let reader = new FileReader();
  reader.onload = () => {
    let text = reader.result;
    console.log(text);
    alert("Załadowano");
  };
  reader.readAsText(input.files[0]);
};
