// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/
function myMap() {
    var mapProp = {
<<<<<<< HEAD
<<<<<<< HEAD
        center: new google.maps.LatLng(21.996, 78.807),
=======
        center: new google.maps.LatLng(78.712775, 21.005973),
>>>>>>> parent of 4b5ea58 (google map location fix)
=======
        center: new google.maps.LatLng(78.712775, 21.005973),
>>>>>>> parent of 4b5ea58 (google map location fix)
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}