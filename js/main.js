$(document).ready(function(){
	$('.social-icons a i').hover(
	   function(){ $(this).addClass(' fa-rotate-90') },
	   function(){ $(this).removeClass(' fa-rotate-90') }
	)
});

//Google map

function initMap() {
    var uluru = {lat: 51.5074, lng: 0.2178};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}

