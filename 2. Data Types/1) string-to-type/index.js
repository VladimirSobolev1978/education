function stringToType(str) {
  // Напиши свой код здесь
    let num;
    if (str === "null"){
        return null;
    }
    if (str === "undefined") {
        return undefined;
    }
    if (str === "true") {
        return true;
    }
    if (str === "false") {
        return false;
    }
    if (str !== "") {
        num = Number(str);
    }
    if (num || num === 0) {
        return (num);
    }
    return str;
};

window.stringToType = stringToType;

export default stringToType;
