$(function() {
  $(".page-header").append('<p class="next-date">Next meeting: ' +
    IPRUG.nextDate().toString("dddd d MMMM") +
    IPRUG.extraDateMessage() + '</p>');
});

