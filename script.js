
// Asking user to enter a value for k (number of cluster)
const k = Number(prompt('enter valeur k'))
const chart = new Chart (document.querySelector('#chart'),{
    type:'scatter',
    data:chartData(),
    options:chartOptions()

})
//restrict algorithm to run in n times key in pressed (keydown event)
   let preventCallBack = false




// Begin k-means  algorithm.
-
//Listening for a keydown event
document.addEventListener('keydown',async()=>{
   if(!preventCallBack) {
      preventCallBack = true

     
      let clusterCenterLocs =['code']
      let clusterCenterNewLocs = ['tonight']
      
      /* The above code is checking if the new cluster center locations are the same as the old cluster
      center locations. If they are the same, then the while loop will stop. */
      while(JSON.stringify(clusterCenterLocs)!=JSON.stringify(clusterCenterNewLocs)){

         //Creating an empty array
         clusterCenterLocs = []
         
         for(let i=0 ; i<k; i++){
           clusterCenterLocs.push(chart.data.datasets[0].data[i])   
      }
      
    
      await labelDataPoints()
      await recenterClusterCenters()
   
      clusterCenterNewLocs = []
      
         for(let i=0 ; i<k; i++){
           clusterCenterNewLocs.push(chart.data.datasets[0].data[i])
         }
      }
      alert('********Done******* now click F12 to see results')
      consoleResults()
      
   }
   //draw()
 })


 //get the cluster and loop through them to display the results in table form

 function consoleResults() {
   const clusters = getClusters()
   for(let i=0 ; i<clusters.length; i++){
      console.log('Category $(String.formCharCode(i+65) Patients :')
      console.table(clusters[i])
      
      //for(i=1;i<n;i++){
      //console.log(clusters[0],clusters[1],clusters[2],clusters[3])
      console.log(clusters[i])
      
    }

 }
// Calculating length of the cluster

function recenterClusterCenters(){
  return new Promise(async(resolve,reject)=>{
   const clusters = getClusters()

  clusters.forEach((cluster,i)=>{
     let sumX =0
     let sumY =0
     cluster.forEach((dataPoint,j)=>{
      sumX = sumX +dataPoint.x
      sumY = sumY +dataPoint.y
     })
     if(cluster.length){
        chart.data.datasets[0].data[i] ={x:Number((sumX/cluster.length).toFixed(2)),y:Number((sumY/cluster.length).toFixed(2))}

     }
  
})
  //Updating the chart with a delay of 2 seconds
  chart.update(3000)
  await new Promise(resolve => setTimeout(resolve, 2000))
  resolve()
  })
}
function getClusters(){

  
   let clusters = []
   for(let i=0 ; i<k ;i++){
      clusters.push([])
   }
 //Creating an array of colors
   const colors = ['red','blue','green','yellow','purple','hotpink','black','orange','brown','grey'].slice(0,k)

   
   for(let i=k; i<chart.data.datasets[0].data.length; i++){
      for(let j=0; j<colors.length; j++){
         if(chart.data.datasets[0].pointBackgroundColor[i]==colors[j]){
            clusters[j].push(chart.data.datasets[0].data[i])
         }  
      }
   
   }
   return clusters
}


// Calculating the distance between the cluster center and the data point
 function labelDataPoints(){
   return new Promise(async(resolve,reject)=> {
      dataSet().forEach((dataPoint,i)=>{
      let distances = []
      for(let j=0; j<k;j++){
               const clusterCenterX = chart.data.datasets[0].data[j].x
               const clusterCenterY = chart.data.datasets[0].data[j].y
               distances.push(Math.sqrt(((clusterCenterX-dataPoint.WGB)**2)+((clusterCenterY-dataPoint.RGB)**2)))
         }
            const minValue = Math.min.apply(Math,distances)
            const index = distances.indexOf(minValue)
           chart.data.datasets[0].pointBackgroundColor[i+k] = chart.data.datasets[0].pointBackgroundColor[index]
    })
       chart.update(2000)
       await new Promise(resolve => setTimeout(resolve, 2000))
        resolve()
         
   }) 
 }




