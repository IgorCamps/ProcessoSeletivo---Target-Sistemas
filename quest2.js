function isFibonacci(num) {
    let a = 0, b = 1, temp;
  
    if (num === 0 || num === 1) {
      return true;
    }
  
    while (b < num) {
      temp = b;
      b = a + b;
      a = temp;
    }
  
    return b === num;
  }
  
  const num = 21;  // Você pode mudar o número para testar
  if (isFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }
  