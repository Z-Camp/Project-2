$(document).ready(function() {
 $.get("/api/user_data").then(function (data) {
        let userId = data.id;
        $.get("/api/activities/" + userId).then(function (data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          $("#tableBody").append(`
          <tr>
            <th scope="row">${i +1}</th>
            <td>${data[i].activityType}</td>
            <td>${data[i].distance}</td>
            <td>${data[i].time}</td>
            <td>${JSON.stringify((data[i].dateTime).split("T")[0])}</td>
          </tr>
          `)
        }
        })});
    })


