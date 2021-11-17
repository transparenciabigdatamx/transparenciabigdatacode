$(function() {
    // Create the chart
    var chart = new Highcharts.Charts({
        chart: {
            renderTo: 'sinc',
            type: 'column',
            events: {
                drilldown: function(e) {
                    e.seriesOptions.color = e.point.color;
                    detailChart(e.seriesOptions);
                    return false;
                }
            }
        },
        title: {
            text: 'Ranking de instituciones con más solicitudes recibidad 2003-2015'
        },
        subtitle: {
            text: 'De click para ver el detalle de la evolución del número de solicitudes recibidas por la institución'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Dependencia'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{value:%b %e}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
        },

        series: [{
            name: 'Dependencias',
            colorByPoint: true,
            data: [{
                    name: "INSTITUTO MEXICANO DEL SEGURO SOCIAL",
                    y: 82705,
                    drilldown:   "INSTITUTO MEXICANO DEL SEGURO SOCIAL"

                }, {
                    name: "SECRETARÍA DE EDUCACIÓN PÚBLICA",
                    y: 49071,
                    drilldown:   "SECRETARÍA DE EDUCACIÓN PÚBLICA"
                }, {
                    name: "SECRETARÍA DE SALUD",
                    y: 35716,
                    drilldown:   "SECRETARÍA DE SALUD"
                }, {
                    name: "SECRETARÍA DE MEDIO AMBIENTE Y RECURSOS NATURALES",
                    y: 33993,
                    drilldown:   "SECRETARÍA DE MEDIO AMBIENTE Y RECURSOS NATURALES"
                }, {
                    name: "SECRETARÍA DE HACIENDA Y CRÉDITO PÚBLICO",
                    y: 33254,
                      drilldown:   "SECRETARÍA DE HACIENDA Y CRÉDITO PÚBLICO"
                }, {
                    name: "SECRETARÍA DE COMUNICACIONES Y TRANSPORTES",
                    y: 29502,
                    drilldown:   "SECRETARÍA DE COMUNICACIONES Y TRANSPORTES"
                },
                {
                    name: "INSTITUTO DE SEGURIDAD Y SERVICIOS SOCIALES DE LOS TRABAJADORES DEL ESTADO",
                    y: 27942,
                    drilldown:   "INSTITUTO DE SEGURIDAD Y SERVICIOS SOCIALES DE LOS TRABAJADORES DEL ESTADO"
                },
                {
                    name: "SECRETARÍA DE LA FUNCIÓN PÚBLICA",
                    y: 27747,
                    drilldown:   "SECRETARÍA DE LA FUNCIÓN PÚBLICA"
                },
                {
                    name: "PROCURADURÍA GENERAL DE LA REPÚBLICA",
                    y: 25236,
                    drilldown:   "PROCURADURÍA GENERAL DE LA REPÚBLICA"
                },
                {
                    name: "COMISIÓN FEDERAL DE ELECTRICIDAD",
                    y: 21748,
                    drilldown:   "COMISIÓN FEDERAL DE ELECTRICIDAD"
                },
                {
                    name: "COMISIÓN NACIONAL DEL AGUA",
                    y: 20653,
                    drilldown:   "COMISIÓN NACIONAL DEL AGUA"
                }
            ]
        }],
        drilldown: {
            series: [{
                name: "INSTITUTO MEXICANO DEL SEGURO SOCIAL",
                id: "INSTITUTO MEXICANO DEL SEGURO SOCIAL",
                data: [
                    ["2003", 800],
                    ["2004", 1256],
                    ["2005", 1575],
                    ["2006", 1862],
                    ["2007", 6242],
                    ["2008", 8282],
                    ["2009", 9962],
                    ["2010", 9429],
                    ["2011", 9161],
                    ["2012", 7530],
                    ["2013", 10603],
                    ["2014", 9602],
                    ["2015", 6401]

                ]
            }, {
                name: "SECRETARÍA DE EDUCACIÓN PÚBLICA",
                id: "SECRETARÍA DE EDUCACIÓN PÚBLICA",
                data: [
                    ["2003", 1019],
                    ["2004", 1255],
                    ["2005", 1894],
                    ["2006", 2195],
                    ["2007", 5202],
                    ["2008", 4177],
                    ["2009", 4957],
                    ["2010", 4721],
                    ["2011", 4384],
                    ["2012", 4607],
                    ["2013", 4632],
                    ["2014", 5777],
                    ["2015", 4251]

                ]
            }, {
                name: "SECRETARÍA DE SALUD",
                id: "SECRETARÍA DE SALUD",
                data: [
                    ["2003", 455],
                    ["2004", 817],
                    ["2005", 1228],
                    ["2006", 1839],
                    ["2007", 2685],
                    ["2008", 3120],
                    ["2009", 3195],
                    ["2010", 3810],
                    ["2011", 3890],
                    ["2012", 3712],
                    ["2013", 3661],
                    ["2014", 3980],
                    ["2015", 3324]

                ]
            }, {
                name: "SECRETARÍA DE MEDIO AMBIENTE Y RECURSOS NATURALES",
                id: "SECRETARÍA DE MEDIO AMBIENTE Y RECURSOS NATURALES",
                data: [
                    ["2003", 753],
                    ["2004", 1258],
                    ["2005", 1766],
                    ["2006", 1945],
                    ["2007", 2521],
                    ["2008", 2977],
                    ["2009", 3232],
                    ["2010", 3240],
                    ["2011", 3153],
                    ["2012", 3081],
                    ["2013", 3433],
                    ["2014", 4039],
                    ["2015", 2595]

                ]
            }, {
                name: "SECRETARÍA DE HACIENDA Y CRÉDITO PÚBLICO",
                id: "SECRETARÍA DE HACIENDA Y CRÉDITO PÚBLICO",
                data: [
                    ["2003", 1469],
                    ["2004", 1925],
                    ["2005", 2007],
                    ["2006", 2284],
                    ["2007", 2649],
                    ["2008", 2567],
                    ["2009", 3053],
                    ["2010", 2918],
                    ["2011", 3242],
                    ["2012", 2940],
                    ["2013", 3208],
                    ["2014", 3018],
                    ["2015", 1974]


                ]
            }, {
                name: "SECRETARÍA DE COMUNICACIONES Y TRANSPORTES",
                id: "SECRETARÍA DE COMUNICACIONES Y TRANSPORTES",
                data: [
                    ["2003", 621],
                    ["2004", 907],
                    ["2005", 1189],
                    ["2006", 1334],
                    ["2007", 2127],
                    ["2008", 2605],
                    ["2009", 3371],
                    ["2010", 3397],
                    ["2011", 3185],
                    ["2012", 2668],
                    ["2013", 2559],
                    ["2014", 3146],
                    ["2015", 2393]


                ]
            }, {
                name: "INSTITUTO DE SEGURIDAD Y SERVICIOS SOCIALES DE LOS TRABAJADORES DEL ESTADO",
                id: "INSTITUTO DE SEGURIDAD Y SERVICIOS SOCIALES DE LOS TRABAJADORES DEL ESTADO",
                data: [
                    ["2003", 307],
                    ["2004", 463],
                    ["2005", 704],
                    ["2006", 742],
                    ["2007", 1402],
                    ["2008", 2310],
                    ["2009", 3034],
                    ["2010", 2756],
                    ["2011", 2961],
                    ["2012", 2665],
                    ["2013", 3260],
                    ["2014", 4261],
                    ["2015", 3077]


                ]
            }, {
                name: "SECRETARÍA DE LA FUNCIÓN PÚBLICA",
                id: "SECRETARÍA DE LA FUNCIÓN PÚBLICA",
                data: [
                    ["2003", 628],
                    ["2004", 1017],
                    ["2005", 1379],
                    ["2006", 1618],
                    ["2007", 2117],
                    ["2008", 2799],
                    ["2009", 2507],
                    ["2010", 2830],
                    ["2011", 2996],
                    ["2012", 2707],
                    ["2013", 2590],
                    ["2014", 2550],
                    ["2015", 2009]


                ]
            }, {
                name: "PROCURADURÍA GENERAL DE LA REPÚBLICA",
                id: "PROCURADURÍA GENERAL DE LA REPÚBLICA",
                data: [
                    ["2003", 505],
                    ["2004", 1016],
                    ["2005", 1233],
                    ["2006", 1233],
                    ["2007", 1918],
                    ["2008", 1859],
                    ["2009", 2115],
                    ["2010", 2084],
                    ["2011", 2334],
                    ["2012", 2384],
                    ["2013", 2617],
                    ["2014", 3070],
                    ["2015", 2868]
                ]
            }, {
                name: "COMISIÓN FEDERAL DE ELECTRICIDAD",
                id: "COMISIÓN FEDERAL DE ELECTRICIDAD",
                data: [
                    ["2003", 506],
                    ["2004", 706],
                    ["2005", 977],
                    ["2006", 994],
                    ["2007", 1353],
                    ["2008", 1742],
                    ["2009", 1970],
                    ["2010", 2425],
                    ["2011", 1931],
                    ["2012", 2445],
                    ["2013", 2309],
                    ["2014", 2798],
                    ["2015", 1592]

                ]

            }]
        }
    });

    function detailChart(series) {
        console.log('d', series);
        var chart2 = new Highcharts.Charts({
            chart2: {
                renderTo: 'sinc2',
                type: 'bar'
            },
            xAxis: {
                categories: ["2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"]
            },

            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                detailChart(this.category);
                            }
                        }
                    }
                }
            },

            series: [series]
        });
    }
});