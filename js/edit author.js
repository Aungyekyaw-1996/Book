$(document).ready(function(){
    console.log(window.location.search.substring(1));
    var SearchString = window.location.search.substring(1);
    console.log("this is from up"+SearchString)
    $.ajax({
        url:"http://localhost:8000/Author/"+SearchString+"/"
    }).then(function(data) {
        console.log(data);
        $('[id=name]').attr('value',data.author_name);
        $('[id=birth]').attr('value',data.Birth_date);
        $('[id=gender]').attr('value',data.gender);
    });

    $("#editauthor").click(function(){
        alert("this is search SearchString"+SearchString)
        var Name=document.getElementById("name").value;
        var Birth_date=document.getElementById("birth").value;
        var Gender=document.getElementById("gender").value;
        var post_data = {
            "id": 5,
            "author_name": Name,
            "Birth_date": Birth_date,
            "gender": Gender,
            }
             alert("this is from down"+SearchString)
            $.ajax({
                type    : 'PUT',
                contentType : 'application/json; charset=utf-8',
                url:"http://localhost:8000/Author/"+SearchString+"/",
                data    : JSON.stringify(post_data),
                dataType: "json",
                contentType: "application/json",
                success: function(data){
                            alert("success! Edit Product");
                            window.location.assign("author_list.html");
                        }
            });

    });



});