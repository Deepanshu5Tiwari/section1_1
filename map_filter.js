//wap to create a new array containing only perfect squares from aother array.

const nums = [1, 4, 16, 63, 36, 52, 18, 17, 81];
const perfect = [];

for( let i of nums){
    if(Number.isInteger(i ** 0.5)) {
        // console.log(i);
        perfect.push(i);
        
    }
}

console.log(perfect);

//

const prices = [100, 210, 280, 399, 550];
const discounted = [];

for(let p of prices){
    discounted.push(p * 0.9);

}
console.log(discounted);

//MAP

const discountedPrices = prices.map((p) => { return p * 0.9});
console.log(discountedPrices);


const perfectNums = nums.map((p) => { return p*p})
console.log(perfectNums); 

//filter 

const perfectSquare = nums.filter((n) => {return Number.isInteger(n ** 0.5)});

console.log(perfectSquare);

const prices2 = ['₹423.23', '₹123.452', '₹678.9', '₹999.9982'];

const prices2here = prices2.map((j) => {return parseInt(j.slice(1)) })

console.log(prices2here);

const names = ['ramu', 'shamu', 'pinki', 'kaliya'];


