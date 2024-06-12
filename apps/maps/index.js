function initMap(){
    // Obtiene la ubicación del usuario
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            // Crea un nuevo mapa centrado en la ubicación del usuario
            const map = new google.maps.Map(document.getElementById('map'), {
                center: userLocation,
                zoom: 14
            });
            
            // Marca la ubicación del usuario en el mapa
            const userMarker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'You are here'
            });
            
            // Busca estaciones de policía cercanas
            const service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location: userLocation,
                radius: 5000, // 5 km
                type: ['police']
            }, function (results, status){
                console.log('google.maps.places', google.maps.places)
                console.log('google.maps.places.PlacesServiceStatus', google.maps.places.PlacesServiceStatus)
                if(status === google.maps.places.PlacesServiceStatus.OK){
                    for (let i = 0; i < results.length; i++){
                        createMarker(results[i]);
                    }
                }
            });
            
            // Crea un marcador para cada resultado
            function createMarker(place) {
                const placeLoc = place.geometry.location;
                const marker = new google.maps.Marker({
                    map: map,
                    position: placeLoc
                });
                
                google.maps.event.addListener(marker, 'click', function(){
                    const infoWindow = new google.maps.infoWindow({
                        content: place.name
                    });
                    
                    infoWindow.open(map, marker);
                });
            }
            
        }, function(){
            handleLocationError(true, map.getCenter());
        })
    }else{
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos){
    alert(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser does\'t support geolocation.');
}