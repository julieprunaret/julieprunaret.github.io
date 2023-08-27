let array = [451, 2, 65, 7, 98, 2, 1];
// const bubbleSortInsert = document.getElementById("bubbleSort");
// const arrayStart = document.getElementById("arrayStart");
// const arrayEnd = document.getElementById("arrayEnd");

// bubbleSortInsert.innerHTML = "";
// arrayEnd.innerHTML = "";

// arrayStart.innerHTML = `<div class="spanContainer arrayStart"><span>${array.join('</span><span>')}</span></div>`;


// const bubbleSort = () => {
//         for (let i = 0; i < array.length - 1; i++) {
//             for (let j = 0; j< array.length - 1 -i; j++) {
//                 if (array[j] > array[j+1]) {
//                         // method 1
//                         // let temp = array[j];
//                         // array[j] = array[j+1];
//                         // array[j+1] = temp;
//                         //method2
//                         [array[j], array[j+1]] = [array[j+1], array[j]];
//                         bubbleSortInsert.innerHTML += `<div class="spanContainer"><span>${array.join('</span><span>')}</span></div>`;
//                 }
//         }
//     }
//     arrayEnd.innerHTML += `<div class="spanContainer arrayEnd"><span>${array.join('</span><span>')}</span></div>`;
// }

// const selectionSort = () => {
//     for (let i = 0; i < array.length - 1; i++) {
//         let minIndex = i;
//             for (let j = i + 1; j < array.length; j++) {
//                 if (array[j] < array[minIndex]) {
//                     minIndex = j;
//                     bubbleSortInsert.innerHTML += `<div class="spanContainer"><span>${array.join('</span><span>')}</span></div>`;
//                 }
//                 [array[i], array[minIndex]] = [array[minIndex],array[i]]; 
//         }
//     }
//     arrayEnd.innerHTML += `<div class="spanContainer arrayEnd"><span>${array.join('</span><span>')}</span></div>`;
// }

// bubbleButton.addEventListener("click", () => {
//     bubbleSortInsert.innerHTML = ``;
//     arrayEnd.innerHTML = ``;
//     bubbleSort(array);
//     bubbleButton.remove();
// })
// selectionButton.addEventListener("click", () => {
//     bubbleSortInsert.innerHTML = ``;
//     arrayEnd.innerHTML = ``;
//     selectionSort(array);
//     selectionButton.remove();
// })



for ( let i = 0; i< array.length; i++) {
    minNumber = i;
    for (let j = i+1; j<array.length; j++) {
        if (array[j]<array[minNumber]){
            console.log(array[j] + " < " + array[minNumber]);
            minNumber = j;
            console.log(array);
        };
        [array[i], array[minNumber]] = [array[minNumber], array[i]];
        
    }
    
}