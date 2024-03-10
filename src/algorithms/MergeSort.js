export default function getMergeSortAnimation(array) {
    let animation = [];
    let copyArray = array.slice();
    mergeSort(copyArray, animation, 0, array.length-1);

    // check sortedArray is sorted or not
    let javaScriptSortedArray = array.slice().sort((a, b) => {return a-b})
    let flag = arraysAreEqual(copyArray, javaScriptSortedArray);
    console.log("array have been sorted successfully -->", flag);
    

    return [copyArray, animation];
}


function mergeSort(array, animation, s, e) {
    if(s === e) // base case
        return;
    const middleIndex = Math.floor((s + e)/2);
    mergeSort(array, animation, s, middleIndex);
    mergeSort(array, animation, middleIndex+1, e);
    merge(array, animation, s, middleIndex, e);
}


function merge(array, animation, startIndex, middleIndex, endIndex) {
    let sortArray = [];
    let i = startIndex;
    let j = middleIndex + 1;
    while(i <= middleIndex && j <= endIndex) {
        //Comparing value at ith and jth index so push them to change their color
        animation.push(["comparison1", i, j]);
        //By changing color we imply that we are comparing those two values and then again we should revert back to their original color so push them again
        animation.push(["comparison2", i, j]);
        if(array[i] <= array[j]) {
            sortArray.push(array[i++]);
        }
        else {
            sortArray.push(array[j++]);
        }
    }
    while(i <= middleIndex) {
        animation.push(["comparison1", i, i]);
        animation.push(["comparison2", i, i]);
        sortArray.push(array[i++]);
    }
    while(j <= endIndex) {
        animation.push(["comparison1", j, j]);
        animation.push(["comparison2", j, j]);
        sortArray.push(array[j++]);
    }
    for (let i = startIndex; i <= endIndex; i++) {
        animation.push(["comparison1", i, i - startIndex]);
        animation.push(["overwrite", i, sortArray[i - startIndex]]);
        animation.push(["comparison2", i, i - startIndex]);
        array[i] = sortArray[i - startIndex];
    }
}



function arraysAreEqual(sortedArray, array) {
    if(array.length !== sortedArray.length) {
        return false;
    }
    const size = array.length;
    for(let i=0; i<size; i++) {
        if(array[i] !== sortedArray[i]) {
            // console.log("sorted array is not sorted")
            return false;
        }
    }
    // console.log("arrays are equal...")
    return true;
}