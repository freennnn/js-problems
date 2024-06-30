let a = {
  firstName: "Ivan",
  lastName: "Petrov",
  sayFirstName() {
    if (this) {
      console.log(this.firstName);
    } else {
      console.log(this)
    }
  },
  sayLastName: () => {
    if (this) {
      console.log(this.lastName)
    } else {
      console.log(this)
    }
  }
}

a.sayFirstName() // Ivan
a.sayLastName() // undefined, cause => function looks up this value in object literal,
// which is undefined in global context
let funcSayFirstName = a.sayFirstName
let funcSayLastName = a.sayLastName
funcSayFirstName() // undefined - global context
funcSayLastName() // undefined - global context
a.sayFirstName.bind({firstName: "Alex"})() // Alex
a.sayLastName.bind({lastName: "Pranevich"})() // undefined, => cant be bound, lack of this
a.sayFirstName() // Ivan
a.sayFirstName.bind({firstName: "Alex"}).bind({fistName:"Tokoyama"})() // Alex - can't be only bind once