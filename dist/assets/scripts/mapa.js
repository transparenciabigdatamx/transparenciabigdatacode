var data = [
    ["mx-3622", 0.72],
    ["mx-bc", 2.508],
    ["mx-bs", 1.741],
    ["mx-so", 0.911],
    ["mx-cl", 1.94],
    ["mx-na", 1.6885],
    ["mx-cm", 1.86],
    ["mx-qr", 0.505],
    ["mx-mx", 11.3],
    ["mx-mo", 2.18],
    ["mx-df", 32.34],
    ["mx-qt", 1.965],
    ["mx-tb", 2.94],
    ["mx-cs", 13],
    ["mx-nl", 14],
    ["mx-si", 15],
    ["mx-ch", 16],
    ["mx-ve", 17],
    ["mx-za", 18],
    ["mx-ag", 19],
    ["mx-ja", 20],
    ["mx-mi", 21],
    ["mx-oa", 22],
    ["mx-pu", 23],
    ["mx-gr", 24],
    ["mx-tl", 25],
    ["mx-tm", 26],
    ["mx-co", 27],
    ["mx-yu", 28],
    ["mx-dg", 29],
    ["mx-gj", 30],
    ["mx-sl", 31],
    ["mx-hg", 32],
];

// Create the chart
Highcharts.mapChart("container4", {
    chart: {
        map: "countries/mx/mx-all",
    },

    title2: {
        text: "Categoría 3: Medio Ambiente y Territorio. Porcentaje de solicitudes con origen en el estado ",
    },

    subtitle2: {
        text: 'Fuente: <a href="http://code.highcharts.com/mapdata/countries/mx/mx-all.js">Mexico</a>',
    },

    mapNavigation2: {
        enabled: true,
        buttonOptions: {
            verticalAlign: "bottom",
        },
    },

    colorAxis2: {
        min: 0,
    },

    series2: [{
        data2: data,
        name: "Solicitudes",
        states: {
            hover: {
                color: "#55bada",
            },
        },
        dataLabel2: {
            enabled: true,
            format: "{point.name}",
        },
    }, ],
});