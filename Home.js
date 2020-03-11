

function listFood(){
    
    var foods = [
        "TacoBell",
        "Del Taco",
        "McDonalds",
        "Arby's",
        "Burger King",
        "Jack In The Box",
        "Culver's",
        "Wendy's"

    ];

    for (i = 0; i <= foods.length; i++){
        document.getElementById("food"+i).innerHTML = foods[i].toString();

    }
    
    
}

$(document).ready(function() {
    $(".foodChoices").hide();

    $("#userSubmit").click(function(){
        $(".users").slideUp();
        $(".foodChoices").show();

    })
});

