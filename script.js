function LoadData() {
    var fname = document.getElementById('fname').value
    var lname =document.getElementById('lname').value
    var age =document.getElementById('age').value
    var gen=document.getElementsByName('gender');
    var dob=document.getElementById('dob').value

    for(i = 0; i < gen.length; i++) { 
        if(gen[i].checked) 
        gend=gen[i].value;
    }

    

    if (fname != "" && lname != "" && age != "" && dob!="") {
        var tableRef = document.getElementById('showData')

        // Insert a row in the table at the last row
        var newRow = tableRef.insertRow(1);

        // Insert a cell in the row at index 0
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        var newCell4 = newRow.insertCell(3);
        var newCell5 = newRow.insertCell(4);
        
        

        // Append a text node to the cell
        newCell1.innerHTML = fname;
        newCell2.innerHTML = lname;
        newCell3.innerHTML = age;
        newCell4.innerHTML = gend;
        newCell5.innerHTML = dob;
        
       
    }
    else{
    alert("Details mIssing");
    }
    console.log(gend);
    console.log("test");

}

