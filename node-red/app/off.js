var PIN = process.argv[2];
var Gpio = require('/usr/local/lib/node_modules/onoff').Gpio;
var LED = new Gpio(PIN, 'out');
LED.writeSync(0);
