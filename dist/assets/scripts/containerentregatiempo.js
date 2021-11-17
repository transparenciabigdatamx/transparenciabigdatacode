var colors = Highcharts.getOptions().colors;

Highcharts.chart('containerentregatiempo', {
    chart: {
        type: 'spline'
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
        text: 'PROPORCIÓN ANUAL DE RESPUESTAS ENTREGADAS DENTRO DEL PLAZO LEGAL'
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
            fontSize: '14px',
            fontFamily: 'Arial Narrow',
            fontWeight: 'bold',
            fontColor: '#fff',



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
        name: 'Dentro de 20 días hábiles',
        data: [27.4,
            37.76,
            41.31,
            55.95,
            54,
            71.32,
            66.9,
            74.81,
            69.65,
            62.93,
            54.4,
            54.88,
            56.75,
            57.6,
            57.37,
            40.27,
            48.75,


        ],

        color: '#075e62',
        accessibility: {

        }
    }, {
        name: 'Dentro de 40 días hábiles',
        data: [5.74,
            9.17,
            10.23,
            15.45,
            10.83,
            15.22,
            17.83,
            17.57,
            19.91,
            19.47,
            18.72,
            17.84,
            17.39,
            15.07,
            9.97,
            10.83,
            11.36,


        ],
        dashStyle: 'ShortDashDot',
        color: 'goldenrod'
    }],
    chart: {

        backgroundColor: '#000'
    },

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