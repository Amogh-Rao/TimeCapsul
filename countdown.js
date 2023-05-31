function updateCountdown() {
  var countdownElement = document.getElementById('countdown');
  var availableDateElement = document.getElementById('availableDate');

  var params = new URLSearchParams(window.location.search);
  var datetimeParam = params.get('datetime');
  var contentParam = params.get('content');

  if (datetimeParam) {
    var targetDate = new Date(datetimeParam);
    var currentDate = new Date();

    if (currentDate < targetDate) {
      var timeDifference = targetDate.getTime() - currentDate.getTime();

      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      countdownElement.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
      availableDateElement.textContent = 'This time capsule will be available on ' + targetDate.toLocaleString();
    } else {
      countdownElement.textContent = 'Time capsule available!';
      availableDateElement.style.display = 'none';

      if (contentParam) {
        var contentElement = document.createElement('p');
        contentElement.textContent = 'Content: ' + decodeURIComponent(contentParam);
        document.body.appendChild(contentElement);
      }
    }
  } else {
    countdownElement.textContent = 'No countdown available.';
    availableDateElement.style.display = 'none';
  }
}

updateCountdown();
