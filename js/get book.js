$(document).ready(function() {

    $.ajax({
        url: "http://localhost:8000/Book/"
    }).then(function(data) {
        console.log(data);

        for (var i = 0; i < data.length; i++) {
        var tr = $('<tr/>');

              $(tr).append("<td>" + data[i].book_name+"</td>");
              $(tr).append("<td>" + data[i].plot+"</td>");
              $(tr).append("<td>" + data[i].book_type+"</td>");
              $(tr).append("<td>" + data[i].author_id+"</td>");
              $(tr).append("<td><a href=book_detail.html?"+data[i].id+" id='book_detail' class='btn btn-primary'>Detail</a></td>");
              $(tr).append("<td><a href=booklist.html?"+data[i].id+" id='deleteProduct' class='btn btn-danger'>Delete</a></td>");
              $('#book_list').append(tr);
          }

      $('#book_table').DataTable();
      // $('#authordatatable').DataTable();
} );



      });