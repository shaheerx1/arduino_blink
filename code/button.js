const { Board, Led, Switch } = require("johnny-five");
const board = new Board();

board.on("ready", function() {
  const button = new Switch(8);
  const light = new Led(13);

  button.on("close", function() {
    console.log("closed");
    led.off();
  });

  button.on("open", function() {
    console.log("open");
    led.on();
  });
});
