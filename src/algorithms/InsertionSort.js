export default function getInsertionSortAnimations(array) {
    let animation  = [];
    let copyArray = array.slice();
    insertionSort(copyArray, animation);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    let value = arraysAreEqual(copyArray, javaScriptSortedArray);
    console.log("insertion sorting works correctly-->", value);
    
    return [copyArray, animation];
}

function insertionSort(array, animation) {
    const N = array.length;
    for (let i = 1; i < N; i++) {
        let key = array[i];
        let j = i - 1;
        animation.push(["comparison1", j, i]);
        animation.push(["comparison2", j, i]);
        while(j >= 0 && array[j] > key) {
            animation.push(["revert", j + 1, array[j]]); // revert == overwrite
            array[j + 1] = array[j];
            j = j - 1;
            if(j >= 0) {
                animation.push(["comparison1", j, i]);
                animation.push(["comparison2", j, i]);
            }     
        }
        animation.push(["revert", j + 1, key]); // revert == overwrite
        array[j + 1] = key;
    }
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
}