
// Creating a random array of points
function  chartData(){
  
  let clusterCenters = []
  for(let i=0; i<k;i++){  
    clusterCenters.push({x:Number((Math.random() * 10).toFixed(2)) ,y:Number((Math.random() * 10).toFixed(2))})

  }

// An array of colors. 
    const colors = ['red','blue','green','yellow','purple','hotpink','black','orange','brown','grey']

   return {
    // Creating a dataset for the chart
     datasets:
      [
        {
          label: 'Patient data chart',
          data: clusterCenters.concat(dataSet().map((dataPoint)=>{
            return {x:dataPoint.WGB, y:dataPoint.RGB}

        })),
         // Setting the style of the points.
         pointStyle: clusterCenters.map(clusterCenter =>'triangle').concat(dataSet().map(dataPoint => 'circle')),
         pointRadius: clusterCenters.map(clusterCenter => 10).concat(dataSet().map(dataPoint => 5.5)),
         pointBackgroundColor: colors.slice(0,k),
         showLine: false,
         backgroundColor:'aqua'



    }  

     ]

   }

 }
 /**
   It returns an object that contains the options for the chart.
  an object.
  */
 function chartOptions(){

    return{
        maintrainAspectRatio: false,
        legend:
        {
         labels:   
         {
             fontSize:20
         }   
        },
        responsive:true,
        scales:
        {
            xAxes:
            [
                {
                 display:true,
                 scaleLabel:
                 {
                    display:true,
                    labelStrinf:'WGB level',
                    fontSize: 20
                 },  
                 ticks:
                 {
                    fontSize:20,
                    max: 10,
                    min:0 
                 } 
                }
            ],
            yAxes:
            [
                {
                 display:true,
                 scaleLabel:
                 {
                    display:true,
                    labelStrinf:'RGB level',
                    fontSize: 20
                 },  
                 ticks:
                 {
                    fontSize:20,
                    max: 10,
                    min:0 
                 } 
                }
            ]
        }
    }
 }