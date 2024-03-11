const number = parseInt(process.argv[2]);

if (isNaN(number) || number <= 0) {
  console.log('Por favor, forneça um número inteiro positivo válido como argumento de linha de comando.');
} else {
  let n1 = 0, n2 = 1, nextTerm;

  console.log('Sequência de Fibonacci:');

  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
