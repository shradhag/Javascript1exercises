function fibSet(max){
   if (max > 1){
        var fibList = [1];
        var n = 1;
        while (n < max){
            fibList.push(n);
            n = ((fibList[fibList.length-1]) + (fibList[fibList.length-2]));
       {
        var evensList = [];
        for (var i=0; i < fibList.length; i++){
            if (fibList[i] % 2 === 0){
               evensList.push(fibList[i]);
            }
        }
       }
    
    }
//   console.log(evensList)
  var sum = 0
  for (var x=0; x < evensList.length; x++){
      sum = sum + evensList[x]
   }
  console.log(sum)
   }
  else {
        console.log("Not even!");
    }
}
