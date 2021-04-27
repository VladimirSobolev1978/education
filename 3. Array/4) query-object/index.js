function queryToObject(query) {
  // Напиши свой код здесь
    const paramsArr = query.replace('?', "").split('&');
    const result = {}
    for(let j = 0; j < paramsArr.length; j++) {
        const params = paramsArr[j].split('=');
        if(!Number.isNaN(Number(params[1]))) {
            params[1] = Number(params[1])
        }
        if(params[1] === 'true' || params[1] === 'false') {
            params[1] = params[1] === 'true';
        }
        result[params[0]] = params[1];
    }
    return result;

};

window.queryToObject = queryToObject;

export default queryToObject;
