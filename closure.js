
function createIncrement() {

 let count = 0;   // local scope = 0

 function increment() {
  return count++;       // increment local scopre = 1
 }

 let message = `Count is ${count}`;  // it point to the local var count = 0

 function log() {
  console.log(message);  //it will point to outer message variable who value is already 0
 }

 return [increment, log];
}

const [increment, log] = createIncrement();

increment();

log(); // What is logged?