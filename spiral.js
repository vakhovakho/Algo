// let matrix = [
//     [ , X,  , X,  , X,  , X],    
//     [ , X,  , X,  , X,  , X],  
//     [ , X,  , X,  , X,  , X],  
//     [ , X,  , X,  , X,  , X],  
//     [ , X,  , X,  , X,  , X],  
//     [ , X,  , X,  , X,  , X],  
//     [ , X,  , X,  , X,  , X],  
//     [ , X,  , X,  , X,  , X],  
//     [ , X,  , X,  , X,  , X],    
// ];


// let matrix = [
//     [X, X, X, X, X, X, X, X],    
//     [ ,  ,  ,  ,  ,  ,  , X],  
//     [ , X, X, X, X, X,  , X],  
//     [ , X,  ,  ,  , X,  , X],  
//     [ , X,  , X,  , X,  , X],  
//     [ , X,  , X, X, X,  , X],  
//     [ , X,  ,  ,  ,  ,  , X],  
//     [ , X, X, X, X, X, X, X],    
// ];

// to right >> 0,0 || 2, 2  < n/2 
// to bottom >> 1, 8 || 3, 6
// to left >> 8, 7 || 6, 5
// to top >> 7, 1 || 5, 3

// let matrix = [
//     [X, X, X, X, X, X, X, X, X],    
//     [ ,  ,  ,  ,  ,  ,  ,  , X],  
//     [ , X, X, X, X, X, X,  , X],  
//     [ , X,  ,  ,  ,  , X,  , X],  
//     [ , X,  , X, X,  , X,  , X],  
//     [ , X,  , X,  ,  , X,  , X],  
//     [ , X,  , X, X, X, X,  , X],  
//     [ , X,  ,  ,  ,  ,  ,  , X],  
//     [ , X, X, X, X, X, X, X, X],    
// ];

// to right >> 0,0 || 2, 2 || 4, 4 (i < n/2)
// to bottom >> 1, 8 || 3, 6  (j > n /2)
// to left >> 8, 7 || 6, 5 (i > n/2)
// to top >> 7, 1 || 5, 3 (j < n/2)

let n = 10;
let a = [];
let symbol = "*";
for(let i = 0; i < n; i++) {
    a.push(new Array(n).fill(" "));
}

function toRight(a){
    let k = 0;
    for(let i = 0; i < a.length/2; i+=2){
        for(let j = k; j < a.length - k; j++){
            a[i][j] = symbol;
        }
        k += 2;
    }
}

function toBottom(a){
    let k = 0;
    for(let j = a.length - 1; j > a.length / 2; j = j - 2){
        for(let i = 1 + k; i < a.length - k; i++){
            a[i][j] = symbol;
        }
        k += 2;
    }
}

function toLeft(a){
    let k = 0;
    for(let i = a.length - 1; i > a.length/2; i= i - 2){
        for(let j = a.length - 1 - k; j > k; j--){
            a[i][j] = symbol;
        }
        k += 2;
    }
}

function toTop(a){
    let k = 0;
    for(let j = 1; j < a.length/2; j = j + 2){
        for(let i = a.length - 2 - k; i >= k + 2; i--){
            a[i][j] = symbol;
        }
        k += 2;
    }
}

function print(a){
    a.forEach(ar => {
        console.log(ar.join(" "))
    });
}

toRight(a);
toBottom(a);
toLeft(a);
toTop(a);

print(a);



