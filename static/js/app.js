// from data.js
var tableData = data;
var tbody = d3.select("#ufo-table");
var submit = d3.select("#filter-btn");
console.log(tableData);



// data.forEach(function(UFOReport) {
//     console.log(UFOReport);
//     var row = tbody.append("tr");
// Object.entries(UFOReport).forEach(function([key, value]) {
//     console.log(key, value);
//     var cell = row.append("td");
//     cell.text(value); 
//     });
// });

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(UFO => UFO.datetime === inputValue);
  
    console.log(filteredData);})




  