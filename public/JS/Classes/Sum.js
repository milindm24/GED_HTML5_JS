class Sum extends ShowStats {

    constructor(){
        super();
    }

    calculate(){
        var data=[];
        var indicators = super.calculate();
        var headerMin;
        document.getElementById("myChartDiv").style.display = "";    
        var divEle = document.getElementById("myChartDiv");
        divEle.innerHTML = '';
        for (var j=0; j<indicators.length;j++){
            data.push({indicator: indicators[j],data: []});
            for(var i=0; i<copyArray.length; i++){
                if (indicators[j]===copyArray[i].indicator){
                    var sum = this.calcSum(copyArray[i].data.slice(3));
                data[0].data.push({
                    label: copyArray[i].country,
                    data: [sum],
                    backgroundColor: new CreateChart().randomcolor()
                });
            }
            }
            new ViewChart(data, "bar", headerArray.slice(0,3));
            data = [];
        }
    }

    calcSum(arr){

        var sum = 0;
        for( var i = 0; i < arr.length; i++ ){
            sum += parseInt(arr[i], 10 );
        }
        
        return sum;
    }

}