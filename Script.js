document.getElementById('timeCapsuleForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var content = document.getElementById('contentInput').value;
  var datetime = document.getElementById('dateTimeInput').value;

  // You can handle the form submission here, such as saving the content and datetime to a database.

  // Redirect to the content page with the generated URL
  window.location.href = 'content.html?content=' + encodeURIComponent(content) + '&datetime=' + encodeURIComponent(datetime);
});
