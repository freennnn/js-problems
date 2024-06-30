const handleAsyncFirst = async () => {
  console.log("2")

  // requestIdleCallback(() => {
  //   console.log("2")
  // }, { timeout: 1 }
  //)
  setTimeout(() => console.log("14"), 100)

  const handleAsyncSecond = async () => {
    console.log("4")
    setTimeout(() => console.log("12"))
  
    const promiseValue = new Promise(resolve => {
      console.log("5")
      Promise.resolve().then(() => console.log("9"))
      setTimeout(() => console.log("13"))
      resolve("resolve or will be suspended forever")
    })

    await promiseValue;
    console.log(await promiseValue) // 18 is expected

    console.log("10")
  }
  console.log("3")
  await handleAsyncSecond()
  console.log("11")

}
let p = Promise.resolve((() => {
          console.log("1")
          return 5
    })())
p.then(() => console.log("7"))
Promise.resolve().then(() => console.log("8"))
handleAsyncFirst()
console.log("6")
 // 14 1 4 13 6 12 15 11 7 9 10 5 8 3


