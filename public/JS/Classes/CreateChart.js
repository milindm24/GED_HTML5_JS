class CreateChart {

    constructor(){

    }

    randomcolor(chartType){
        var R = Math.floor(Math.random() * 255);
        var G = Math.floor(Math.random() * 255);
        var B = Math.floor(Math.random() * 255);
        var fillPattern = `rgb(${R},${G},${B})`;
        var fillPatternLine =  `rgba(${R},${G},${B},0.2)` ;
        console.log(fillPattern);
        if (chartType === "line" || chartType ==="radar")
        return fillPatternLine;
        else
        return fillPattern
    }

    onViewChart(chartArray,chartHeader,chartType){
        var dataset = [];
        var data=[];
        var indicators = ['Exports of goods and services (% of GDP)',
        'Exports of goods and services (annual % growth)',
        'Exports of goods and services (current US$)',
        'GDP (current US$)',
        'GDP growth (annual %)',
        'GDP per capita (current US$)',
        'GDP per capita growth (annual %)',
        'GNI growth (annual %)',
        'GNI per capita growth (annual %)',
        'Imports of goods and services (% of GDP)',
        'Imports of goods and services (annual % growth)',
        'Imports of goods and services (current US$)'
        ];
        document.getElementById("myChartDiv").style.display = "";    
       
    
        var divEle = document.getElementById("myChartDiv");
        divEle.innerHTML = '';
        
        for (var j=0; j<indicators.length;j++){
            data.push({indicator: indicators[j],data: []});
            for(var i=0; i<chartArray.length; i++){
                if (indicators[j]===chartArray[i].indicator)
                data[0].data.push({
                    label: chartArray[i].country,
                    data: chartArray[i].data.slice(3)
                    , backgroundColor: this.randomcolor(chartType)
                });
            }
            new ViewChart(data, chartType, chartHeader);
            data = [];
        }
    }

}