var Thermostat = function() {
  this.temp = 20;
  this.powerMode = true
}

Thermostat.prototype.up = function() {
  this.temp += 10;
}

Thermostat.prototype.down = function() {
  if (this.temp < 10) {
    throw ("temperature cannot be lower then 10");
  }
  this.temp -= 10;
}

Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.toggleMode = function() {
  this.powerMode = !this.powerMode;
};
