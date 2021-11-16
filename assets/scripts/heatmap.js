var dataset;
var days = ["Tema 1", "Tema 2", "Tema 3", "Tema 4", "Tema 5", "Tema 6", "Tema 7", "Tema 8", "Tema 9", "Tema 10", "Tema 11", "Tema 12", "Tema 13", "Tema 14", "Tema 15", "Tema 16", "Tema 17", "Tema 18", "Tema 19", "Tema 20"],
    times = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];

var margin = {
    top: 40,
    right: 50,
    bottom: 70,
    left: 50
};

// calculate width and height based on window size
var w = Math.max(Math.min(window.innerWidth, 2000), 750) - margin.left - margin.right - 20,
    gridSize = Math.floor(w / ((times.length + 1) * 3)),
    h = gridSize * (days.length + 2);

//reset the overall font size
var newFontSize = w / 500;
d3.select("container2").style("font-size", newFontSize + "%");

// svg container
var svg = d3.select("#heatmap")
    .append("svg")
    .attr("width", w + margin.top + margin.bottom)
    .attr("height", h + margin.left + margin.right)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// linear colour scale
//var colours = d3.scaleLinear()
//    .domain(d3.range(1, 11, 1))
//   .range(["#87cefa", "#86c6ef", "#85bde4", "#83b7d9", "#82afce", "#80a6c2", "#7e9fb8", "#7995aa", "#758b9e", "#708090"]);
var colours = d3.scaleSequential()
    .interpolator(d3.interpolateReds)
    .domain([1, 100]);

var dayLabels = svg.selectAll(".dayLabel")
    .data(days)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("x", 0)
    .attr("y", function(d, i) {
        return i * gridSize;
    })
    .style("text-anchor", "end")
    .style("font-size", 11)
    .attr("transform", "translate(-6," + gridSize / 1.5 + ")")

var timeLabels = svg.selectAll(".timeLabel")
    .data(times)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("x", function(d, i) {
        return i * gridSize;
    })
    .attr("y", 0)
    .style("text-anchor", "middle")
    .style("font-size", 15)
    .attr("transform", "translate(" + gridSize / 2 + ",-6)");

// load data
d3.csv("test.csv", function(error, data) {
    data.forEach(function(d) {
        d.day = +d.day;
        d.hour = +d.hour;
        d.value = +d.value;
    });
    dataset = data;
    console.log(data)

    // group data by location
    var nest = d3.nest()
        .key(function(d) {
            return d.location;
        })
        .entries(dataset);

    // array of locations in the data
    var locations = nest.map(function(d) {
        return d.key;
    });
    var currentLocationIndex = 0;

    // create location dropdown menu
    var locationMenu = d3.select("#locationDropdown");
    locationMenu
        .append("select")
        .attr("id", "locationMenu")
        .selectAll("option")
        .data(locations)
        .enter()
        .append("option")
        .attr("value", function(d, i) {
            return i;
        })
        .text(function(d) {
            return d;
        });

    // function to create the initial heatmap
    var drawHeatmap = function(location) {

        // filter the data to return object of location of interest
        var selectLocation = nest.find(function(d) {
            return d.key == location;
        });

        var heatmap = svg.selectAll(".times")
            .data(selectLocation.values)
            .enter()
            .append("rect")
            .attr("x", function(d) {
                return (d.hour - 1) * gridSize;
            })
            .attr("y", function(d) {
                return (d.day - 1) * gridSize;
            })
            .attr("class", "hour bordered")
            .attr("width", gridSize)
            .attr("height", gridSize)
            .style("stroke", "white")
            .style("stroke-opacity", 0.6)
            .style("fill", function(d) {
                return colours(d.value);
            })
            // create a tooltip
        var tooltip = d3.select("#heatmap")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")
            // Three function that change the tooltip when user hover / move / leave a cell
        var mouseover = function(d) {
            tooltip
                .style("opacity", 1)
            d3.select(this)
                .style("stroke", "black")
                .style("opacity", 1)
        }
        var mousemove = function(d) {
            tooltip
                .html("The exact value of<br>this cell is: " + d.value)
                .style("left", (d3.mouse(this)[0] + 70) + "px")
                .style("top", (d3.mouse(this)[1]) + "px")
        }
        var mouseleave = function(d) {
            tooltip
                .style("opacity", 0)
            d3.select(this)
                .style("stroke", "none")
                .style("opacity", 0.8)
        }
    }
    drawHeatmap(locations[currentLocationIndex]);

    var updateHeatmap = function(location) {
        console.log("currentLocationIndex: " + currentLocationIndex)
            // filter data to return object of location of interest
        var selectLocation = nest.find(function(d) {
            return d.key == location;
        });

        // update the data and redraw heatmap
        var heatmap = svg.selectAll(".hour")
            .data(selectLocation.values)
            .transition()
            .duration(500)
            .style("fill", function(d) {
                return colours(d.value);
            })
    }

    // run update function when dropdown selection changes
    locationMenu.on("change", function() {
        // find which location was selected from the dropdown
        var selectedLocation = d3.select(this)
            .select("select")
            .property("value");
        currentLocationIndex = +selectedLocation;
        // run update function with selected location
        updateHeatmap(locations[currentLocationIndex]);
    });

    d3.selectAll(".nav").on("click", function() {
        if (d3.select(this).classed("left")) {
            if (currentLocationIndex == 0) {
                currentLocationIndex = locations.length - 1;
            } else {
                currentLocationIndex--;
            }
        } else if (d3.select(this).classed("right")) {
            if (currentLocationIndex == locations.length - 1) {
                currentLocationIndex = 0;
            } else {
                currentLocationIndex++;
            }
        }
        d3.select("#locationMenu").property("value", currentLocationIndex)
        updateHeatmap(locations[currentLocationIndex]);
    });


})