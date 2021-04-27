function findPair(arr) {
  // Напиши свой код здесь
    for (let i = 0; i < arr.length; i++) {
        let arg = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] === arg) {
                return arg;
            }
        }
    }
    return null;
};

window.findPair = findPair;

export default findPair;
