export  default function getQuickSortAnimations(array) {
    let animation  = [];
    let copyArray = array.slice();
    quickSort(copyArray, animation, 0, copyArray.length - 1,);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(copyArray, javaScriptSortedArray));

    return [copyArray, animation];
}

function quickSort(array, animation, startIndex, endIndex) {
    let pivotIndex;
    if (startIndex < endIndex) {
        pivotIndex = partitionArray(array, animation, startIndex, endIndex);
        quickSort(array, animation, startIndex, pivotIndex - 1);
        quickSort(array, animation, pivotIndex + 1, endIndex);
    }
}

function partitionArray(array, animation, startIndex, endIndex) {
    let pivot= array[endIndex];
    let i=startIndex-1;
    for(let j = startIndex; j < endIndex; ++j) {
        animation.push(["comparison1", j, endIndex]);
        animation.push(["comparison2", j, endIndex]);
        if(array[j] <= pivot) {
            animation.push(["comparison1", j, i+1]);
            animation.push(["revert", j, array[i+1]]);
            animation.push(["revert", i+1, array[j]]);
            animation.push(["comparison2", j, i+1]);
            i++;
            swap(array, j, i);
        }
    }
    animation.push(["comparison1", i+1, endIndex]);
    animation.push(["revert", endIndex, array[i+1]]);
    animation.push(["revert", i+1, array[endIndex]]);
    animation.push(["comparison2", i+1, endIndex]);
    
    swap(array, i+1, endIndex);
    return i+1;
}

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
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