let numero = 11;
let primo = true;

if (numero <= 1) primo = false;

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    primo = false;
    break;
  }
}

console.log(`${numero} ${primo ? 'é primo' : 'não é primo'}`);
