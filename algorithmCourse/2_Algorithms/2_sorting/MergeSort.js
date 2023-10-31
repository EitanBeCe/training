const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
    if(array.length <= 1){
        return array;
    }

    // Split arr to left an right
    let mid = Math.floor(array.length/2);

    return merge(
        mergeSort (array.slice(0,mid)),
        mergeSort (array.slice(mid))
    )
}

function merge(left, right) {
    let mergeArr = [];
    let leftIndex = 0, rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]){
            // mergeArr.push(left[leftIndex++]); // same as 2 lines below
            mergeArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergeArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return mergeArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers); //0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283
console.log(answer);