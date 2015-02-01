var maxNumber = function fibSet(max){
   if (max > 1){
        var fibList = [1];
        var n = 1;
        while (n < max){
            fibList.push(n);
            n = ((fibList[fibList.length-1]) + (fibList[fibList.length-2]));
       {
        for (var i=0; i < fibList.length; i++){
            if (i % 2 === 0){
                console.log(i);
            }
        }
       }
    }
   
   }
    else {
        console.log("Not even");
    }
};


