// clearTimeout cancela um timeOut

const timeOut = 3000;
const finished = () => {
    console.log("Função processada.")
}

let timer = setTimeout(finished, timeOut)
clearTimeout(timer);