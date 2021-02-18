const btnCalcular = document.querySelector('.btnCalcular');
const resultado = document.querySelector('.resultado');

function corrigirAltura(altura) {
  let corrigido;

  if (!(altura.includes(',') || altura.includes('.'))) {
    const parte1 = altura.slice(0, 1);
    const parte2 = altura.slice(1);
    corrigido = parte1.concat('.', parte2);
  }

  return corrigido || altura;
}

function calculoIMC(peso, altura) {
  const alturaCorrigida = corrigirAltura(altura);

  const IMC = peso / (alturaCorrigida * alturaCorrigida);

  let resultIMC;

  if (IMC < 18.5) resultIMC = "<span class='red'>ABAIXO DO PESO</span>";
  else if (IMC < 24.9) resultIMC = "<span class='green'>PESO NORMAL</span>";
  else if (IMC < 29.9) resultIMC = "<span class='red'>SOBREPESO</span>";
  else if (IMC < 34.9) resultIMC = "<span class='red'>OBESIDADE GRAU I</span>";
  else if (IMC < 39.9) resultIMC = "<span class='red'>OBESIDADE GRAU II</span>";
  else resultIMC = "<span class='red'>OBESIDADE GRAU III</span>";

  return resultIMC;
}

function erroForm() {
  return "<span class='erro'>POR FAVOR, PREENCHA OS CAMPOS!</span>";
}

function gerarIMC() {
  const peso = +document.querySelector('.peso').value;
  const altura = document.querySelector('.altura').value;

  if (peso && altura) resultado.innerHTML = calculoIMC(peso, altura);
  else resultado.innerHTML = erroForm();
}

btnCalcular.addEventListener('click', gerarIMC);
