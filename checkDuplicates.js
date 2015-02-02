//Given an array in Javascript, write a function in Javacsript that returns any items that have duplicates. The data contained in the array may be an integer or a string, or a boolean, but it will not be an array or a Javascript object.

function checkDuplicates(arr){
    var counts = {};
    for (i=0; i < arr.length; i++){
         counts[arr[i]] = (counts[arr[i]] + 1) || 1;
    }
    if (counts[arr[i]] > 1){
        return(counts[arr[i]]);
    }
for(var key in counts) {
    var value = counts[key];
    if (value > 1){
        console.log(key);
    }
}
}


