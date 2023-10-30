const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insetrionSort(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // move to 1st place
            array.unshift(array.splice(i,1)[0]); // [0] is just to pick this number from new array
        } else {
            // find where the number should be
            for (let j = 0; j < length; j++) {
                if (array[i] > array[j-1] && array[i] < array[j]) {
                    // move number to the right spot
                    array.splice(j, 0, array.splice(i,1)[0]);
                }
            }
        }
    }
}

const insertionSortTwo = (array) => {
    for (let i = 0; i < array.length; i++) {
        let j = i + 1;
        while (array[j] < array[j - 1]) {
            const temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
            j--;
        }
    }
    return array;
};

insetrionSort(numbers);
console.log(numbers);