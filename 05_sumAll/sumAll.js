const sumAll = function(x, z) {
 let biggerVal = Math.max (x, z);
 let smallerVal = Math.min (x, z);
 let finalSum = 0;
 if ((typeof x ==="string") || (typeof z === "string")) {
    return "ERROR";
 } else if ((typeof x === "object") || (typeof z === "object")) {
    return "ERROR";
 } else if ((biggerVal >= 0) && (smallerVal >= 0)) {
    for (let i = smallerVal; i <= biggerVal; i++) {
    finalSum = finalSum + i;
    }     
 } else {
    return "ERROR";
 };
 return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
 