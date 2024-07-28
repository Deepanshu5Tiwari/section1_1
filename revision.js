function addNumsv1(a, b){

    return [ a+b, a*b ]
}

const res = addNumsv1(345, 4356);

console.log(res);

const [sum, prod] = res;

console.log(sum);

console.log(prod);


const addNumsv2 = function (a, b ) {
    return a+b;

    
}

const res2 = addNumsv2(345, 723);

console.log(res2);

const addNumsv3 = (a,b) => {

    return a+b;
}

const res3 = addNumsv3(345, 923);
console.log(res3);

