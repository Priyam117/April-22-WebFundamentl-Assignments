const arr = [1, -5, 2, 10, -30, 29, 50];
const sumPositives = (arr = []) => {
    const isPositive = num => typeof num === 'number' && num > 0;
    const res = arr.reduce((acc, val) => {
        if (isPositive(val)) {
            acc += val;
        };
        return acc;
    }, 0);
    return res;
};
console.log(sumPositives(arr));