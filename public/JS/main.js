var data = fetch('./public/CSV/header.csv')
.then(response => response.text())
.then(text => {
    headerArray = text.split(",");
    headerCreate(headerArray);
});


headerCreate = (header) =>{
    new Dashboard().headerCreate(header);
}


onChooseFile = () =>{
    new Dashboard().onChooseFile();
 }
 
 onAddFiles = () => {
    new Dashboard().onAddFiles();
 }
 
 
 viewData = (sliceMainArray)=>{
    new Dashboard().viewData(sliceMainArray);
 }
 
 onCheckCountry = (checkid,className)=>{
    new Dashboard().onCheckCountry(checkid,className);
 }
    
 
 onClickFilter = (value,id)=>{
    new Dashboard().onClickFilter(value,id);

 }
 
 
 onFilterColumns = (type="bar")=>{
    new Dashboard().onFilterColumns(type);
 }
 
 
 expandCountries = () => {
    new Dashboard().expandCountries();
}


expandSliders = ()=>{
    new Dashboard().expandSliders();
}


expandCharts = ()=>{
    new Dashboard().expandCharts();
}


onfilterRows = ()=>{
    new Dashboard().onfilterRows();
}


expandStats = ()=>{
    new Dashboard().expandStats();
} 

onViewChart = (chartArray=copyArray,chartHeader=headerArray,chartType="bar")=>{
    new Dashboard().onViewChart(chartArray,chartHeader,chartType);
 }

 onShowStats = (value)=>{
    new Dashboard().onShowStats(value);
}