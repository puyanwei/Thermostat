'use strict';

const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;
const MAX_TEMP_ON = 25;
const MAX_TEMP_OFF = 32;
const LOW_USAGE = 18;
const MEDIUM_USAGE = 25;

var Thermostat = function() {
  this.temp = DEFAULT_TEMP;
  this.powerMode = true;
};

Thermostat.prototype.up = function() {
  // if (this.powerMode == true && this.temp == MAX_TEMP_ON) {
  //   throw 'temperature cannot be higher then 25 degrees';
  // } else if (this.powerMode == false && this.temp == MAX_TEMP_OFF) {
  //   throw 'temperature cannot be higher then 32 degrees';
  // }
  this.temp++;
};

Thermostat.prototype.increaseTemperature = function() {
  this.temp++;
};

Thermostat.prototype.down = function() {
  if (this.temp < MIN_TEMP) {
    throw 'temperature cannot be lower then 10 degrees';
  }
  this.temp--;
};

Thermostat.prototype.reset = function() {
  this.temp = DEFAULT_TEMP;
};

Thermostat.prototype.toggleMode = function() {
  this.powerMode = !this.powerMode;
  if (this.powerMode == false) {
    return 'Power mode off';
  } else {
    return 'Power mode on';
  }
};

Thermostat.prototype.printUsage = function() {
  if (this.temp < LOW_USAGE) {
    return 'low usage';
  } else if (this.temp < MEDIUM_USAGE) {
    return 'medium usage';
  } else {
    return 'high usage';
  }
};

Thermostat.prototype.powerModeOn = function() {
  this.powerMode = true;
};

Thermostat.prototype.powerModeOff = function() {
  this.powerMode = false;
};

Thermostat.prototype.showTemp = function() {
  return this.temp;
};
