function checkDupes(ourArray){
    var noDupes = [];
    var noRepeatDupes =[];
    var noRD2 = [];
        
    for (i=0; i < ourArray.length; i++){
        if (noDupes.indexOf(ourArray[i]) === -1) {
            noDupes.push(ourArray[i]);
        }
        else{
            noRD2.push(ourArray[i]);
            }
        }
    for (x=0; x < noRD2.length; x++){
        
        if (noRepeatDupes.indexOf(noRD2[x]) === -1) {
            noRepeatDupes.push(noRD2[x]);
        }
    }
    console.log(noRepeatDupes);    
}
