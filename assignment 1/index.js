//add row at the bottom of the table
function addRow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var colCount = table.rows[0].cells.length;
    for(var i=0; i<colCount; i++) {
        var newcell = row.insertCell(i);
        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
    }
    adjustSno(tableID);
}

//add row at the top of the table
function addRowTop(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var row = table.insertRow(1);
    var colCount = table.rows[0].cells.length;
    for(var i=0; i<colCount; i++) {
        var newcell = row.insertCell(i);
        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
    }
    adjustSno(tableID);
}

//adjust s.no. column data in the table
function adjustSno(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    for(var i=1; i<rowCount; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}


