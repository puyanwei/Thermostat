describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe("#initialize", function() {
    it("starting temperature is 20", function() {
      expect(thermostat.temp).toEqual(20);
    })
  })
})
