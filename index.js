const linkedList = (arg1, arg2) => {
  const sayHello = () => console.log("hello!");
  return { arg1, arg2, sayHello };
};

const iep = linkedList("jeff", 27);

console.log(iep.arg1); // 'jeff'

iep.sayHello(); // calls the function and logs 'hello!'
