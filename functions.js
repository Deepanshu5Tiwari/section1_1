function addNums(a, b){
    var c = a+ b;
    console.log(c);
}

addNums(3, 5);



const getAvg = function(m1, m2, m3){
    const avg = (m1+m2+m3)/3;

    // console.log(avg);
    return avg;
}

let result = getAvg(78, 89, 90);

console.log(result);



const factorial = (n) => {

    let f = 1;

    for(let i = 1; i<= n; i++){
        f = f* i;

    }
    return f;
}


let ans = factorial(6);
console.log(ans);

//WAP to find sum of all numbers in a given range

const sum = (a,b) => {
    let s=0
    

    for(let i = a; i<=b; i++){
        s= s+ i;
    }
    return s;
}

let prg = sum(1,5);
console.log(prg);





