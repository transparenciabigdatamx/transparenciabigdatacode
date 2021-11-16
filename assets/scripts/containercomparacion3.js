var colors = Highcharts.getOptions().colors;

Highcharts.chart('containercomparacion3', {
    chart: {
        type: 'spline',
        backgroundColor: 'goldenrod'
    },

    legend: {
        symbolWidth: 40
    },
    title: {
        margin: 50,
        align: "left",

        style: {
            fontFamily: "Arial Narrow",
            color: '#2c666eff',
            fontSize: '20px',
            fontWeight: 'bold',

        },
        text: 'PROPORCIÓN ANUAL DE “INEXISTENCIAS” DISFRAZADAS COMO “ENTREGA”'
    },

    subtitle: {
        align: "left",
        margin: 50,
        verticalAlign: 'bottom',


        style: {
            color: '#17503d',
            fontSize: '13px',
            fontFamily: 'Arial Narrow',
        },
        text: 'Fuente: Elaboración propia con base en datos abiertos del INAI'

    },

    yAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#fff",
        lineColor: "#fff",
        minorGridLineColor: "#fff",
        minorGridLineColor: "#fff",
        tickColor: "#fff",
        tickWidth: 1,
        style: {
            color: '#fff',
            fontSize: '14px',
            fontFamily: 'Arial Narrow',
            fontWeight: 'bold',



        },
        title: {
            text: 'Proporción de respuestas'
        },
        accessibility: {
            description: 'Proporción de respuestas'
        }
    },

    xAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#fff",
        lineColor: "#fff",
        minorGridLineColor: "#fff",
        minorGridLineColor: "#fff",
        tickColor: "#fff",
        tickWidth: 1,
        style: {
            color: '#fff',
            fontSize: '20px',
            fontFamily: 'Nova Light'
        },

        title: {
            text: 'Año'
        },
        accessibility: {
            description: 'Período 2003-2015'
        },
        categories: ["2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015"
        ]
    },

    tooltip: {
        valueSuffix: '%'
    },

    plotOptions: {
        series: {
            point: {
                events: {
                    click: function() {
                        window.location.href = this.series.options.website;
                    }
                }
            },
            cursor: 'pointer'
        }
    },

    series: [{
        name: 'Proporción de "Inexistencias disfrazadas como "Entrega"',
        data: [27.39,
            37.75,
            41.31,
            55.94,
            53.99,
            71.31,
            66.90,
            74.80,
            69.65,
            62.93,
            54.40,
            54.88,
            73.59,

        ],

        color: colors[1],
        accessibility: {

        }

    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                chart: {
                    spacingLeft: 1,
                    spacingRight: 1
                },
                legend: {
                    itemWidth: 150
                },
                xAxis: {
                    categories: ["2003",
                        "2004",
                        "2005",
                        "2006",
                        "2007",
                        "2008",
                        "2009",
                        "2010",
                        "2011",
                        "2012",
                        "2013",
                        "2014", "2015"
                    ],
                    title: ''
                },
                yAxis: {
                    visible: false
                }
            }
        }]
    }
});