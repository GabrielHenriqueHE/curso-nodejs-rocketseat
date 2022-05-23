// clearInterval irá cancelar um setInterval registrado.

const interval = 1000;
const checking = () => console.log("Checando");

let routine = setInterval(checking, interval)

clearInterval(routine);