class Dashboard {

    constructor(){

    }

    
headerCreate(header) {
    var createHeader = new CreateHeader();
    createHeader.headerCreate(header);
}


onChooseFile(){
    var fileChose = new LoadData();
    fileChose.onChooseFile();
 }
 
 onAddFiles(){
     var fileChose = new LoadData();
     fileChose.onAddFiles();
 }
 
 
 viewData(sliceMainArray){
     var viewTable = new ViewTable();
     viewTable.viewData(sliceMainArray);
 }
 
 onCheckCountry(checkid,className){
     if (document.getElementById(checkid).checked){
 
         var countryClass = document.getElementsByClassName(className);
         for (var i=0; i<countryClass.length;i++){
             countryClass[i].style.display = "";
         }
     }else {

         var countryClass = document.getElementsByClassName(className);
         for (var i=0; i<countryClass.length;i++){
             countryClass[i].style.display = "none";
         }
     }
 }
    
 
 onClickFilter(value,id){
 
     var checkIndicator = document.getElementById(id).checked;
     if (checkIndicator){
         var countryClass = document.getElementsByClassName(value);
         // document.getElementById(value).style.display = "";
         for (var i=0; i<countryClass.length;i++){
             countryClass[i].style.display = "";
         }
     }else {
         var countryClass = document.getElementsByClassName(value);
         // document.getElementById(value).style.display = "none";        
         for (var i=0; i<countryClass.length;i++){
             countryClass[i].style.display = "none";
         }
     }
 }
 
 
 onFilterColumns(type="bar"){
 
     var filteredColumn = new FilterColumn();
     filteredColumn.onFilterColumns(type);
   
 }
 
 
 expandCountries(){
    var expandCountries = new LeftNavControl();
    expandCountries.expandCountries();
}


expandSliders(){
    var expandSliders = new LeftNavControl();
    expandSliders.expandSliders();
}


expandCharts(){
    var expandCharts = new LeftNavControl();
    expandCharts.expandCharts();
}


onfilterRows(){
    var onfilterRows = new LeftNavControl();
    onfilterRows.onfilterRows();
}


expandStats(){
    var expandStats = new LeftNavControl();
    expandStats.expandStats();
} 

onViewChart(chartArray=copyArray,chartHeader=headerArray,chartType="bar"){
    var createChart = new CreateChart();
    createChart.onViewChart(chartArray,chartHeader,chartType);
 }



 onShowStats(value){
    if (value==="min"){
        var min = new Min();
        min.calculate();
    }
    else if (value==="max"){
        var max = new Max();
        max.calculate();
    }
    else if (value==="avg"){
        var avg = new Average();
        avg.calculate();
    }
    else if (value==="sum"){
        var sum = new Sum();
        sum.calculate();
    }
}
}