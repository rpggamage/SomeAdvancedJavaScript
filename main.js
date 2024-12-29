////////next topic is generators//////////
function nomalFunction() {
    console.log("Hello");
    console.log("world");
    console.log("!");
}
nomalFunction();
nomalFunction();

function* generatorFunction() {
    console.log("Hello");
    console.log("world");
    console.log("!");
}
generatorFunction();
generatorFunction();
console.log("----------------But--------------------");
const generatorObject = generatorFunction();// this object is a iterator

for (const word of generatorObject) {
    console.log(word);
}