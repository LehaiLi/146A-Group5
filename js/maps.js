var map;
var latitude = 0;
var longitude = 0;
//alert(parseFloat("4.20"));
/*if((localStorage["lat"] != undefined) && (localStorage["lng"] != undefined)){
    latitude = localStorage["lat"];
    longitude = localStorage["lng"];
    alert(latitude);
}*/
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: latitude, lng: longitude},
	zoom: 18
	});
}
/*function setStuff(lat,lng){
    localStorage["lat"] = parseFloat(lat);
    localStorage["lng"] = parseFloat(lng);
    
}*/
function setQuery(lat,lng){
    var queryString = "?lat=" + lat + "&lng=" + lng;
    window.location.href = "./maps.html" + queryString;
}
if(decodeURIComponent(window.location.search) != ""){
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    latitude = parseFloat(queries[0].substring(4));
    longitude = parseFloat(queries[1].substring(4));
}