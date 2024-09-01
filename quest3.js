const faturamento = [220.5, 350.0, 0, 470.2, 130.3, 0, 0, 250.1, 375.0, 200.2];  // Exemplo de dados

function calcularFaturamento(faturamento) {
  let menorValor = Infinity;
  let maiorValor = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  for (let valor of faturamento) {
    if (valor > 0) {
      if (valor < menorValor) menorValor = valor;
      if (valor > maiorValor) maiorValor = valor;
      somaFaturamento += valor;
      diasComFaturamento++;
    }
  }

  const mediaMensal = somaFaturamento / diasComFaturamento;
  let diasAcimaDaMedia = 0;

  for (let valor of faturamento) {
    if (valor > mediaMensal) diasAcimaDaMedia++;
  }

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
}

const resultado = calcularFaturamento(faturamento);
console.log("Menor valor de faturamento: R$", resultado.menorValor);
console.log("Maior valor de faturamento: R$", resultado.maiorValor);
console.log("Dias com faturamento acima da média: ", resultado.diasAcimaDaMedia);
