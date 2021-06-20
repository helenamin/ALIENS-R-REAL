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
    
    // var filteredData = tableData;
    // var filteredData1 = DateFilter(filteredData);
    // var filteredData2 = CountryFilter(filteredData1);
    // var filteredData3 = StateFilter(filteredData2);
    // var filteredData4 = CityFilter(filteredData3);
    // var filteredData5 = ShapeFilter(filteredData4);


    var filteredData = ShapeFilter(CityFilter(StateFilter(CountryFilter(DateFilter(tableData)))));
           
 
    // To remove all records from the table
    tbody.html("");

    // To load filtered data to the table
    loadData(filteredData);
};

function DateFilter(data) {
    // Return the value property of the input element
    var dateFilterValue =  d3.select("#datetime").property("value");

    if (dateFilterValue) {
        return data.filter(record => record.datetime === dateFilterValue);
    } else {
        return data;
    }

}

function CountryFilter(data) {
    // Return the value property of the input element
    CountryFilterValue =  d3.select("#country").property("value");
    if (CountryFilterValue){
        return data.filter(record => record.country === CountryFilterValue);
    } else {
        return data;
    }
}

function StateFilter(data) {
    // Return the value property of the input element
    StateFilterValue =  d3.select("#state").property("value");
    if (StateFilterValue){
        return data.filter(record => record.state === StateFilterValue);
    } else {
        return data;
    }
}

function CityFilter(data) {
    // Return the value property of the input element
    CityFilterValue =  d3.select("#city").property("value");
    if (CityFilterValue){
        return data.filter(record => record.city === CityFilterValue);
    } else {
        return data;
    }

}

function ShapeFilter(data) {
    // Return the value property of the input element
    ShapeFilterValue =  d3.select("#shape").property("value");
    if (ShapeFilterValue){
        return data.filter(record => record.shape === ShapeFilterValue);
    } else {
        return data;
    }
}