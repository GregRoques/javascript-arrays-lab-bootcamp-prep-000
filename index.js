var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
}
function appendKitten(name){
  const kittens = kittens.concat(name);
}

function prependKitten(name){
  kittens.slice()
}
