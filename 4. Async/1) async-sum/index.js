function asyncSum(a, b) {
  // Напиши свой код здесь
    let promise = new Promise(function(resolve, reject) {
       if (typeof a === "number" && typeof b === "number") {
           setTimeout(() => resolve(a + b), 1000);
       } else {
           reject(new Error("Не является числом!"));
       }
    });

    promise.then(
        result => result,
        error => error
    );
    return promise;
}

window.asyncSum = asyncSum;

export default asyncSum;
