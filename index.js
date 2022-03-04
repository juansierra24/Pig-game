const fact = (num) => (num < 2 ? 1 : num * fact(num - 1));

console.log(fact(5));

const saludar = (a) => console.log('hola');

saludar();
