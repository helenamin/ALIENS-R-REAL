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

// Select the filter button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var dateFilterValue = dateElement.property("value");
  
    console.log(dateFilterValue);
      
    var filteredData = tableData.filter(record => record.datetime === dateFilterValue);
    
    // checks if the filtered data null , if null reloads the table data
    if (dateFilterValue) {
        // To remove all records from the table
        tbody.html("");

        // To load filtered data to the table
        loadData(filteredData);
        
    } else {
        // To remove all records from the table
        tbody.html("");

        // to load initial table data
        loadData(tableData);
    } 
};
  


