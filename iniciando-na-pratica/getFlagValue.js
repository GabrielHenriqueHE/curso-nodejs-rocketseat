module.exports = function getFlagValue(flagName) {
    const flag = process.argv.indexOf(flagName);
    
    if (flag == -1) {
        throw new Error("Nenhuma flag foi passada");
    }

    const flagValue = process.argv[flag + 1];
    if (typeof flagValue == "undefined") {
        return "Nenhum valor foi passado para a flag"
    } else {
        return `Valor da flag ${flagName}: ${flagValue}`
    }
}