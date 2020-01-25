const Gpio = require('/usr/local/lib/node_modules/onoff').Gpio;
//const Relay = (led, value) => led.writeSync(value);

var PIN = process.argv[2];
var PinState = process.argv[3];
//var Gpio = require('/usr/local/lib/node_modules/onoff').Gpio;

function toggle(state, pin) {
    var Relay = new Gpio(pin, 'out');
    if (state = 1) {
        Relay.writeSync(1);
    }       
    else if (state = 0) {
        Relay.writeSync(0);
    }       
    else {
        console.error(new error("invalid argument"));
    }
}

console.log(process.argv)
toggle(PinState, PIN)
