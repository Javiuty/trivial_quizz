fetch(
  "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showData(data);
  });

function showData(data) {}
