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
})();
