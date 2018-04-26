class ViewTable {

    constructor(){

    }

    viewData(sliceMainArray){
        document.getElementById("tableContainer").style.display = "";
        document.getElementById("myChartDiv").style.display = "none";
        var tableVar = document.getElementById("tableBody");
        if (viewOutput){
            if(tableVar){
                tableVar.parentNode.removeChild(tableVar);
            }
            var tbdy = document.createElement('tbody');
            tbdy.setAttribute("id","tableBody");
            document.getElementById("myTable").appendChild(tbdy);    
            for (var j=0; j<copyArray.length;j++){
            var tr = document.createElement('tr');    
            tbdy.appendChild(tr);
            if (typeof sliceMainArray != 'undefined'){
                for(var i=0;i< sliceMainArray[j].length;i++){
                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(sliceMainArray[j][i]));
                    tr.appendChild(td);
                    tr.setAttribute("class",copyArray[j].country + " "+ copyArray[j].indicator.replace(/ /g,"_"));
                    td.setAttribute("nowrap","nowrap");             
                }
            }else {
                headerCreate(headerArray);
                for(var i=0;i< copyArray[j].data.length;i++){
                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(copyArray[j].data[i]));
                    tr.appendChild(td);
                    tr.setAttribute("class",copyArray[j].country + " "+ copyArray[j].indicator.replace(/ /g,"_"));
                    td.setAttribute("nowrap","nowrap");             
                }
            }
           
        }
    }else {
        output.innerHTML = "Please select other files";
    }
    }

}