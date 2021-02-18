const btnCalculate = document.querySelector('.btnCalculate');
const result = document.querySelector('.result');

function correctHeight(height) {
  let corrected;

  if (!(height.includes(',') || height.includes('.'))) {
    const part1 = height.slice(0, 1);
    const part2 = height.slice(1);
    corrected = part1.concat('.', part2);
  }

  return corrected || height;
}

function calculateIMC(weight, height) {
  const correctedHeight = correctHeight(height);

  const IMC = weight / (correctedHeight * correctedHeight);

  let resultIMC;

  if (IMC < 18.5) resultIMC = "<span class='red'>ABAIXO DO PESO</span>";
  else if (IMC < 24.9) resultIMC = "<span class='green'>PESO NORMAL</span>";
  else if (IMC < 29.9) resultIMC = "<span class='red'>SOBREPESO</span>";
  else if (IMC < 34.9) resultIMC = "<span class='red'>OBESIDADE GRAU I</span>";
  else if (IMC < 39.9) resultIMC = "<span class='red'>OBESIDADE GRAU II</span>";
  else resultIMC = "<span class='red'>OBESIDADE GRAU III</span>";

  return resultIMC;
}

function errorForm() {
  return "<span class='error'>POR FAVOR, PREENCHA OS CAMPOS!</span>";
}

function handleClick() {
  const weight = +document.querySelector('.weight').value;
  const height = document.querySelector('.height').value;

  if (weight && height) result.innerHTML = calculateIMC(weight, height);
  else result.innerHTML = errorForm();
}

btnCalculate.addEventListener('click', handleClick);
