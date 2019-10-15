Visualizing Data with Leaflet 
(Homework 17 # leaflet-challenge)

The files above contain the HTML and javascript code to complete the challenge below. 
I chose the following data set which only had two point in the US so my map is zoomed out further to display additional points. 
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson

I was unable to configure the circle radii to correlate with earthquake magnitude despite several efforts to follow class activities and online leaflet and video tutorials. 

Homework description: 

Your first task is to visualize an earthquake data set.

1. Get your data set

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

2. Import & Visualize the Data

Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

  a. Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.
  
  b. Include popups that provide additional information about the earthquake when a marker is clicked.
  
  c. Create a legend that will provide context for your map data.
  
  d. Your visualization should look something like the map included in the instructions readme file.
