import { useState } from "react";
import "./SortingVisualizer.css";
import { useEffect } from "react";
import getBubbleSortAnimation from "../algorithms/BubbleSort";
import getMergeSortAnimation from "../algorithms/MergeSort";
import getQuickSortAnimation from "../algorithms/QuickSort";
import getInsertionSortAnimation from "../algorithms/InsertionSort";

const primaryColor = "#add8e6";
const secondaryColor = "#194053";



function SortingVisualizer() {

    const [array, setArray] = useState([]);

    useEffect(() => {
        generateArray();
    }, []);

    function generateArray() {
        let arr = [];
        let min = 30;
        let max = 500;
        for(let i=0; i<40; i++) {
            let randomNum = Math.floor(Math.random()*(max-min) + min);
            arr.push(randomNum);
        }
        setArray(arr);
    }

    function bubbleSort() {
        // console.log("bubble sorting array...");
        const [sortedArray, animation] = getBubbleSortAnimation(array);
        // console.log("animation", animation);
        // console.log("sorted array", sortedArray);
        
        // play with animation. Sort original array
        // change color && swap heights

        for(let i=0; i<animation.length; i++) {
            let isColorChange = animation[i][0] === "comparison1" || animation[i][0]=== "comparison2";

            let bars = document.querySelectorAll(".bar");

            if(isColorChange) {
                const [comparison, barOneIndex, barTwoIndex] = animation[i];
                const color = animation[i][0] === "comparison1"?  secondaryColor: primaryColor;
                // const color = "yellow";

                setTimeout(() => {
                    // console.log("inside set time out...")
                    bars[barOneIndex].style.backgroundColor = color;
                    bars[barTwoIndex].style.backgroundColor = color;
                }, 30*i);

            }
            else {
                // revert heights
                const [revert, barIndex, newHeight] = animation[i];
                setTimeout(() => {
                    bars[barIndex].style.height = `${newHeight}px`;
                }, 30*i);
            }

        }

    }

    function mergeSort() {
        
        const [sortedArray, animation] = getMergeSortAnimation(array);
        // console.log("sorted array...", sortedArray);
        // console.log("animation", animation);
        // animation pe loop kr do
        // fir color change kro comparison pe
        // height new kr do revert pe

        for(let i=0; i<animation.length; i++) {
            let isColorChange = animation[i][0] === "comparison1" || animation[i][0]=== "comparison2";

            let bars = document.querySelectorAll(".bar");

            if(isColorChange) {
                const [comparison, barOneIndex, barTwoIndex] = animation[i];
                const color = animation[i][0] === "comparison1"? secondaryColor: primaryColor;
                // const color = "yellow";

                setTimeout(() => {
                    // console.log("inside set time out...")
                    bars[barOneIndex].style.backgroundColor = color;
                    bars[barTwoIndex].style.backgroundColor = color;
                }, 30*i);

            }
            else {
                // // revert heights
                const [overwrite, barIndex, newHeight] = animation[i];
                setTimeout(() => {
                    bars[barIndex].style.height = `${newHeight}px`;
                }, 30*i);
            }

        }


    }

    function quickSort() {
        console.log("quick sort sorting the array...");

        const [sortedArray, animation] = getQuickSortAnimation(array);
        // console.log("sorted array...", sortedArray);
        // console.log("animation", animation);
        // animation pe loop kr do
        // fir color change kro comparison pe
        // height new kr do revert pe

        for(let i=0; i<animation.length; i++) {
            let isColorChange = animation[i][0] === "comparison1" || animation[i][0]=== "comparison2";

            let bars = document.querySelectorAll(".bar");

            if(isColorChange) {
                const [comparison, barOneIndex, barTwoIndex] = animation[i];
                const color = animation[i][0] === "comparison1"? secondaryColor: primaryColor;
                // const color = "yellow";

                setTimeout(() => {
                    // console.log("inside set time out...")
                    bars[barOneIndex].style.backgroundColor = color;
                    bars[barTwoIndex].style.backgroundColor = color;
                }, 30*i);

            }
            else {
                // // revert heights
                const [overwrite, barIndex, newHeight] = animation[i];
                setTimeout(() => {
                    bars[barIndex].style.height = `${newHeight}px`;
                }, 30*i);
            }

        }


    }


    function selectionSort() {
        
        const [sortedArray, animation] = getQuickSortAnimation(array);
        // console.log("sorted array...", sortedArray);
        // console.log("animation", animation);
        // animation pe loop kr do
        // fir color change kro comparison pe
        // height new kr do revert pe

        for(let i=0; i<animation.length; i++) {
            let isColorChange = animation[i][0] === "comparison1" || animation[i][0]=== "comparison2";

            let bars = document.querySelectorAll(".bar");

            if(isColorChange) {
                const [comparison, barOneIndex, barTwoIndex] = animation[i];
                const color = animation[i][0] === "comparison1"? secondaryColor: primaryColor;
                // const color = "yellow";

                setTimeout(() => {
                    // console.log("inside set time out...")
                    bars[barOneIndex].style.backgroundColor = color;
                    bars[barTwoIndex].style.backgroundColor = color;
                }, 30*i);

            }
            else {
                // // revert heights
                const [overwrite, barIndex, newHeight] = animation[i];
                setTimeout(() => {
                    bars[barIndex].style.height = `${newHeight}px`;
                }, 30*i);
            }

        }

    }


    function insertionSort() {
        
        const [sortedArray, animation] = getInsertionSortAnimation(array);
        // console.log("sorted array...", sortedArray);
        // console.log("animation", animation);
        // animation pe loop kr do
        // fir color change kro comparison pe
        // height new kr do revert pe

        for(let i=0; i<animation.length; i++) {
            let isColorChange = animation[i][0] === "comparison1" || animation[i][0]=== "comparison2";

            let bars = document.querySelectorAll(".bar");

            if(isColorChange) {
                const [comparison, barOneIndex, barTwoIndex] = animation[i];
                const color = animation[i][0] === "comparison1"? secondaryColor: primaryColor;
                // const color = "yellow";

                setTimeout(() => {
                    // console.log("inside set time out...")
                    bars[barOneIndex].style.backgroundColor = color;
                    bars[barTwoIndex].style.backgroundColor = color;
                }, 30*i);

            }
            else {
                // revert heights
                const [overwrite, barIndex, newHeight] = animation[i];
                setTimeout(() => {
                    bars[barIndex].style.height = `${newHeight}px`;
                }, 30*i);
            }

        }

    }




    return (
        <div className="container">
            {/* heading sorting visualizer */}
            <div className="heading">Sorting Visualizer</div>
            <div className="bars">
                {/* iterate over array and push bars */}
                {/* state variable me koi bhi changes honge to ui update hogi
                apne app */}

                {
                    array.map((element, index) => {
                        return <div key={index} className="bar" style={{height: `${element}px`}}></div>
                    })
                }
                

            </div>
            <div className="btns-div">
                <button className="btn generateArrayBtn" onClick={generateArray}>Generate Array</button>
                <button className="btn" onClick={bubbleSort}>Bubble Sort</button>
                <button className="btn" onClick={mergeSort}>Merge Sort</button>
                <button className="btn" onClick={quickSort}>Quick Sort</button>
                <button className="btn" onClick={selectionSort}>Selection Sort</button>
                <button className="btn" onClick={insertionSort}>Insertion Sort</button>
            </div>
        </div>
    )
}

export default SortingVisualizer;