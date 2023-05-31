// Get the URL parameters
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    content: params.get('content'),
    datetime: params.get('datetime')
  };
}

// Calculate the remaining time until the specified date/time
function calculateRemainingTime(datetime) {
  const targetTime = new Date(datetime).getTime();
  const currentTime = new Date().getTime();
  const remainingTime = targetTime - currentTime;

  return remainingTime > 0 ? remainingTime : 0;
}

// Format the remaining time as days, hours, minutes, and seconds
function formatRemainingTime(remainingTime) {
  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  return {
    days: days < 10 ? "0" + days : days,
    hours: hours < 10 ? "0" + hours : hours,
    minutes: minutes < 10 ? "0" + minutes : minutes,
    seconds: seconds < 10 ? "0" + seconds : seconds
  };
}

// Display the remaining time on the content page
function displayRemainingTime() {
  const params = getUrlParams();
  const remainingTime = calculateRemainingTime(params.datetime);
  const formattedTime = formatRemainingTime(remainingTime);

  const countdownContainer = document.getElementById("countdown");
  countdownContainer.innerHTML = `
    <div class="countdown-item">
      <span class="countdown-value">${formattedTime.days}</span>
      <span class="countdown-label">Days</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-value">${formattedTime.hours}</span>
      <span class="countdown-label">Hours</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-value">${formattedTime.minutes}</span>
      <span class="countdown-label">Minutes</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-value">${formattedTime.seconds}</span>
      <span class="countdown-label">Seconds</span>
    </div>
  `;
}

// Check if the content is available based on the current date/time
function isContentAvailable(datetime) {
  const targetTime = new Date(datetime).getTime();
  const currentTime = new Date().getTime();

  return currentTime >= targetTime;
}

// Display the content or a message indicating its availability
function displayContent() {
  const params = getUrlParams();
  const contentContainer = document.getElementById("contentContainer");

  if (isContentAvailable(params.datetime)) {
    contentContainer.innerHTML = "<h2>Time Capsule Available</h2>";
  } else {
    const countdownContainer = document.getElementById("countdownContainer");
    countdownContainer.style.display = "block";
    displayRemainingTime();
  }
}

// Entry point
document.addEventListener("DOMContentLoaded", function() {
  const params = getUrlParams();

  if (params.content && params.datetime) {
    displayContent();
  }
});

function handleFormSubmit(event) {
  event.preventDefault();

  // Get the entered content and date/time
  const content = document.getElementById("contentInput").value;
  const dateTime = document.getElementById("datetimeInput").value;

  // Generate a unique URL with query parameters
  const url = window.location.href + "content.html?content=" + encodeURIComponent(content) + "&datetime=" + encodeURIComponent(dateTime);

  // Display the generated URL to the user
  const urlContainer = document.getElementById("urlContainer");
  urlContainer.innerHTML = `
    <p>Time Capsule URL:</p>
    <a href="${url}" target="_blank">${url}</a>
  `;
  urlContainer.style.display = "block";
}

// Add event listener to the form submit
document.getElementById("timeCapsuleForm").addEventListener("submit", handleFormSubmit);
