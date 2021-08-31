const cats =['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    console.log("Name:",  name);
cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    console.log("Name:", name);
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(name) {
   cats.pop(name)
}

function destructivelyRemoveFirstCat() {
cats.shift('Milo')
}
function appendCat(name) {
  return [...cats, name];
}

function prependCat(name)  {
    return [ name, ...cats,];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function  removeFirstCat() {
    return cats.slice(1)
}