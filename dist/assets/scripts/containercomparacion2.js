var colors = Highcharts.getOptions().colors;

Highcharts.chart('containercomparacion2', {
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
        text: 'PROPORCIÓN ANUAL DE RESPUESTAS CLASIFICADAS COMO “INEXISTENCIA"'
    },



    subtitle: {
        text: 'Fuente:Elaboración propia con base en datos abiertos del INAI'
    },

    yAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#ffff",
        lineColor: "#ffff",
        minorGridLineColor: "#ffff",
        minorGridLineColor: "#ffff",
        tickColor: "#ffff",
        tickWidth: 1,
        style: {
            color: '#ffff',
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
        gridLineColor: "#ffff",
        lineColor: "#ffff",
        minorGridLineColor: "#ffff",
        minorGridLineColor: "#ffff",
        tickColor: "#ffff",
        tickWidth: 1,
        style: {
            color: '#ffff',
            fontSize: '20px',
            fontFamily: 'Nova Light'
        },

        title: {
            text: 'Año'
        },
        accessibility: {
            description: 'Período 2003-2019'
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
            "2015", "2016", "2017", "2018", "2019"
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
        name: 'Proporción de respuestas clasificadas como inexistencia',
        data: [2.58,
            3.31,
            4.34,
            5.59,
            4.68,
            8.68,
            7.31,
            7.22,
            6.22,
            5.64,
            5.12,
            5.58,
            5.78,
            4.65,
            5.78,
            3.4,
            4.03,
        ],

        color: "#17503d",
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
                        "2014", "2015", "2016", "2017", "2018", "2019"
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