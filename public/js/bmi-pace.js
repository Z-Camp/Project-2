//function to calculate bmi
function bmi () {
    //getting user input
    let feet = Number(document.getElementById("feet").value);
    let inches = Number(document.getElementById("inches").value);
    let weight = Number(document.getElementById("weight").value);
    //converting height to total inches
    height = feet * 12 + inches; 
    //calculating bmi
    let result = weight / (height * height) * 703;
    result = Math.floor(result)
    //displaying bmi in html
    document.getElementById("result").innerHTML = "Your bmi score is : " + result;
    //displaying range in html
    if (result < 19) {
        document.getElementById("range").innerHTML = "You are underweight.";
    } else if (result >= 19 && result <= 25) {
        document.getElementById("range").innerHTML = "You are in the normal range.";
    } else if (result > 25 && result <= 30) {
        document.getElementById("range").innerHTML = "You are overweight.";
    } else {
        document.getElementById("range").innerHTML = "You are obese.";
    };
    }

    //function to calculate pace
function calcPace() {
    //getting user input
    let distance = Number(document.getElementById("distance").value)
    let minutes = Number(document.getElementById("minutes").value)
    let hours = Number(document.getElementById("hours").value)
    //converting hours to minutes
    hours = hours * 60;
    let seconds = Number(document.getElementById("seconds").value)
    //getting total minutes
    let totalMins = minutes + hours;
    //getting pace  minutes and seconds
    let pace = totalMins / distance
    let paceSecs = seconds / distance
    paceMins = Math.floor(pace)
    paceSecs = Math.floor(paceSecs)
    //adding zero in front of number in seconds if seconds is less than 10
    if (10 > paceSecs) {
        paceSecs = "0"+paceSecs
        }
        //displaying pace in
    document.getElementById("mpm").innerHTML = "Your pace  is : " + paceMins + ":"  + paceSecs + " minutes per mile";
    }
