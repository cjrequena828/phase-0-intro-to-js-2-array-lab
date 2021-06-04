
let cats = ['Milo', 'Otis', 'Garfield'];
console.log(cats);

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name) {
      cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift() 
}

function prependCat(name) {
    return [name, ...cats]
}

function appendCat(name) {
    return [...cats, name]

}

function removeLastCat(){
       return cats.slice (0, cats.length-1)
}

function removeFirstCat(){
    //const newArray = cats.slice (0)
    //return newArray;
    //return cats.slice(0, cats.length ,0 )
    return cats.slice(1);
}





