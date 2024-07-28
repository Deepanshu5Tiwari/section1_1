const user = {
    name : 'Raju',
    email : 'raju@mail.com',
    password : 'abc123'
};

console.log( user.email );

console.log( user['name'] );



user.email = 'raju007@mail.com';

console.log(user); 
user.address = 'Aashiyana';

console.log(user);

console.log( Object.keys(user) );
console.log( Object.values(user));
console.log( Object.entries(user));

const brand = 'Samsung';
const model = 'S24';
const price = 105000;
const colors = ['red', 'black', 'white'];

const smartphone = { brand, model, price, colors };
console.log(smartphone);

const {address} = user;
console.log(address);


console.log(smartphone.price);

console.log(smartphone.colors[1]);

smartphone.colors.push('blue');
console.log(smartphone.colors);

smartphone.colors[2] = 'moonwhite'
console.log(smartphone.colors);


const smartphonesList = [
    {
             brand : 'Samsung',
             model : 'S24',
             price : 105000,
             colors : ['red', 'black', 'white']
    },
    {
             brand : 'Oneplus',
             model : '12',
             price : 44999,
             colors : ['green', 'gray']
    },
    {
             brand : 'Apple',
             model : 'Iphone 15',
             price : 125000,
             colors : [ 'black', 'white']
    },
    {
             brand : 'Google',
             model : 'Pixel 8',
             price : 56000,
             colors : ['red', 'blue', 'white']
    },
    {
             brand : 'Motorola',
             model : 'G8',
             price : 14999,
             colors : ['blue', 'green']
    },
    
];
 
console.log(smartphonesList[2].price);

console.log(smartphonesList[3].colors.at(-1));

const myphones = smartphonesList.filter ((phone) => {return phone.price<= 50000});
console.log(myphones);

const query = 'samsung';


// const mysam = smartphonesList.filter((sams) => {return sams.brand.toLowerCase === query.toLowerCase })

const mysam = smartphonesList.filter((sams) => {return sams.brand.toLowerCase().includes(query.toLowerCase()) })
console.log(mysam);

//filter all phones with white color

const whycolor = smartphonesList.filter((colouu ) => {return colouu.colors.includes('white')})
console.log(whycolor);











