// Not from course, just wanted to count if you make one more action a day - how much will it be in one year.

function prisiad() {
    let action = 0,
        sum = 0;

    while (action <= 364) {
        action++;
        sum = sum + action;
        console.log(action, sum);
    }

    // console.log(sum);
}

prisiad()