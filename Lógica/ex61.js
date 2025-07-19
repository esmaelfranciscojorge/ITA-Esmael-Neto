let v = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let aux;


for (let i = 8; i >= 5; i--) {
  aux = v[i];
  v[i] = v[8 - i + 1];
  v[8 - i + 1] = aux;
}


v[3] = v[1];

v[v[3]] = v[v[2]];

console.log("Vetor final:");
for (let i = 0; i < v.length; i++) {
  console.log(`v[${i}] = ${v[i]}`);
}