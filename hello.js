const sayHelloToConsole = function(name) {
  console.log(`Hello, ${name}`);
}

sayHelloToConsole("Garfield");
sayHelloToConsole("Odie");
sayHelloToConsole("Nermal");

const returnSayHello = function(name) {
  return `Hello, ${name}`;
}

const greeting = returnSayHello("Jon");
console.log(greeting);