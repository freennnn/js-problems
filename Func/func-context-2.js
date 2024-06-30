function getThis() { return this}
let obj1 = { name: "obj1", getThis: getThis }
let obj2 = { name : "obj2"}
obj2.getThis = obj1.getThis
console.log(getThis()) // undefined
console.log(obj1.getThis()) // { name: obj1 }
console.log(obj2.getThis()); // { name: obj2 }
let obj3 = {
  name: "obj3"
}
Object.setPrototypeOf(obj3, obj1); // aka __proto__: obj1
console.log(obj3.getThis()) // {name: obj3}
console.log(getThis.call(obj1, 'param1', 'param2')); // { name: obj1 }
console.log(getThis.apply(obj1, ['param1', 'param2'])); // { name: obj1 }

