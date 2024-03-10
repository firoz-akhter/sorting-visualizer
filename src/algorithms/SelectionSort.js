
export default function getSelectionSortAnimation(array) {
    let animation  = [];
    let copyArray = array.slice();
    selectionSort(copyArray, animation);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    let value = arraysAreEqual(copyArray, javaScriptSortedArray);
    console.log("Array is sorted now...", value);
    
    return [copyArray, animation];
}

function selectionSort(array, animation) {
    const N = array.length;
    for (let i = 0; i < N - 1; i++) {
        let minIndex = i; //Finding minimum element in unsorted array
        for (let j = i + 1; j < N; j++) {
            animation.push(["comparison1", j, i]);
            animation.push(["comparison2", j, i]);
            if (auxillaryArray[j] < auxillaryArray[minIndex]) {
                minIndex = j;
            }
        }
        animation.push(["swap", minIndex, array[i]]);
        animation.push(["swap", i, array[minIndex]]);
        // Swap the found minimum element with the first element
        swap(array, minIndex, i);
    }
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