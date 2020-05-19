$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});


function progressToggle() {
  let x = document.getElementById("progress-entries")
  if (x.style === "hidden") {
    x.style = "none";
  } else {
    x.style = "show";
  }
};
