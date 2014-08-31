describe("The next IPRUG", function() {
  describe("when the month begins on a Monday (a week after FESuffolk)", function() {
    it("is on the first Tuesday", function() {
      expect(IPRUG.nextDate(new Date("2014-09-04"))).toEqual(new Date("2014-09-09"));
    });
  });


  describe("when the month begins on a Tuesday (the day after FESuffolk)", function() {
    it("is the third Tuesday", function() {
      expect(IPRUG.nextDate(new Date("2014-07-04"))).toEqual(new Date("2014-07-15"));
    });
  });

  describe("when the month begins on a Wednesday", function() {
    it("is the second Tuesday", function() {
      expect(IPRUG.nextDate(new Date("2014-01-04"))).toEqual(new Date("2014-01-14"));
    });
  });

  describe("when the month begins on a Sunday", function() {
    it("is the second Tuesday", function() {
      expect(IPRUG.nextDate(new Date("2014-06-04"))).toEqual(new Date("2014-06-10"));
    });
  });

  describe("On IPRUG day", function() {
    it("returns today", function() {
      expect(IPRUG.nextDate(new Date("2014-09-09"))).toEqual(new Date("2014-09-09"));
    });
  });

  describe("when this month's IPRUG has already passed", function() {
    it("returns next month's date", function() {
      expect(IPRUG.nextDate(new Date("2014-08-31"))).toEqual(new Date("2014-09-09"));
    });
  });

  describe("After December's IPRUG", function() {
    it("returns next January's date", function() {
      expect(IPRUG.nextDate(new Date("2014-12-25"))).toEqual(new Date("2015-01-13"));
    });
  });

  it("shows the next IPRUG on or after today by default", function() {
    expect(IPRUG.nextDate()).toEqual(IPRUG.nextDate(new Date()));
  });
});

describe("The extra date message", function() {
  it("lets you know when it's tonight", function() {
    expect(IPRUG.extraDateMessage(IPRUG.nextDate())).toEqual(" (that's tonight!)");
  });

  it("lets you know when it's tomorrow", function() {
    expect(IPRUG.extraDateMessage(IPRUG.nextDate().add(-1).day())).toEqual(" (that's tomorrow!)");
  });

  it("lets you know when it's this week", function() {
    expect(IPRUG.extraDateMessage(IPRUG.nextDate().add(-2).days())).toEqual(" (that's this Tuesday!)");
  });

  it("lets you know it's next week on Sunday", function() {
    expect(IPRUG.extraDateMessage(IPRUG.nextDate().add(-3).days())).toEqual(" (that's next Tuesday!)");
  });

  it("lets you know it's next week on the previous Tuesday", function() {
    expect(IPRUG.extraDateMessage(IPRUG.nextDate().add(-7).days())).toEqual(" (that's next Tuesday!)");
  });

  it("keeps quiet otherwise", function() {
    expect(IPRUG.extraDateMessage(IPRUG.nextDate().add(-8).days())).toEqual("");
  });
});
