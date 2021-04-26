function factorial(n) {
  // Напиши свой код здесь
    return !(n !== 1) ? 1 : n * factorial(n - 1);
}

window.factorial = factorial;

export default factorial;
