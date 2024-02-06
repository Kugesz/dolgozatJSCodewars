// All or Nothing
function possiblyPerfect(key,answers) {
    osszes = 0;
    hibak = 0;
    for(let i = 0; i < key.length; i++){
        if(key[i] == "_"){continue;}
        osszes++;
        if(key[i] != answers[i]){hibak++;}
    }
    if(hibak == osszes || hibak == 0){return true;}
    return false;
}

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    numbers.sort(function(a,b){return a-b})
    median = numbers[Math.round(numbers.length/2, 0)-1]
    avg = 0;
    for(let i = 0; i < numbers.length; i++){
        avg += numbers[i];
    }
    avg = avg/numbers.length;
    if(median == avg){return "same";}
    if(median > avg){return "median";}
    return "mean";
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    middle = Math.floor(arr.length/2);
    firstPart = arr.slice(0,middle);
    if(arr.length%2 == 0){
        secondPart = arr.slice(middle)
        return[...secondPart,...firstPart]
    }else{
        secondPart = arr.splice(middle+1)
        return[...secondPart,arr[middle],...firstPart]
    }
    
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
