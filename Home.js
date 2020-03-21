var foods = [];
var user1 = "";
var user2 = "";


function listFood(){
    
    user1 = document.getElementById("user1").value;

    document.getElementById("user1Choose").innerHTML = user1 + ", enter 3 restaurants.";

    user2 = document.getElementById("user2").value;

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
    if (foods.length == 1){
        winner();
    }
    var linebreak = document.createElement("br");
    var currentUser = document.createElement("label")

    document.getElementById("checkList").innerHTML = "";

    if (foods.length%2 != 0){
        currentUser.innerHTML = user1+ ", remove 1 restaraunt";
        document.getElementById("checkList").appendChild(currentUser);
        document.getElementById("checkList").appendChild(linebreak);

    }
    else{
        currentUser.innerHTML = user2+ ", remove 1 restaraunt";
        document.getElementById("checkList").appendChild(currentUser);
        document.getElementById("checkList").appendChild(linebreak);
    }

    for (i = 0; i < foods.length; i++){
        var linebreak = document.createElement("br");

        var newLabel = document.createElement("label");
                    newLabel.id = "foodsLabel" + i;
                    newLabel.innerHTML = foods[i];

        var newInput = document.createElement("input");
                    newInput.id = "checkFoods" + i;
                    
                    newInput.type = "checkbox";

                    document.getElementById("checkList").appendChild(newInput);
                    document.getElementById("checkList").appendChild(newLabel);                   
                    document.getElementById("checkList").appendChild(linebreak);  
    }

}

function subtractFood() {
    var count = 0;
    var tempVal;
    for (i = 0; i < foods.length; i++) {
        if (document.getElementById("checkFoods"+i).checked == true) {
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


function winner(){
    document.write("the winner is!!")
}




$(document).ready(function() {
    $(".foodChoices").hide();
    $(".removeFood").hide();
    $(".remove").hide();

    $("#userSubmit").click(function(){
        $(".users").hide();
        
        $(".foodChoices").show();

    })

    $("#next").click(function(){
        $(".foodChoices").hide();
        $(".removeFood").show();

        
        
        

    })
});

