Highcharts.chart('containerevolucion', {

    title: {
        margin: 50,
        align: "left",

        style: {
            fontFamily: "Arial Narrow",
            color: '#2c666eff',
            fontSize: '20px',
            fontWeight: 'bold',

        },
        text: 'SOLICITUDES DE ACCESO A LA INFORMACIÓN INGRESADAS , 2003-2019'
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

            text: 'Miles de Solicitudes',

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

        accessibility: {
            rangeDescription: 'Range: 2003 to 2019'
        }
    },



    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2003
        }
    },

    series: [{
        name: 'Miles de solicitudes anuales',
        data: [
            22573,
            34216,
            43391,
            50757,
            78365,
            85604,
            97486,
            99713,
            96073,
            94600,
            109445,
            116078,
            121958,
            146851,
            210781,
            199162,
            242663
        ],
        color: '#000',

    }],
    chart: {

        backgroundColor: 'goldenrod'
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'left',
                    verticalAlign: 'top',

                }
            }
        }]
    }

});