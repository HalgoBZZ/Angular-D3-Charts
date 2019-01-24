import { Component, OnInit } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'app-d3-donut-chart',
  templateUrl: './d3-donut-chart.component.html',
  styleUrls: ['./d3-donut-chart.component.css']
})
export class D3DonutChartComponent implements OnInit {
  options;
  data;
  options1;
  data1;
  options2;
  data2;

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
          type: 'pieChart',
          height: 450,
          donut: true,
          x: function(d) {return d.key; },
          y: function(d) {return d.y; },
          showLabels: true,

          pie: {
              startAngle: function(d) { return d.startAngle - Math.PI / 2; },
              endAngle: function(d) { return d.endAngle - Math.PI / 2; }
          },
          duration: 500,
          legend: {
              margin: {
                  top: 5,
                  right: 140,
                  bottom: 5,
                  left: 0
              }
          }
      }
  };

  this.data = [
      {key: 'One', y: 5},
      {key: 'Two', y: 2},
      {key: 'Three', y: 9},
      {key: 'Four', y: 7},
      {key: 'Five', y: 4},
      {key: 'Six', y: 3},
      {key: 'Seven', y: .5}
  ];
  const colors = ['#9ACD32', '#708090'];
  this.options1 = {
    chart: {
        type: 'pieChart',
        height: 450,
       // width: 500,
        donut: true, // donut graph or not
        x: function(d) {return d.key; },
        y: function(d) {return d.y; },
        showLabels: false, // displaying labels onHover
        growOnHover: true, // enable desable zooming onHover
        showLegend: false, // displaying legend
        // arcsRadius: {
        //     inner: 0.6,
        //     outer: 0.8
        // },

        color: function(d, i) {
            return d.color || colors[i % colors.length];
        },
        // margin: {
        //     top: 100,
        //     bottom: 100
        // },
        padAngle: 0.05, // space between slices
       // valueFormat: ,//D3 Format object for the label of pie/donut, discrete bar and multibar charts. (d3.format(',.2f'))
        zoom: {
            enabled: false,
            scale: 1
        },
        noData: 'There is no Data to display',
        donutRatio: 0.6, // width of slices
        tooltip: {
            enabled: true
          },
        // tslint:disable-next-line:max-line-length
        // Any dispatch object contains event handlers for the specific chart element. General dispatch options contain only general chart events.
        // dispatch: {
        //     stateChange: function(e){ console.log('stateChange') },
        //     changeState: function(e){ console.log('changeState') },
        //     tooltipShow: function(e){ console.log('tooltipShow') },
        //     tooltipHide: function(e){ console.log('tooltipHide') },
        //     renderEnd: function(e){ console.log('renderEnd') }
        // },
        pie: {
            startAngle: function(d) { return d.startAngle - Math.PI / 2; },
            endAngle: function(d) { return d.endAngle - Math.PI / 2; }
        },
        duration: 500,
        legend: {
            margin: {
                top: 5,
                right: 140,
                bottom: 5,
                left: 0
            }
        }
    }
};
  this.data1 = [
    {key: 'One', y: 5},
    {key: 'Two', y: 2}
];

this.options2 = {
    chart: {
        type: 'multiBarHorizontalChart',
        height: 120,
        width: 450,
        x: function(d) {return d.label; },
        y: function(d) {return d.value; },
        // yErr: function(d){ return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] },
        showControls: false,
        stacked: true,
        showLegend: false,
        showLabels: false,
        showValues: false,
        showXAxis: false,
        showYAxis: false,
        duration: 0,
//         barColor: function (d, i) {
//   //          let colors = d3.scale.category20().range().slice(10);
//             return colors[i % colors.length];
//         },
     //   donutRatio: 0.2, // width of slices
        tooltip: {
            enabled: false
          },
        xAxis: {
            showMaxMin: false
        },
        yAxis: {
            axisLabel: '',
            tickFormat: function(d) {
                return d3.format(',.2f')(d);
            }
        }
    }
};

this.data2 = [
    {'color': '#D20000', 'values': [{'value' : 70}]},
    {'color': '#C7CE66', 'values': [{'value' : 50}]}
];
}


}
