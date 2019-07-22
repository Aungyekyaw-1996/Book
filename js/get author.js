$(document).ready(function() {

    $.ajax({
        url: "http://localhost:8000/Author/"
    }).then(function(data) {
        console.log(data);

        for (var i = 0; i < data.length; i++) {
        var tr = $('<tr/>');

              $(tr).append("<td>" + data[i].author_name+"</td>");
              $(tr).append("<td>" + data[i].Birth_date+"</td>");
              $(tr).append("<td>" + data[i].gender+"</td>");
              $(tr).append("<td><a href=author_list.html?"+data[i].id+" id='deleteProduct' class='btn btn-danger'>Delete</a></td>");
              $(tr).append("<td><a href=edit_author.html?"+data[i].id+" class='btn btn-primary'>Edit</a></td>");
              
              $('#author_list').append(tr);
          }

      $('#author_table').DataTable();
      $('#authordatatable').DataTable();
} );



      });