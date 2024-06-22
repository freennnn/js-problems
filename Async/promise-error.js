  new Promise((resolve, reject) => {
    //throw new Error('even this one will be catched!')
    // or this one
    reject(new Error('rejected, but not broken - keep your head up!'))
  })
  .then((value) => {
     console.log(value)
     //throw new Error("p2 throws")
    })
  .then((value) => {
    console.log(`This logic will be skipped ${value}`)
    return 10
  })
  .then(value => console.log(value))
  .catch((err) => {
    console.log(err.message)
    return 15
  })
  .then(value => console.log(`Expecting to recover with 15 === ${value}`))
