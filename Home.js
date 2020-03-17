var foods = [];

function listFood(){
    
    var user1 = document.getElementById("user1").value;

    document.getElementById("user1Choose").innerHTML = user1 + ", enter 3 restaurants.";

    var user2 = document.getElementById("user2").value;

    document.getElementById("user2Choose").innerHTML = user2 + ", enter 3 restaurants.";



}

function mixFood() {
   
    foods.push(document.getElementById("entry1").value);
    foods.push(document.getElementById("entry2").value);
    foods.push(document.getElementById("entry3").value);
    foods.push(document.getElementById("entry4").value);
    foods.push(document.getElementById("entry5").value);
    foods.push(document.getElementById("entry6").value);

    displayFood();
}

function displayFood() {
    for (i = 0; i < foods.length; i++){
        document.getElementById("foods"+i).innerHTML = foods[i];
    }
}

function subtractFood() {
    var count = 0;
    var tempVal;
    for (i = 0; i < 6; i++) {
        if (document.getElementById("check"+i).checked == true) {
            count++;
            if (count > 1) {
                alert("Please select only one restaurant.");
                return false;
            }
            else {
                tempVal = i;   
            }
        }
    }
    foods.splice(tempVal, 1);
    displayFood();
}



$(document).ready(function() {
    $(".foodChoices").hide();

    $("#userSubmit").click(function(){
        $(".users").hide();
        $(".foodChoices").show();

    })
});

