$(document).ready(() => {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp);
});
