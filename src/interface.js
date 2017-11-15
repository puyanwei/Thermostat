$(document).ready(() => {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temp);

  $('#temperature-up').on('click', function() {
    // event listener
    thermostat.up(); // update model
    $('#temperature').text(thermostat.temp); // update view
  });
});
