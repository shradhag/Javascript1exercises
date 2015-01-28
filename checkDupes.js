function checkDupes(sugarArray){
    var howBizarre = []
    for (i=0; i < sugarArray.length; i++){
        if (howBizarre.indexOf(sugarArray[i]) === -1) {
            howBizarre.push(sugarArray[i])
        }
    console.log(howBizarre)
        
    }
    
}