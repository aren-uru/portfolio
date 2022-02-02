$('#chart1').on('inview', function(event, isInView) {
if (isInView) {

var ctx=document.getElementById("chart1");
var chart=new Chart(ctx,{
type:'horizontalBar',
data:{
  labels:["HTML","CSS","JavaScript"],
  datasets: [
        {
          label:"歴",
          data: [1,1,0.2],
          backgroundColor: ["#afa","#caf","#ffa"],
        },
    ],
},
options:{
  legend:{  
    display: false
  },
tooltips:{
  callbacks:{
        label: function(tooltipItems, data) {
            if(tooltipItems.xLabel == "0"){
              return "";
            }
            else if(tooltipItems.xLabel >= "1"){
              return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.xLabel + "年";
            }
            else{
            return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.xLabel*10 + "ヶ月";
            }
        }
    }
  
  },
  title:{
    display: false,
  },
  scales:{
    xAxes:[
      {
        ticks:{
          beginAtZero:true,
          suggestedMax: 2,
          suggestedMin: 0,
          stepSize: 1,
          callback: function(value){
            return  value     
        }
      }
      }
    ],
    yAxes:[
      {
        barPercentage:0.5,
      }
    ]
  }
}
});       
}
});

$('#chart2').on('inview', function(event, isInView) {
  if (isInView) {
  
  var ctx=document.getElementById("chart2");
  var chart=new Chart(ctx,{
  type:'horizontalBar',
  data:{
    labels:["Python","C"],
    datasets: [
          {
            label:"歴",
            data: [2,1],
            backgroundColor: ["#adf","#faa"],
          },
      ],
  },
  options:{
    legend:{  
      display: false
    },
  tooltips:{
    callbacks:{
          label: function(tooltipItems, data) {
              if(tooltipItems.xLabel == "0"){
                return "";
              }
              else if(tooltipItems.xLabel >= "1"){
                return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.xLabel + "年";
              }
              else{
              return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.xLabel*10 + "ヶ月";
              }
          }
      }
    
    },
    title:{
      display: false,
    },
    scales:{
      xAxes:[
        {
          ticks:{
            beginAtZero:true,
            suggestedMax: 2,
            suggestedMin: 0,
            stepSize: 1,
            callback: function(value){
              return  value     
          }
        }
        }
      ],
      yAxes:[
        {
          barPercentage:0.5,
        }
      ]
    }
  }
  });       
  }
  });