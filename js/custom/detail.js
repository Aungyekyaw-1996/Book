$(document).ready(function(){
    console.log(window.location.search.substring(1));
    var SearchString = window.location.search.substring(1);
    console.log("this is from up"+SearchString)
    $.ajax({
        url:"http://localhost:8000/Book/"+SearchString+"/"
    }).then(function(data) {
        console.log(data);
        $('[id=name]').attr('value',data.book_name);
        $('[id=plot]').attr('value',data.plot);
        $('[id=type]').attr('value',data.book_type);
        $('[id=authorid]').attr('value',data.author_id);
    });

    $("#detailbook").click(function(){
        // alert("this is search SearchString"+SearchString)
        var Name=document.getElementById("name").value;
        var Plot=document.getElementById("plot").value;
        var Type=document.getElementById("type").value;
        var Author=document.getElementById("authorid").value;
        var post_data = {
            "id": 3,
            "author_name": Name,
            "plot": Plot,
            "book_type": Type,
            "author_id": Author,
            }
             // alert("this is from down"+SearchString)
            $.ajax({
                type    : 'PUT',
                contentType : 'application/json; charset=utf-8',
                url:"http://localhost:8000/Book/"+SearchString+"/",
                data    : JSON.stringify(post_data),
                dataType: "json",
                contentType: "application/json",
                // success: function(data){
                //             alert("success! Edit Product");
                //             window.location.assign("author_list.html");
                //         }
            });

    });



});