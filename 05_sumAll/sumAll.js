const sumAll = function(start, end) {
    let sum = 0;

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    } else if (start < 0 || end < 0) {
        return 'ERROR';
    } else if (start > 1) {
        for (let i = 0; i <= start; i++) {
            sum += i;
        }
    } else {
        for (let i = 0; i <= end; i++) {
            sum += i;
        }
    }
    return sum;
};

sumAll(10, "90")

// Do not edit below this line
module.exports = sumAll;
