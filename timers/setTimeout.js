// Executa uma função depois de X milissegundos.

const timeOut = 3000;
const finished = () => {
    console.log("Função processada.")
}

setTimeout(finished, timeOut)

console.log("Vou aparecer enquanto a outra função está sendo processada.")