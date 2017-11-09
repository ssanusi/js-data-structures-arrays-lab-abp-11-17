// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);

}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  const newArr = [...drivers,name]
return newArr;

}
function prependDriver(name){
  return [name,...drivers];
}

function removeLastDriver(){
  return drivers.slice(0,drivers.length-2)
}
