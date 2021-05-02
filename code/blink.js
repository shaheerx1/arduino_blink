const { Board, Led } = require("johnny-five");
const arduino = new Board();

arduino.on("ready", function() {
  const led = new Led(13);
   led.blink(500);
});

