// Get API key

dotenv.config();
require('dotenv').config()
const API_KEY = process.env.API_KEY;

// Store our API endpoint inside queryUrl
let neighborhoodLink = "../static/data/Boston_Neighborhoods.geojson";
let listingsLink = "../static/data/listings.geojson";

// Function that will determine the color of each neighborhood
function chooseColor(hood) {
  switch (hood) {
  case "Roslindale":
    return "#d8e149";
  case "Jamaica Plain":
    return "red";
  case "Mission Hill":
    return "orange";
  case "Longwood":
    return "green";
  case "Bay Village":
    return "purple";
  case "Leather District":
    return "#778c9a";
  case "Chinatown":
    return "#228B22";
  case "North End":
    return "#B0C4DE";
  case "Roxbury":
    return "#3CB371";
  case "South End":
    return "#77559a";
  case "Back Bay":
    return "#d7559a";
  case "East Boston":
    return "#d7553f";
  case "Charlestown":
    return "#6e553f";
  case "West End":
    return "#6eae3f";
  case "Beacon Hill":
    return "#6eaec6";
  case "Downtown":
    return "#0033cc";
  case "Fenway":
    return "#94e149";
  case "Brighton":
    return "#ffff4d";
  case "West Roxbury":
    return "#794aca";
  case "Hyde Park":
    return "#67e6a4";
  case "Mattapan":
    return "#547d63";
  case "Dorchester":
    return "#fda052";
  case "South Boston Waterfront":
    return "#ec6195";
  case "South Boston":
    return "#aa8190";
  case "Allston":
    return "#fd5931";
  case "Harbor Islands":
    return "#fd1506";
  default:
    return "black";
  }
}

// Perform a GET request to the query URL
d3.json(neighborhoodLink, function(data) {  
  console.log(data);
  // Send the data.features object to the createFeatures function 
  createFeatures(data.features);

});

//  Create the createFeatures function to hold the data.features object
function createFeatures(neighborhoodData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(features, layer) {
    layer.bindPopup("<h2>Neighborhood: <hr>" + features.properties.Name + "</h2>");
  }
  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  let neighborhoods = L.geoJSON(neighborhoodData, {
    onEachFeature: onEachFeature,
    style: function(features) {
      return {
        color: "blue",
        fillColor: chooseColor(features.properties.Name),
        fillOpacity: 0.5,
        weight: 1.5
      };
    }
  });

  // Send our neighborhoods layer to the createMap function
  createMap(neighborhoods);
}

// Create the airbnb listings locations layer for our map.
let listings = new L.LayerGroup();

// Retrieve the listings locations GeoJSON data.
d3.json(listingsLink, function(data) {
  console.log(data);
 // Creating a geoJSON layer with the retrieved data
 L.geoJson(data, {
    onEachFeature: function(features, layer){
      layer.bindPopup("<h3>Listing id:  " + features.properties.id + 
      "</h3> <hr> <h4>Address: " + features.properties.Address + "</h4>"
      + "<h4>Property Type: " + features.properties.property_type + "</h4>"
      + "<h4>Room Type: " + features.properties.room_type + "</h4>"
      + "<h4>Accomodates: " + features.properties.accomodates + "</h4>"
      + "<h4>Bedrooms: " + features.properties.bedrooms + "</h4>"
      + "<h4>Bathrooms: " + features.properties.bathrooms + "</h4>"
      + "<h4>Price: " + features.properties.price + "$ per night</h4>")
    }
  }).addTo(listings);

  // Add the  airbnb layer to our map.
  listings.addTo(map);
});

// Create the createMap function to hold 
// the map layers, basemaps, overlay object, map object, and layer control.
function createMap(neighborhoods) {

  // Define streetmap and darkmap layers
  let streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
  });

  let darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  let baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  let overlayMaps = {
    "Neighborhoods": neighborhoods,
    "Top 200 Reviews": listings
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  let myMap = L.map("map", {
    center: [42.32, -71.10],
    zoom: 11.5,
    layers: [streetmap, neighborhoods, listings]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}