class FilterColumn {

    constructor(){

    }


    onFilterColumns(type){
        var slider1 = document.getElementById("sliderValue").innerHTML;
        var slider2 = document.getElementById("sliderValue2").innerHTML;
        var startPos = slider1 - 1961;
        var endPos =  55-(2016 - slider2);
        var sliceMainArray=[];
        var chartArray = [];
        var mainIndicator = headerArray.slice(0,3);
        if (slider1 < slider2){
            var header = headerArray.slice(startPos+3,endPos+4);
            for (var j=0; j<copyArray.length;j++){
                let copyArraySlice = copyArray[j].data.slice(startPos+3,endPos+4);
                sliceMainArray.push([copyArray[j].data[0],copyArray[j].data[1],copyArray[j].data[2],...copyArraySlice]);
                chartArray.push({country:copyArray[j].data[0],
                    indicator: copyArray[j].data[2],
                    data : [copyArray[j].data[0],copyArray[j].data[1],copyArray[j].data[2],...copyArraySlice]});
            }
        }else {
            var header = headerArray.slice(endPos+3,startPos+4);
            for (var j=0; j<copyArray.length;j++){
                let copyArraySlice = copyArray[j].data.slice(endPos+3,startPos+4);
                sliceMainArray.push([copyArray[j].data[0],copyArray[j].data[1],copyArray[j].data[2],...copyArraySlice]);
                chartArray.push({country:copyArray[j].data[0],
                    indicator: copyArray[j].data[2],
                    data : [copyArray[j].data[0],copyArray[j].data[1],copyArray[j].data[2],...copyArraySlice]});
            }
        }
        headerCreate([...mainIndicator,...header]);
if ( document.getElementById("myChartDiv").style.display === ""){
var updateChart = new CreateChart();
updateChart.onViewChart(chartArray,[...mainIndicator,...header],type);        
}else {
var updateData = new ViewTable();
updateData.viewData(sliceMainArray);
}


}
}