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

  describe("#initialize", function() {
    it("power saving mode is on by default", function() {
      expect(thermostat.powerMode).toBe(true);
    })
  })

  describe("#up", function() {
    it("makes the temperature go up by 10", function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(30);
    })
  })

  describe("#down", function() {
    it("makes the temperature go down by 10", function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(10);
    })
  })

  describe("#down", function() {
    it("cannot go lower then 10", function() {
      thermostat.temp = 10;
      thermostat.down()
      expect(function() {
        thermostat.down()
      }).toThrow("temperature cannot be lower then 10");
    })
  })

  describe('#reset', function() {
    it("resets temperature to 20", function() {
      thermostat.temp = 50;
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    })
  })

  describe('#toggleMode', function() {
    it("toggles the mode on and off", function() {
      thermostat.toggleMode();
      expect(thermostat.powerMode).toBe(false);
    })
  })

  // describe('#up', function() {
  //   it("cannot go higher then 32", function() {
  //     this.powerMode = false;
  //     expect(thermostat.up)
  //   })
  // })

})
