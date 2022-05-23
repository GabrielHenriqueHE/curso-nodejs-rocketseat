// setInterval irá rodar uma função N vezes depois de X milissegundos

const interval = 1000;
const checking = () => console.log("Checando");

setInterval(checking, interval)

console.log("A checagem começará em 1 segundo.")