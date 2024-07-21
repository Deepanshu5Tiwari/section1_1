n=9
sqrt= Math.sqrt(n)

if(sqrt*sqrt === n){
     console.log('perfect square')

}else{
    console.log('not a perfect square')
}


a=3;
b=6;
c=10;

if(a>b && a>c){
    console.log(a)
}else if(b>c && b>a){
    console.log(b)
}
else{
    console.log(c)
}



let n1=0 , n2=1 , nextTerm;

console.log('fibonacci series')

for(let i = 1 ; i<=10 ; i++){
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}