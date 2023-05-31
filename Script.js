function handleFormSubmit(event) {
  event.preventDefault();

  // Get the entered content and date/time
  const content = document.getElementById("contentInput").value;
  const dateTime = document.getElementById("datetimeInput").value;

  // Generate a unique URL with query parameters
  const url = window.location.href + "content.html?content=" + encodeURIComponent(content) + "&datetime=" + encodeURIComponent(dateTime);

  // Redirect to the generated URL
  window.location.href = url;
}

// Add event listener to the form submit
document.getElementById("timeCapsuleForm").addEventListener("submit", handleFormSubmit);
