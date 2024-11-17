const form = document.querySelector("form");
const resultWrapper = document.querySelector("#result-wrapper");

const sumValues = (first, second) => {
  if (!first) {
    alert("É necessário digitar algum valor!");
    return;
  }

  if (!second) {
    alert("É necessário digitar algum valor!");
    return;
  }

  const sum = first + second;

  resultWrapper.innerHTML = `
    <p id="result">
      A soma entre ${first} e ${second} é igual a: ${sum}.
    </p>
  `;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstValue = Number(document.querySelector("#first-value").value);
  const secondValue = Number(document.querySelector("#second-value").value);

  sumValues(firstValue, secondValue);

  form.reset();
});
