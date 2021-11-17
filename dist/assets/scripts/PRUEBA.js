var chart_1 = Highcharts.chart('container2', {

    chart: {
        events: {
            drilldown(e) {

                if (!e.seriesOptions) {
                    var chart = this,
                        drilldowns = {
                            Cats: {
                                name: 'cats',
                                id: '1',
                                data: [
                                    ['Ora', 5],
                                    ['Roho', 4]
                                ]
                            },
                            Dogs: {
                                name: 'dogs',
                                id: '2',
                                data: [
                                    ['Pestka', 3],
                                    ['Galka', 2]
                                ]
                            }
                        },
                        series = drilldowns[e.point.name.toString()];

                    chart_2.addSeries({
                        name: 'cats',
                        type: 'pie',
                        id: '1',
                        data: [
                            ['Ora', 5],
                            ['Roho', 4]
                        ]
                    })
                    chart_3.addSeries({
                        name: 'cats',
                        type: 'column',
                        id: '1',
                        data: [
                            ['Ora', 5],
                            ['Roho', 4]
                        ]
                    })

                }
            }
        }
    },

    series: [{
        name: 'Things',
        colorByPoint: true,
        type: 'pie',
        data: [{
            name: 'cats',
            y: 4,
            drilldown: true
        }, {
            name: 'dogs',
            y: 2,
            drilldown: true
        }]
    }],

    drilldown: {
        series: []
    }

});
var select = document.getElementById('select');

select.addEventListener('change', (e) => {
    let option = e.target.value,
        data1 = [2],
        data2 = [4];

    if (option === 'dogs') {
        chart.addSeries({
            data: data2
        });
    }
    if (option === 'cats') {
        chart.series[1].remove();
    }
});

var chart_2 = Highcharts.chart('container2.1', {

    drilldown: {
        series: [{
            Cats: {
                name: 'cats',
                data: [
                    ['Ora', 5],
                    ['Roho', 4]
                ]
            },
            Dogs: {
                name: 'dogs',
                data: [
                    ['Pestka', 3],
                    ['Galka', 2]
                ]
            }
        }]
    }
});
var chart_3 = Highcharts.chart('container3.1', {

    drilldown: {
        series: [{
            Cats: {
                name: 'cats',
                data: [
                    ['Ora', 5],
                    ['Roho', 4]
                ]
            },
            Dogs: {
                name: 'dogs',
                data: [
                    ['Pestka', 3],
                    ['Galka', 2]
                ]
            }
        }]
    }
});