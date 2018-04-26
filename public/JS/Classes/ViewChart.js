class ViewChart{

    constructor(dataset,type, chartHeader){
        document.getElementById("tableContainer").style.display = "none";
        var divEle = document.getElementById("myChartDiv");
        var ctx = document.createElement("canvas");
        var h3 = document.createElement("h3");
        var hr = document.createElement("hr");
        h3.innerHTML = dataset[0].indicator;
        ctx.setAttribute("class",dataset[0].indicator.replace(/ /g,"_"));     
        h3.setAttribute("class",dataset[0].indicator.replace(/ /g,"_"));     
        hr.setAttribute("class",dataset[0].indicator.replace(/ /g,"_"));     
        divEle.appendChild(h3);
        divEle.appendChild(ctx);
        divEle.appendChild(hr);   
    var myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: chartHeader.slice(3),
            datasets: dataset[0].data
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    
    }

}