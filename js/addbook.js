 $(document).ready(function() {
 	    $("#addbook").click(function(){

        var Name=document.getElementById("name").value;
        var Plot=document.getElementById("plot").value;
        var Type=document.getElementById("type").value;
        var AuthorId=document.getElementById("authorid").value;
        

        var post_data = {
        "id": 4,
        "book_name": Name,
        "plot": Plot,
        "book_type": Type,
        "author_id": AuthorId,
        
        }
    $.ajax({
                        type    : 'POST',
                        contentType : 'application/json; charset=utf-8',
                        url     : "http://localhost:8000/Book/",
                        data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! You added New Book");
                             window.location.assign("booklist.html")
                        }
                    });
 	});
});


