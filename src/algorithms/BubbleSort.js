

export default function getBubbleSortAnimation(array) {
    
    let animation = [];
    let copyArray = array.slice();
    bubbleSort(copyArray, animation);

    // check sortedArray is sorted or not
    let javaScriptSortedArray = array.slice().sort((a, b) => {return a-b})
    let flag = arraysAreEqual(copyArray, javaScriptSortedArray);
    console.log("array have been sorted successfully -->", flag);
    

    return [copyArray, animation];
}


function bubbleSort(arr, animation) {
    
    let size = arr.length;

    while (size > 1) {
        let swapped = false;
        for (let i = 0; i < size - 1; i++) {
            // push i, i+1 in animation for color changes
            animation.push(["comparison1", i, i+1]); // for color change
            // push again to revert color back
            animation.push(["comparison2", i, i+1]); // for color change back to normal

            if (arr[i] > arr[i + 1]) {
                // this is the recording of revert height;
                animation.push(["revert", i, arr[i+1]]);
                animation.push(["revert", i+1, arr[i]]);
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        if (swapped === false) break;
        size--;
    }
    // return [arr, animation];
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