$(document).ready(() => {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', () => {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').on('click', () => {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').on('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').on('click', () => {
    thermostat.on();
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').on('click', () => {
    thermostat.off();
    $('#power-saving-status').text('off');
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
    $('#background').attr('class', thermostat.printUsage());
  }
});
