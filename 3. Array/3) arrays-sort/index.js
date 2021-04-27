function arraysSort(arr) {
  // Напиши свой код здесь
    return([...arr].sort((a, b) => (Math.max(...a) - (Math.max(...b) ))))
};

window.arraysSort = arraysSort;

export default arraysSort;
