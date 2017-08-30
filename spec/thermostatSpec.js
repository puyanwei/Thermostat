describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  describe("#initialize", function() {
    it("starting temperature is 20 degrees", function() {
      expect(thermostat.temp).toEqual(20);
    })
  })

  describe("#initialize", function() {
    it("power saving mode is on by default", function() {
      expect(thermostat.powerMode).toBe(true);
    })
  })


  describe('#reset', function() {
    it("resets temperature to 20 degrees", function() {
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

  describe('#toggleMode', function() {
    it("displays powermode status when toggling", function() {
      expect(thermostat.toggleMode()).toEqual("Power mode off");
      expect(thermostat.toggleMode()).toEqual("Power mode on");
    })
  })

  describe("#up", function() {
    it("makes the temperature go up by 1 degrees", function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    })
  })

  describe("#down", function() {
    it("makes the temperature go down by 1 degrees", function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    })
  })

  describe("#down", function() {
    it("cannot go lower then 10", function() {
      thermostat.temp = 10;
      thermostat.down()
      expect(function() {
        thermostat.down()
      }).toThrow("temperature cannot be lower then 10 degrees");
    })
  })

  describe('#up', function() {
    it("cannot go higher then 25 when powermode is on", function() {
      thermostat.temp = 25;
      expect(function() {
        thermostat.up()
      }).toThrow("temperature cannot be higher then 25 degrees");
    })
  })

  describe('#up', function() {
    it("cannot go higher then 35 when powermode is off", function() {
      thermostat.temp = 35;
      thermostat.toggleMode()
      expect(function() {
        thermostat.up()
      }).toThrow("temperature cannot be higher then 35 degrees");
    })
  })

  describe('#printUsage', function() {
    it("displays the current usage, which is low", function() {
      thermostat.temp = 15;
      expect(thermostat.printUsage()).toEqual("low usage")
    })
  });

  describe('#printUsage', function() {
    it("displays the current usage, which is medium", function() {
      thermostat.temp = 20;
      expect(thermostat.printUsage()).toEqual("medium usage")
    })
  });
  describe('#printUsage', function() {
    it("displays the current usage, which is high", function() {
      thermostat.temp = 27;
      expect(thermostat.printUsage()).toEqual("high usage")
    })
  });
})
