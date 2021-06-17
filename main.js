var cache = {};

var joinOrdering = function(n){
    if(n in cache)return cache[n];
    if(n < 3){
        cache[n] = 1;
        return 1;
    }else{
        var sum = 0;
        for(var i = 1; i < n-1; i++){
            sum += joinOrdering(n-i);
            sum += joinOrdering(i);
        }
        cache[n] = sum;
        return sum;
    }
}

if(process.argv.length >= 3){
    var n = parseInt(process.argv[2]);
    console.log(joinOrdering(n));
}