$(document).ready(function() {
var SearchString = window.location.search.substring(1);
    $.ajax({
        url:"http://localhost:8000/Author/"
    }).then(function(data) {
        console.log(SearchString);
    });        $.ajax({
                        type    : 'DELETE',
                        contentType : 'application/json; charset=utf-8',
                        url:"http://localhost:8000/Author/"+SearchString+"/",
                        //data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! Delete");
                             window.location.assign("author_list.html")
                        }
                    });
    $.ajax({
        url:"http://localhost:8000/Book/"
    }).then(function(data) {
        console.log(SearchString);
    });        $.ajax({
                        type    : 'DELETE',
                        contentType : 'application/json; charset=utf-8',
                        url:"http://localhost:8000/Book/"+SearchString+"/",
                        //data    : JSON.stringify(post_data),
                        dataType: "json",
                        contentType: "application/json",
                        success: function(data){
                            alert("success! Delete");
                             window.location.assign("booklist.html")
                        }
                    });
    });

