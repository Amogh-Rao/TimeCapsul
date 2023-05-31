document.getElementById('timeCapsuleForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var contentInput = document.getElementById('contentInput');
  var content = contentInput.value;

  if (content.trim() !== '') {
    var targetDate = new Date(document.getElementById('datetimeInput').value);

    var queryParams = new URLSearchParams();
    queryParams.set('datetime', targetDate.toISOString());
    queryParams.set('content', encodeURIComponent(content));

    var url = 'content.html?' + queryParams.toString();
    window.location.href = url;
  }
});
