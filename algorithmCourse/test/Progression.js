function prisiad() {
    let action = 0,
        sum = 0;

    while (action <= 364) {
        action++;
        sum = sum + action;
        console.log(action, sum);
    }

    console.log(sum);
}

prisiad()