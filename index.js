const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  return [...kittens, name];
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function prependKitten(name){
  newArr = [name, ...kittens];
  return newArr;
}

function removeLastKitten(){
  newArr = kittens.slice(0,kittens.length-1);
  return kittens;
}

function removeFirstKitten(){
 newArr = kittens.slice(1,kittens.length);
}

