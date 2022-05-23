const { EventEmitter } = require("events")

class Character extends EventEmitter {
    constructor(name) {
        super()
        this.name = name;
    }
}

const chapolin = new Character("Chapolin Colorado");

chapolin.on("help", () => console.log(`EU! O ${chapolin.name}`))
chapolin.emit("help")