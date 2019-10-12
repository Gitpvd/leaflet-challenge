//Var to store queryUrl for data set for USGS Magnitude 2.5+ Earthquakes, Past Week
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(earthquakeData) {
  console.log(earthquakeData[0]);
});
     



  