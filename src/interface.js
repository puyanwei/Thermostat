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

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=72a46f472cd78125c67ce1ba75151860&units=metric',
      function(data) {
        $('#current-temperature').text(data.main.temp);
      }
    );
    console.log(city);
    // 72a46f472cd78125c67ce1ba75151860
  });

  // function updateWeather(city) {
  //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  //   var token = '&appid=1165259d6e26ca0f8e03387e1f2da5ac';
  //   var units = '&units=metric';
  //   $.get(url + token + units, function(response) {
  //     $('#current-temp').text(Math.round(response.main.temp));
  //     $('#city').text(response.name);
  //   });
  // }

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
    $('#background').attr('class', thermostat.printUsage());
  }
});
