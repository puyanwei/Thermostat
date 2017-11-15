describe('Thermostat', () => {
  var thermostat;

  beforeEach(() => (thermostat = new Thermostat()));

  describe('#initialize', () => {
    it('starting temperature is 20 degrees', () => {
      expect(thermostat.temp).toEqual(20);
    });

    it('power saving mode is on by default', () => {
      expect(thermostat.powerMode).toBe(true);
    });
  });

  describe('#up', () => {
    it('makes the temperature go up by 1 degrees', () => {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    });

    it('cannot go higher then 25 when powermode is on', () => {
      thermostat.temp = 25;
      expect(() => {
        thermostat.up();
      }).toThrow('temperature cannot be higher then 25 degrees');
    });

    it('cannot go higher then 32 when powermode is off', () => {
      thermostat.temp = 32;
      thermostat.toggleMode();
      expect(() => {
        thermostat.up();
      }).toThrow('temperature cannot be higher then 32 degrees');
    });
  });

  describe('#down', () => {
    it('makes the temperature go down by 1 degrees', () => {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    });

    it('cannot go lower then 10', () => {
      thermostat.temp = 10;
      thermostat.down();
      expect(() => {
        thermostat.down();
      }).toThrow('temperature cannot be lower then 10 degrees');
    });
  });

  describe('#reset', () => {
    it('resets temperature to 20 degrees', () => {
      thermostat.temp = 50;
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('#toggleMode', () => {
    it('toggles the mode on and off', () => {
      thermostat.toggleMode();
      expect(thermostat.powerMode).toBe(false);
    });

    it('displays powermode status when toggling', () => {
      expect(thermostat.toggleMode()).toEqual('Power mode off');
      expect(thermostat.toggleMode()).toEqual('Power mode on');
    });
  });

  describe('#powerModeOn', () => {
    it('is turned on', () => {
      thermostat.powerMode = false;
      thermostat.powerModeOn();
      expect(thermostat.powerMode).toEqual(true);
    });
  });

  describe('#powerModeOff', () => {
    it('is turned off', () => {
      thermostat.powerModeOff();
      expect(thermostat.powerMode).toEqual(false);
    });
  });

  describe('#lowUsage', () => {
    it('displays the current usage, which is low', () => {
      thermostat.temp = 15;
      expect(thermostat.printUsage()).toEqual('low usage');
    });
  });

  describe('#mediumUsage', () => {
    it('displays the current usage, which is medium', () => {
      thermostat.temp = 20;
      expect(thermostat.printUsage()).toEqual('medium usage');
    });
  });

  describe('#highUsage', () => {
    it('displays the current usage, which is high', () => {
      thermostat.temp = 27;
      expect(thermostat.printUsage()).toEqual('high usage');
    });
  });

  describe('#showTemp', () => {
    it('displays the current temperature', () => {
      thermostat.temp = 32;
      expect(thermostat.showTemp()).toEqual(32);
    });
  });
});
