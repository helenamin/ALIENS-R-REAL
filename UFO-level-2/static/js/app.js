// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// to load data to the page
function loadData(data){
    // To add Data table to the page
    data.forEach(record => {
    // to append table row `tr` for each record
    var row = tbody.append("tr");
    // to append cells for each value in the record
    Object.values(record).forEach(value => {
        var cell = row.append("td").text(value);
    });
    
});
}
// Initial load of table data 
loadData(tableData);

// // Select the filter button
// var button = d3.select("#filter-btn");

// // Select the form
// var form = d3.select("form");

// // Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();
    
//     var dateFilteredResult = DateFilter(tableData);
//     var CountryFilteredResult = CountryFilter(dateFilteredResult);
//     var StateFilteredResult = StateFilter(CountryFilteredResult);
//     var CityFilteredResult = CityFilter(StateFilteredResult);
//     var FinalFilteredResult = ShapeFilter(CityFilteredResult);
           
 
//     // To remove all records from the table
//     tbody.html("");

//     // To load filtered data to the table
//     loadData(FinalFilteredResult);
// };

// function DateFilter(data) {
//     // Select the input element and get the raw HTML node
//     var dateElement = d3.select("#datetime");
  
//     // Return the value property of the input element
//     var dateFilterValue =  dateElement.property("value");

//     if (dateFilterValue) {
//         return data.filter(record => record.datetime === dateFilterValue);
//     } else {
//         return data;
//     }

// }

// function CountryFilter(data) {
//     // Select the input element and get the raw HTML node
//     var countryElement = d3.select("#country");
  
//     // Return the value property of the input element
//     CountryFilterValue =  countryElement.property("value");
//     if (CountryFilterValue){
//         return data.filter(record => record.datetime === CountryFilterValue);
//     } else {
//         return data;
//     }
// }

// function StateFilter(data) {
//     // Select the input element and get the raw HTML node
//     var stateElement = d3.select("#state");
  
//     // Return the value property of the input element
//     StateFilterValue =  stateElement.property("value");
//     if (StateFilterValue){
//         return data.filter(record => record.datetime === StateFilterValue);
//     } else {
//         return data;
//     }
// }

// function CityFilter(data) {
//     // Select the input element and get the raw HTML node
//     var cityElement = d3.select("#city");
  
//     // Return the value property of the input element
//     CityFilterValue =  cityElement.property("value");
//     if (CityFilterValue){
//         return data.filter(record => record.datetime === CityFilterValue);
//     } else {
//         return data;
//     }

// }

// function ShapeFilter(data) {
//     // Select the input element and get the raw HTML node
//     var shapeElement = d3.select("#shape");
  
//     // Return the value property of the input element
//     ShapeFilterValue =  shapeElement.property("value");
//     if (ShapeFilterValue){
//         return data.filter(record => record.datetime === ShapeFilterValue);
//     } else {
//         return data;
//     }
// }



var dateElement = d3.select("#datetime");
var dateFilterResult = dateElement.on("click",function(){
    var dateFilterValue = d3.select(this);
    return data.filter(record => record.datetime === dateFilterValue);
});


var countryElement = d3.select("#country");
var countryFilterResult = countryElement.on("click",function(){
    var countryFilterValue = d3.select(this);
    return data.filter(record => record.country === countryFilterValue);
});

var stateElement = d3.select("#state");
var stateFilterResult = stateElement.on("click",function(){
    var stateFilterValue = d3.select(this);
    return data.filter(record => record.city === stateFilterValue);
}); 

var cityElement = d3.select("#city");
var cityFilterResult = cityElement.on("click",function(){
    var cityFilterValue = d3.select(this);
    return data.filter(record => record.city === cityFilterValue);
});  

var shapeElement = d3.select("#shape");
var shapeFilterResult = shapeElement.on("click",function(){
    var shapeFilterValue = d3.select(this);
    return data.filter(record => record.shape === shapeFilterValue);
});


