const btnCalcular = document.querySelector(".btnCalcular");
const resultado = document.querySelector(".resultado");

function calculoIMC(peso, altura) {
  const IMC = peso / (altura * altura);
  let resultIMC;

  if (IMC < 18.5) resultIMC = "<span class='red'>ABAIXO DO PESO</span>";
  else if (IMC < 24.9) resultIMC = "<span class='green'>PESO NORMAL</span>";
  else if (IMC < 29.9) resultIMC = "<span class='red'>SOBREPESO</span>";
  else if (IMC < 34.9) resultIMC = "<span class='red'>OBESIDADE GRAU I</span>";
  else if (IMC < 39.9) resultIMC = "<span class='red'>OBESIDADE GRAU II</span>";
  else if (IMC > 40) resultIMC = "<span class='red'>OBESIDADE GRAU III</span>";
  else resultIMC = "<span class='red'>POR FAVOR, PREENCHA OS CAMPOS!</span>";

  return resultIMC;
}

function gerarIMC() {
  const peso = +document.querySelector(".peso").value;
  const altura = +document.querySelector(".altura").value;
  resultado.innerHTML = calculoIMC(peso, altura);
}

btnCalcular.addEventListener("click", gerarIMC);
