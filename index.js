// Your code here

function mapToNegativize(array) {
    const output = array.slice();
    for (let i = 0; i < output.length; i++) {
        output[i] *= -1;
    };
    return output
}

function mapToNoChange(array) {
    const output = array.slice();
    return output;
}

function mapToDouble(array) {
    const output = array.slice();
    for (let i = 0; i < output.length; i++) {
        output[i] *= 2;
    };
    return output
}

function mapToSquare(array) {
    const output = array.slice();
    for (let i = 0; i < output.length; i++) {
        output[i] **= 2;
    };
    return output
}

// my own reduce-like methods
function reduceToTotal(array, start=0) {
    let output = start;
    for (let i = 0; i < array.length; i++) {
        output += array[i];
    };
    return output
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if(!array[i]) {
            return false;
        }
    };
    return true;
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if(!!array[i]) {
            return true;
        }
    };
    return false;
}

