var Thermostat = function() {
  this.temp = 20;
  this.powerMode = true
}

Thermostat.prototype.up = function() {
  if (this.powerMode == true && this.temp == 25) {
    throw ("temperature cannot be higher then 25 degrees")
  } else if (this.powerMode == false && this.temp == 35) {
    throw ("temperature cannot be higher then 35 degrees")
  }
  this.temp++;
}

Thermostat.prototype.down = function() {
  if (this.temp < 10) {
    throw ("temperature cannot be lower then 10 degrees");
  }
  this.temp--;
}

Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.toggleMode = function() {
  this.powerMode = !this.powerMode;
  if (this.powerMode == false) {
    return "Power mode off";
  } else {
    return "Power mode on";
  }
};

Thermostat.prototype.printUsage = function() {
  if (this.temp < 18) {
    return "low usage";
  } else if (this.temp < 25) {
    return "medium usage";
  } else {
    return "high usage"
  }
};
