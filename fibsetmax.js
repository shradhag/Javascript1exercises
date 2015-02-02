///Return list of fibonacci numbers going up to but not beyond max.
function fibSet(max){
    if (max > 1){
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max) {
            fib_list.push(current_fib);
            current_fib = ((fib_list[(fib_list.length)-1]) + (fib_list[(fib_list.length)-2]));
        }
    }
    for (var i=0; i < fib_list.length; i++){
        if (((fib_list[i]) % 2) === 0){
            console.log(fib_list[i])
        }
        else {
        console.log("Not even");
        }
    }
}