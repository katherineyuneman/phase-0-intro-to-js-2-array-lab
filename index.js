let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}


let appendCat = function newCatsFunction(){
    let newCats = [...cats,"Broom"];
    return newCats;
} 
console.log("new cat array 1:", appendCat())



// test to adding to the appendCat fundtion to see if that works
// let prependCat = function newCatsFunction2(){
//     let newCats2 = ["Arnold",...appendCat()];
//     return newCats2;
// }
// console.log("new cat array 2:", prependCat());

let prependCat = function newCatsFunction2(){
    let newCats = ["Arnold",...cats];
    return newCats;
}
console.log("new cat array 3:", prependCat());

let removeLastCat = function LastCatFunction(){
    let newCats = [...cats];
    console.log("cats for removecats:", cats);
    console.log(newCats);
    newCats.pop();
    console.log(newCats);
    return newCats;
}
console.log(removeLastCat());


let removeFirstCat = function firstCatFunction(){
    let newCats = [...cats];
    newCats.shift();
    return newCats;
}
console.log(removeFirstCat());


