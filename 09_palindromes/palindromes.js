let string = ('A car, a man, a maraca.');
const palindromes = function(string) {
    const newString = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    const reversed = newString.split("").reverse().join("");
    if (reversed === newString) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
