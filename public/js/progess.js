let userID = require("userID");
$(document).ready(function() {
    $.get("/api/activities/" + userID).then(function (data) {
        console.log(data)
      });
});
