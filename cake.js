/*
cake
*/
function birthdayCakeCandles(ar) {
    var maxHeight = Math.max(...ar);
    var maxHeightCount = 0;
    for(var i = 0; i < ar.length; i++){
        if (ar[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    return maxHeightCount;
}

birthdayCakeCandles([4,4,1,3])
