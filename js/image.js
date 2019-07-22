$(document).ready(function() {
        $.ajax({
             url: "http://localhost:8000/Album/"
        }).then(function(data){        	
        	for (var i = 0; i < data.length; i++) {
        		// console.log(data[i]);
        		var id = data[i].id;
        		if(data[i].image == ""){
        			var image= "img/logo.png";
        		}else{
        			var image= "data:image/png;base64,"+data[i].image;
        		}        		
				var album_name = data[i].albumName;
				var year_release = data[i].yearRelease;
				var artist_id = data[i].artistId;
				$("#retrieveAlbum").append('<div class="card col-4" style="width:300px;">'+
                    '<a href="album_song.html">'+'<img class="card-img-top album_image mt-3" src="'+image+'" alt="Album Card Image" style="width:100%"></a>'+
                    '<div class="card-body ml-1">'+
                        '<h5 class="text-primary">No:'+id+'</h5>'+ 
                        '<h5 class="text-primary">Title:  '+'<span>'+album_name+'</span></h5>'+
                        '<h5 class="text-primary">Year Release:  '+'<span>'+year_release+'</span></h5>'+
                        '<div class="row justify-content-between ml-1">'+
                            '<a href="edit_album.html" class="btn btn-primary" style="width: 80px;">Edit</a>'+
                            '<a href="#" class="btn btn-outline-danger">Delete</a>'+
                        '</div>'+
                    '</div>'+
                '</div>');
                // $('.album_image').attr('src' , "data:image/png;base64,"+data[i].image);
			};

        });

        $.ajax({
             url: "http://127.0.0.1:8000/Artist/"
        }).then(function(data){
        	$.each(data, function( k, v ) {
			  $('#selectartist').append("<option value='"+v.id+"'>"+v.artistName+"</option>");
			});
        });
});

function CreateAlbum(){
	var albumName=document.getElementById("album_name").value;
	var yearRelease=document.getElementById("year_release").value;
	var image = $('#imgdata').attr('src');
	var base64imgstr = image.substring(image.search(',')+1);
	var artist = $('#selectartist option:selected').val();
	// alert(artist);	
	// if(image !="" && albumName !="" && yearRelease !=""){
		var postData = {
		    "image": base64imgstr,
		    "albumName": albumName,
		    "yearRelease": yearRelease,
		    "artistId": artist,
		};
		$.ajax({
			type:'POST',
			contentType:'application/json; charset=utf-8',
			url:'http://127.0.0.1:8000/Album/',
			data : JSON.stringify(postData),
			dataType:'json',
			contentType : 'application/json',
			success: function(data){
				alert("Successfully Created!");
				window.location.assign("album.html");
			}
		});
	
	// else{
	// 	alert("Please Insert Data");
	// }
};
