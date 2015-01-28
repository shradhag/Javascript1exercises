var maxNumber = function fibSet(max){
   if (max > 1){
        var fibList = [1];
        var n = 1;
        while (n < max){
            fibList.push(n);
            n = ((fibList[fibList.length-1]) + (fibList[fibList.length-2]));
        console.log(fibList);
    }
   
   }
    else {
        console.log([1, 1]);
    }
}


