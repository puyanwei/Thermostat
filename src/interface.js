$(document).ready(() => {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp);

  $('#temperature-up').on('click', () => {
    thermostat.up();
    $('#temperature').text(thermostat.temp);
  });

  $('#temperature-down').on('click', () => {
    thermostat.down();
    $('#temperature').text(thermostat.temp);
  });

  $('#temperature-reset').on('click', () => {
    thermostat.reset();
    $('#temperature').text(thermostat.temp);
  });
});
