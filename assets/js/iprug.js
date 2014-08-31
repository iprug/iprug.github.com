var IPRUG = {};

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
    var firstPossibleDate = new Date(date);
    firstPossibleDate.setDate(9);
    return firstPossibleDate;
  }

  function firstTuesdayOnOrAfter(date) {
    var firstTuesday = new Date(date);
    firstTuesday.setDate(date.getDate() + ((9 - date.getDay()) % 7));
    return firstTuesday;
  }

  function beginningOfNextMonth(date) {
    var nextMonth = new Date(date);
    nextMonth.setDate(1);
    nextMonth.setMonth(date.getMonth() + 1);
    return nextMonth;
  }
})();
