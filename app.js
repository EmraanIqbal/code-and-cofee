const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("logged", (arg) => {
  console.log("Event Triggered", arg);
});

emitter.emit("logged", { age: 20, school: "gcul" });
