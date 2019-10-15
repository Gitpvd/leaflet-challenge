function createFeatures(earthquakeData) {

// Define a function we want to run once for each feature in the features array
// Give each feature a popup describing the place and time of the earthquake
    function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.title + "</h3>");
  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    onEachFeature: onEachFeature,
    style: "mapStyle"
  });

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Define streetmap layer
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  // map.addLayer({
  //   'id': 'magnitude',
  //   'type': 'circle',
  //   'source': {
  //   type: 'vector',
  //   url: 'mapbox://examples.8fgz4egr'
  //   },
  //   'source-layer': 'sf2010',
  //   'paint': {
  //   // make circles larger as the user zooms from z12 to z22
  //   'circle-radius': {
  //   'base': 1.75,
  //   'stops': [[12, 2], [22, 180]]
  //   },
  //   // color circles by ethnicity, using a match expression
  //   // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
  //   'circle-color': [
  //   'match',
  //   ['get', 'ethnicity'],
  //   'White', '#fbb03b',
  //   'Black', '#223b53',
  //   'Hispanic', '#e55e5e',
  //   'Asian', '#3bb2d0',
  //   /* other */ '#ccc'
  //   ]
  //   }
  //   });
    // Define a baseMap object to hold our base layer
  var baseMaps = {
    "Street Map": streetmap,
  };
    // Create overlay object to hold our overlay layer
    var overlayMaps = {
      Earthquakes: earthquakes,
      type: "circle"
    };
    var myMap = L.map("mapid", {
      center: [
        37.09, -95.71
      ],
      zoom: 5,
      layers: [streetmap,earthquakes]  
    });
    
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);

    function createMarkers(response) {
      console.log('response', response);
      // Pull the "magnitude" property off of response.data
      let magnitude = response.data.mag;
      console.log('magnitude', mag);
    }
}