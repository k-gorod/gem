function randomNumbers(n){
    var arr=[];
    var i2;
    var sub;
    for (let i = 0; i < Math.pow(n,2)-1; i++) {
        arr.unshift(i+1);
        i2=Math.floor(Math.random()*(i + 1));
        sub = arr[i2];
        arr[i2]=arr[0];
        arr[0]=sub;
    }
    return arr;
}
function checkSequenceValidity(array){
    let coefficient=4;
    for (let i = 0; i < array.length; i++) {
        for (let n = i+1; n < array.length; n++) {
            if(array[i]>array[n]){coefficient++}
        }
    }
    return coefficient%2===0;
}
function cellNumbers(fieldType){
    let array = randomNumbers(fieldType);
    while(!checkSequenceValidity(array)){
        array = randomNumbers(fieldType)
    }
    array.push(0);
    let newArray = [];
    for (let i = 0; i < fieldType; i++) {
        newArray.push(array.slice(0,fieldType))
        array.splice(0,fieldType);
    }
    return newArray;
}

export default cellNumbers