const { EventEmitter } = require("events");

const ev = new EventEmitter();

ev.on("saySomething", (message) => {
    console.log(`Eu te ouvi, ${message}`)
})

ev.once("sayHello", () => {
    console.log("Olá");
})

ev.emit("saySomething", "Gabriel")
ev.emit("sayHello")
ev.emit("sayHello")