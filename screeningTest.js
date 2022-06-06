function woodenPlankPair(arrOfLength,maxLength){
    let obj = {}
    for(let i = 0 ; i < arrOfLength.length ; i++){
        obj[maxLength - arrOfLength[i]] = i
        if(obj[arrOfLength[i+1]] >= 0){ // conditional of possible pair show any index 0 and after
            return 'YES'
        }
    }
    // never hit the condition of possible pair of length to be exactly like max value
    return 'NO'
}

console.log(woodenPlankPair([6,1,2,5,4],6));
console.log(woodenPlankPair([1,2,3,6,5,4],12));