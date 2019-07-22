 $(document).ready(function() {
 	    $("#addplayer").click(function(){

        var Name=document.getElementById("name").value;
        var Age=document.getElementById("age").value;
        var Club=document.getElementById("club").value;
        var Position=document.getElementById("position").value;
        var Birthdate=document.getElementById("birthdate").value;
        var Nationality=document.getElementById("nationality").value;
        

        var post_data = {
        "id": 4,
        "Name": Name,
        "Age": Age,
        "Club": Club,
        "Position": Position,
        "Birthdate": Birthdate,
        "Nationality": Nationality,
        "InfoId": 1,

        

        }
    $.ajax({
                        type    : 'POST',
                        contentType : 'application/json; charset=utf-8',
                        url     : "http://localhost:8000/player/",
                        data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! You added New Player");
                             window.location.assign("player_list.html")
                        }
                    });
 	});
});


