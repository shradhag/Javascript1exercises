function fibonacci(max){
                    if (max > 1){
                        var fibList = [1];
                        var current_fib = 1;
                        while (current_fib < max){
                            fibList.push(current_fib);
                            current_fib = fibList[fibList.length-1] + fibList[fibList.length-2];
                        }
                        return fibList;
                    }
                    else{
                        return [1,1];
                    }
                }
                var isEven = function(n){
                    return (n % 2 === 0);
                };
                function filter(aFunction,aList){
                    var List2 =[];
                    for (var i=0; i<aList.length; i++){
                        var value = aList[i];
                        if (aFunction(num)){
                            List2.push(num);
                        }
                    }
                    return List2;
                }
