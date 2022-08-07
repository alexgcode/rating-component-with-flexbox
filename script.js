let rating = document.getElementById("rating");
let thankyou = document.getElementById("thankyou");

window.onload = function() {
    rating.style.display = "flex";
    thankyou.style.display = "none";
}

function add_rating(){
    let rating_value = document.querySelector('input[name="rating"]:checked').value;

    rating.style.display = "none";
    thankyou.style.display = "flex";

    document.getElementById("rating-selected").innerHTML = rating_value;
}