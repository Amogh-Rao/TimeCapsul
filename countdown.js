function updateCountdown() {
  var countdownElement = document.getElementById('countdown');
  var availableDateElement = document.getElementById('availableDate');
  var contentTextElement = document.getElementById('contentText');

  var queryParams = new URLSearchParams(window.location.search);
  var targetDateString = queryParams.get('datetime');
  var content = decodeURIComponent(queryParams.get('content'));

  if (targetDateString && content) {
    var targetDate = new Date(targetDateString);
    var currentDate = new Date();

    if (currentDate >= targetDate) {
      countdownElement.style.display = 'none';
      availableDateElement.style.display = 'none';
      contentTextElement.textContent = content;
    } else {
      countdownElement.textContent = getRemainingTime(targetDate);
      availableDateElement.textContent = 'This time capsule will be available on ' + targetDate.toDateString();
      setInterval(function () {
        countdownElement.textContent = getRemainingTime(targetDate);
      }, 1000);
    }
  }
}

function getRemainingTime(targetDate) {
  var currentDate = new Date();
  var timeDiff = targetDate.getTime() - currentDate.getTime();
  var seconds = Math.floor(timeDiff / 1000) % 60;
  var minutes = Math.floor(timeDiff / 1000 / 60) % 60;
  var hours = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
  var days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

  return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
}

window.addEventListener('DOMContentLoaded', function () {
  updateCountdown();
});
