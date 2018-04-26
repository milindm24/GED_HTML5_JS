class ReadFiles {

    constructor() {

    }

    onChooseFile() {
        output.innerHTML = "";
        fileInput = document.getElementById("csv").files;
        inputNames = Object.keys(fileInput).map((file) => {
            return fileInput[file].name;
        }); 
        output.innerHTML = inputNames + ' selected';
    }

    createObjectFromArray(){
        let splittedChildComma = [];
        var legends = [];
        var dataObject;
        var count = 0;
        outarray.forEach(({name,data})=>{
                var splitted = data.split("\n");
                splitted.forEach((splittedChild)=>{
                        splittedChildComma.push({name , data: splittedChild.split(",")});
                        });
                    });
        for(var i=0;i<splittedChildComma.length;i++){
                legends.push({
                    name: splittedChildComma[i].name,
                    country: splittedChildComma[i].data[0],
                indicator: splittedChildComma[i].data[2],
                data: splittedChildComma[i].data});
            }
            mainArray = legends;
            copyArray = mainArray.slice(0);
        }
    
        addLabelList(){
            var countrySub = document.getElementById("countrySub");
        if (countrySub){
            document.getElementById("countrySub").remove();
        }
        var nchild = document.getElementById("countriesUl");
        var newCountry = document.createElement("li");
        var countryDiv = document.createElement("div");
        newCountry.setAttribute("id","countrySub");
        outarray.forEach(({name,data})=>{
            var newLabel = document.createElement("label");
            var checkInput = document.createElement("input");
            checkInput.setAttribute("type","checkbox");
            checkInput.setAttribute("value",name);
            var dataId = data.split(",");
            checkInput.setAttribute("id",name);
            checkInput.setAttribute("name","countries");
            checkInput.setAttribute("onclick",`onCheckCountry(this.id,'${dataId.splice(0,1)}')`);
            newLabel.appendChild(checkInput);
            newLabel.appendChild(document.createTextNode(name));
            countryDiv.appendChild(newLabel);
            checkInput.setAttribute("checked","true");
        });
        newCountry.appendChild(countryDiv);
        nchild.insertBefore(newCountry,nchild.childNodes[2]);
        document.getElementById("countrySub").style.display = "none";
        }


    onAddFiles() {
        output.innerHTML = "";    
        
       
        if (outarray.length > 0){
         names = outarray.map(({name})=> name );         
        }
        if (names.length>0){
    
            let matchFound = inputNames.filter((name)=>{
                return names.includes(name);
            });
                if (matchFound.length>0){
                    output.innerHTML = `${matchFound} already loaded` ;
                } else {
                    if (fileInput){
                        for (var j = 0; j < fileInput.length ;j++){
                            this.loadMultiple(j);
                        }
                    }
                    else{
                        output.innerHTML = "Please select a file";
                    }
                }
              
        }else {
            if (fileInput){
                for (var j = 0; j < fileInput.length ;j++){
                    this.loadMultiple(j);
                }              
            }
            else{
                output.innerHTML = "Please select a file";
            }
        }
        setTimeout(()=>{
            this.createObjectFromArray();                
            this.addLabelList();
        },1000); 
    }

    loadMultiple(i) {  //function to retreive and render data in html file
        let reader = new FileReader();
        if (i < fileInput.length ) {
            reader.addEventListener("load", () => {         
                outarray.push({ name: fileInput[i].name, data: reader.result });
                viewOutput = true;                
        }, false);
            reader.readAsBinaryString(fileInput[i]);
            output.innerHTML = `Files Added `;            
        }
    }
    
   

}