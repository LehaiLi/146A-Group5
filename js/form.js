function enterForm(){
    var str = "Name of Location: " + document.getElementById("name").value.trim() + "<br>";
    str += "Description: " + document.getElementById("desc").value.trim() + "<br>";
    str += "State: " + document.getElementById("state").value + "<br>";
    str += "Coordinates: " + document.getElementById("coord").value.trim() + "<br>";
    str += "Image uploaded: ";
    
    var img = document.getElementById("photo").value
    if(img != null){
        str += "Yes" + "<br>";
    }
    else{
        str += "No" + "<br>";
    }
    
    document.getElementById("complete").innerHTML += str;
    document.getElementById("complete").style.display= "block";
        
    
}