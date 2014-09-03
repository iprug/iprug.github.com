$(function() {
  var today = new Date();
  $(".page-header").append('<p class="next-date">Next meeting: ' +
    IPRUG.nextDate(today).toString("dddd d MMMM") +
    IPRUG.extraDateMessage(today) + '</p>');
});

