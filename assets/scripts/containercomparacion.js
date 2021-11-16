var colors = Highcharts.getOptions().colors;

Highcharts.chart('containercomparacion', {
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
        text: 'PROPORCIÓN ANUAL DE SOLICITUDES CLASIFICADAS COMO "ENTREGA"'
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
            text: 'Proporción de solicitudes'
        },
        accessibility: {
            description: 'Proporción de solicitudes'
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
        name: 'Proporción anual de solicitudes clasificadas como "Entrega"',
        data: [53.76,
            52.73,
            54.40,
            54.02,
            58.27,
            55.45,
            55.34,
            55.88,
            56.09,
            60.57,
            61.05,
            60.70,
            60.14,
            62.03,
            67.24,
            74.53,
            68.58,

        ],

        color: "#000 ",
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