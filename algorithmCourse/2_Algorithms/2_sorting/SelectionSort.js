const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i,
            temp = array[i];

        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[min]) {
                // update min index
                min = j;
            }
        }

        array[i] = array[min];
        array[min] = temp;
    }
}

selectionSort(numbers);
// console.log(selectionSort(numbers));
console.log(numbers);