// Chartist

new Chartist.Line('#chart-1', {
  labels: ['M', 'Tu', 'W', 'Th', 'Fr', 'Sa', 'Su'],
  series: [
    [1000, 700, 1200, 1500, 1100, 1800, 2000]
  ]
},
options = {
  axisX: {
    showGrid: false,
    showLabel: true
  },
  axisY: {
    offset: 50,
    showGrid: false,
    showLabel: true
  },
  showArea: false,
  chartPadding: {
    top: 20,
    right: 20,
    bottom: 0,
    left: 0
  },
  fullWidth: true
});


new Chartist.Bar('#chart-2', {
  labels: ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'],
  series: [
    [50, 60, 75, 70, 80, 50, 100]
  ]
},
{
  axisX: {
    showGrid: false,
    showLabel: true
  },
  axisY: {
    offset: 40,
    showGrid: false,
    showLabel: true
  },
  showArea: false,
  chartPadding: {
    top: 20,
    right: 20,
    bottom: 0,
    left: 0
  },
  fullWidth: true
});


new Chartist.Pie('#chart-3', {
  series: [170, 42 ],
  labels: ['', '']
}, {
  donut: true,
  donutWidth: 20,
  startAngle: 210,
  total: 260,
  showLabel: false,
  plugins: [
      Chartist.plugins.fillDonut({
          items: [{ //Item 1
              content: '<i class="fa fa-microphone text-muted"></i>',
              position: 'bottom',
              offsetY : 10,
              offsetX: 5
          }, { //Item 2
              content: '<h4 class="text-center font-bold font-xl mb-0">50<br><small class="font-bold font-xs">GOAL</small></h4>'
          }]
      })
  ],
});

new Chartist.Line('#chart-4', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [15, 20, 13, 25, 45, 10]
  ]
}, 
{
  axisX: {
    showGrid: false,
    showLabel: true
  },
  axisY: {
    offset: 40,
    showGrid: false,
    showLabel: true
  },
  reverseData: false,
  showArea: false,
  chartPadding: {
    top: 0,
    right: 20,
    bottom: 0,
    left: 0
  },
  fullWidth: true,
  showPoint: false,
  showArea: true
});

new Chartist.Line('#chart-5', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [75, 100, 45, 70, 125],
    [150, 90, 75, 125, 145]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40,
    top: 40
  },
  plugins: [
    Chartist.plugins.legend({
        legendNames: ['Radio', 'Streaming'],
    })
  ]
});

new Chartist.Line('#social-box-1', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [15, 20, 13, 25, 45, 10]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: true,
  chartPadding: {
    top: 0,
    right: 8,
    bottom: 0,
    left: 8
  },
  fullWidth: true,
  showPoint: false,
  height: 90
});

new Chartist.Line('#social-box-2', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [50, 20, 13, 15, 35, 10]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: true,
  chartPadding: {
    top: 0,
    right: 8,
    bottom: 0,
    left: 8
  },
  fullWidth: true,
  showPoint: false,
  height: 90
});

new Chartist.Line('#social-box-3', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [10, 20, 30, 40, 30, 20]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: true,
  chartPadding: {
    top: 0,
    right: 8,
    bottom: 0,
    left: 8
  },
  fullWidth: true,
  showPoint: false,
  height: 90
});

new Chartist.Line('#social-box-4', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [10, 20, 40, 70, 110, 170]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: true,
  chartPadding: {
    top: 0,
    right: 8,
    bottom: 0,
    left: 8
  },
  fullWidth: true,
  showPoint: false,
  height: 90
});

new Chartist.Line('#sparkline-1', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [10, 40, 20, 70, 110, 170]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: false,
  chartPadding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  fullWidth: true,
  showPoint: false
});

new Chartist.Line('#sparkline-2', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [110, 50, 75, 70, 20, 170]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: false,
  chartPadding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  fullWidth: true,
  showPoint: false
});

new Chartist.Line('#sparkline-3', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [30, 50, 75, 70, 20,80]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: false,
  chartPadding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  fullWidth: true,
  showPoint: false
});

new Chartist.Line('#sparkline-4', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [10, 20, 45, 60, 60, 100]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: false,
  chartPadding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  fullWidth: true,
  showPoint: false
});

new Chartist.Line('#sparkline-5', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [100, 80, 45, 30, 20, 60]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: false,
  chartPadding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  fullWidth: true,
  showPoint: false
});

new Chartist.Line('#sparkline-6', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    [10, 50, 20, 60, 30, 70]
  ]
}, 
{
  axisX: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  axisY: {
    offset: 0,
    showGrid: false,
    showLabel: false,
  },
  showArea: false,
  chartPadding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  fullWidth: true,
  showPoint: false
});