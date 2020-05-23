let userId;
$(document).ready(function() {
    $.get("/api/user_data").then(function (data) {
        userId = data.id;
        $.get("/api/activities/" + userId).then(function (data) {
        console.log(data)
      })})
});


