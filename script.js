const arr1 = [1,3,2,6,-1];
const arr2 = [1,3];

const gptTest = (arr) => {

    let tNum = arr[0];
    let max = [];
    let min = [];
    arr.forEach((el, i) => {

        if (tNum < el) {
          tNum = el;
          max.push(el);      
        }    
    });
    arr.forEach((el, i) => {

        if (tNum > el) {
          tNum = el;
          min.push(el);      
        }    
    });

    return max, min
};

console.log(gptTest(arr1));
// console.log(gptTest(arr2));