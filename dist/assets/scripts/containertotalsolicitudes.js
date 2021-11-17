Highcharts.setOptions({
    lang: {
        drillUpText: '<< De clic para REGRESAR a la gráfica de total anual de solicitudes'
    }
});
Highcharts.chart('containertotalsolicitudes', {
    chart: {
        type: 'column'
    },
    title: {
        margin: 50,
        align: "left",

        style: {
            fontFamily: "Arial Narrow",
            color: '#2c666eff',
            fontSize: '30px',
            fontWeight: 'bold',

        },
        text: 'SOLICITUDES DE INFORMACIÓN  2003-2015, POR DEPENDENCIA'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#CEC6B9",
        lineColor: "#CEC6B9",
        minorGridLineColor: "#CEC6B9",
        minorGridLineColor: "#BDC3C7",
        tickColor: "#46627f",
        tickWidth: 1,
        style: {
            color: '#7c7c7cff',
            fontSize: '30px',
            fontFamily: 'Arial Narrow',
            fontWeight: 'bold',



        },
        type: 'category'
    },
    yAxis: {
        gridLineDashStyle: "Dot",
        gridLineColor: "#CEC6B9",
        lineColor: "#CEC6B9",
        minorGridLineColor: "#CEC6B9",
        minorGridLineColor: "#BDC3C7",
        tickColor: "#46627f",
        tickWidth: 1,
        style: {
            color: '#7c7c7cff',
            fontSize: '30px',
            fontFamily: 'Arial Narrow'
        },
        title: {
            text: 'Total de solicitudes 2003-2015'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b>solicitudes<br/>'
    },
    series: [{
        name: "Dependencias top 10",
        colorByPoint: true,
        data: [{
            name: "2003",
            y: 22573,
            color: '#88e',
            drilldown: "2003"
        }, {
            name: "2004",
            y: 34216,
            color: 'red',
            drilldown: "2004"
        }, {
            name: "2005",
            y: 43391,
            drilldown: "2005"
        }, {
            name: "2006",
            y: 50757,
            drilldown: "2006"
        }, {
            name: "2007",
            y: 78364,
            drilldown: "2007"
        }, {
            name: "2008",
            y: 85604,
            drilldown: "2008"
        }, {
            name: "2009",
            y: 97486,
            drilldown: "2009"
        }, {
            name: "2010",
            y: 99713,
            drilldown: "2010"
        }, {
            name: "2011",
            y: 96073,
            drilldown: "2011"
        }, {
            name: "2012",
            y: 94600,
            drilldown: "2012"
        }, {
            name: "2013",
            y: 109445,
            drilldown: "2013"
        }, {
            name: "2014",
            y: 116078,
            drilldown: "2014"
        }, {
            name: "2015",
            y: 83452,
            drilldown: "2015"
        }]
    }],
    drilldown: {
        series: [{
                name: "2003",
                id: "2003",
                data: [
                    ["SHCP", 1469],
                    ["SEP", 1019],
                    ["IMSS", 800],
                    ["SEMARNAT", 753],
                    ["Presidencia", 656],
                    ["SEGOB", 621],
                    ["FUNCIÓN PÚBLICA", 628],
                    ["SCT", 621],
                    ["CFE", 506],
                    ["PGR", 505]

                ]
            },
            {
                name: "2004",
                id: "2004",
                data: [
                    ["SHCP", 1925],
                    ["SEMARNAT", 1258],
                    ["IMSS", 1256],
                    ["SEP", 1255],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["PGR", 1016],
                    ["SEGOB", 933],
                    ["AEROPUERTOS", 931],
                    ["SCT", 907],
                    ["SALUD", 817],


                ]
            },
            {
                name: "2005",
                id: "2005",
                data: [
                    ["SHCP", 1925],
                    ["SEP", 1255],
                    ["SEMARNAT", 1258],
                    ["IMSS", 1256],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["SEGOB", 933],
                    ["PGR", 1016],
                    ["SALUD", 817],
                    ["SCT", 907],
                    ["SAT", 1256],



                ]
            }, {
                name: "2006",
                id: "2006",
                data: [
                    ["SHCP", 1925],
                    ["SEP", 1255],
                    ["SEMARNAT", 1258],
                    ["IMSS", 1256],
                    ["SALUD", 817],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["SAT", 907],
                    ["SEGOB", 933],
                    ["SCT", 907],
                    ["PGR", 1016]
                ]
            }, {
                name: "2007",
                id: "2007",
                data: [
                    ["IMSS", 1256],
                    ["SEP", 1255],
                    ["SALUD", 817],
                    ["SHCP", 1925],
                    ["SEMARNAT", 1258],
                    ["SCT", 907],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["PGR", 1016],
                    ["SEGOB", 933],
                    ["SEDESOL", 931],




                ]
            }, {
                name: "2008",
                id: "2008",
                data: [
                    ["IMSS", 1256],
                    ["SEP", 1255],
                    ["SALUD", 817],
                    ["SEMARNAT", 1258],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["SCT", 907],
                    ["SHCP", 1925],
                    ["ISSSTE", 931],
                    ["SEGOB", 933],
                    ["PGR", 1016],

                ]
            },
            {
                name: "2009",
                id: "2009",
                data: [
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SCT", 1256],
                    ["SEMARNAT", 1255],
                    ["SALUD", 1017],
                    ["SHCP", 1016],
                    ["ISSSTE", 933],
                    ["FUNCIÓN PÚBLICA", 931],
                    ["SEGOB", 907],
                    ["PGR", 817],


                ]
            }, {
                name: "2010",
                id: "2010",
                data: [
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUD", 1256],
                    ["SCT", 1255],
                    ["SEMARNAT", 1017],
                    ["SHCP", 1016],
                    ["FUNCIÓN PÚBLICA", 933],
                    ["ISSSTE", 931],
                    ["CFE", 907],
                    ["CONAGUA", 817],


                ]
            }, {
                name: "2011",
                id: "2011",
                data: [
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUS", 1256],
                    ["SHCP", 1255],
                    ["SCT", 1017],
                    ["SEMARNAT", 1016],
                    ["FUNCIÓN PÚBLICA", 933],
                    ["ISSSTE", 931],
                    ["PGR", 907],
                    ["SEGOB", 817],


                ]
            }, {
                name: "2012",
                id: "2012",
                data: [
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUD", 1256],
                    ["SEMARNAT", 1255],
                    ["SHCP", 1016],
                    ["FUNCIÓN PÚBLICA", 1017],
                    ["SCT", 1016],
                    ["ISSSTE", 933],
                    ["CFE", 931],
                    ["PGR", 907],

                ]
            }, {
                name: "2013",
                id: "2013",
                data: [
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUD", 1256],
                    ["SEMARNAT", 1255],
                    ["ISSSTE", 1017],
                    ["SHCP", 1016],
                    ["COFEPRIS", 933],
                    ["SEGOB", 931],
                    ["PGR", 907],
                    ["FUNCIÓN PÚBLICA", 817],


                ]
            }, {
                name: "2014",
                id: "2014",
                data: [
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["ISSSTE", 1256],
                    ["SEMARNAT", 1255],
                    ["SALUD", 817],
                    ["SEGOB", 933],
                    ["COFEPRIS", 1017],
                    ["SCT", 1016],
                    ["PGR", 931],
                    ["SHCP", 907],



                ]
            }, {
                name: "2015",
                id: "2015",
                data: [
                    ["IMSS", 1925],
                    ["SEP", 1258],
                    ["SALUD", 1256],
                    ["ISSSTE", 1255],
                    ["PGR", 1017],
                    ["SEGOB", 1016],
                    ["SEMARNAT", 933],
                    ["SCT", 931],
                    ["COFEPRIS", 907],
                    ["FUNCIÓN PÚBLICA", 817],


                ]
            }
        ]
    }
});