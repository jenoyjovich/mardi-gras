 function initMap() {

     var parking = {
         lat: 29.953599,
         lng: -90.064365
     };


     var map = new google.maps.Map(
         document.getElementById('map'), {
             zoom: 18,
             center: parking

         });

     var marker = new google.maps.Marker({
         position: parking,
         map: map
     });
 }