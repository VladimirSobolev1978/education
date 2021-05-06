function xhrGet(url) {
    // Напиши свой код здесь
    let promise = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
            if (xhr.status === 201) {
                resolve(xhr.response);
            }
            if (xhr.status === 400) {
                reject({message: "client error"});
            }
            if (xhr.status === 500) {
                reject({message: "server error"});
            }
        };
        xhr.send();
    });

    return promise;
}

window.xhrGet = xhrGet;

export default xhrGet;
