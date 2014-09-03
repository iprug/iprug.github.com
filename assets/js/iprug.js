var IPRUG = {};

// Requires DateJS (http://www.datejs.com/)
//
(function() {
  IPRUG.nextDate = function(currentDate) {
    if (currentDate === undefined) { currentDate = new Date(); }
    var dateThisMonth = firstTuesdayOnOrAfter(firstPossibleDateInMonthFor(currentDate));
    if (dateThisMonth >= currentDate) {
      return dateThisMonth ;
    } else {
      return IPRUG.nextDate(beginningOfNextMonth(currentDate));
    }
  };

  function firstPossibleDateInMonthFor(date) {
    return date.clone().set({day: 9});
  }

  function firstTuesdayOnOrAfter(date) {
    return date.clone().add(-1).day().next().tuesday();
  }

  function beginningOfNextMonth(date) {
    return date.clone().moveToFirstDayOfMonth().add({months: 1});
  }

  IPRUG.extraDateMessage = function(date) {
    var daysToGo = Math.floor(( IPRUG.nextDate(date) - date) / 86400000);
    if (daysToGo === 0) {
      return " (that's tonight!)";
    } else if (daysToGo === 1) {
      return " (that's tomorrow!)";
    } else if (daysToGo === 2) {
      return " (that's this Tuesday!)";
    } else if (daysToGo <= 7) {
      return " (that's next Tuesday!)";
    } else {
      return "";
    }
  };
})();
