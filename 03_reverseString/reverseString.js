const reverseString = function(string) {
    const splitString = string.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
};

reverseString("")

// Do not edit below this line
module.exports = reverseString;
