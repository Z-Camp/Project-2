$(document).ready(function () {
  var actType = ""

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });



  $(".actType").on("click", function(){
    actType = $(this).data("type");
  })

  $("#final-submit").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var dt = new Date();

    var newActivity = {
      activityType: actType,
      time: $("#time").val().trim(),
      distance:$("#distance").val().trim(),
      date: dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate()
    };

    console.log(newActivity)
    // Send the POST request. (Copied from Cats App...will be referring back to that)
    // $.ajax("/api/user_data", {
    //   type: "POST",
    //   data: newActivity
    // }).then(
    //   function () {
    //     console.log("created new workout session");
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
  });

});

function progressToggle() {
  event.preventDefault();
  let x = document.getElementById("progress-entries")
  if (x.style === "hidden") {
    x.style = "none";
  } else {
    x.style = "show";
  }
};