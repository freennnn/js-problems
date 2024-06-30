
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
      for (let i=0; i < promises.length; i++) {
        promises[i]
        .then((result) => {
          //console.log(`intermediate promise result ${result}`)
          results[i] = result;
          if (results.length === promises.length) {
            resolve(results)
          }
        })
        .catch(err =>  {
          console.log(`promiseAll caught an error = ${err.message}`)
          reject(err)
        })
      }
    })
}

function wait(delay) {
  return new Promise((resolve, reject) => {
    if (delay > 0) {
      setTimeout(resolve, delay, delay)
    } else {
      reject(new Error('back to future not yet implemented'))
    }
  })
}

function delayError(delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => { reject(new Error(`Error after timeout ${delay}`)) }, delay)
	})
}

async function p1() {
  let waitedFor = await wait(1000);
  console.log(`p1 done after ${waitedFor/1000}s`)
  return 1
}


async function p2() {
  await wait(2000);
  console.log('p1 done after 2s')
  return 2
}

async function p3() {
  //  different syntax, for fun
  return wait(3000).then(() =>  {
    console.log('p1 done after 3s')
    return 3
  })
}

async function p4() {
  // return delayError(2500)//.catch(err => console.log(err))
  return 'continue'
}

async function p5() {
  return delayError(3500)/*.catch(err => {
    console.log(err.message)
    return 'p5'
  })*/
}

try {
  //p4().catch(err => console.log(`we gotch an error with ${err.message}`))
  //let results = await Promise.all([p1(), p2(), p3(), p4(), p5()])
  //console.log(results);
  console.log(await promiseAll([p1(), p2(), p3(), p4(), p5()]))
} catch (err) {
  console.log(err.message)
  console.log('we should probably recover from here?')
}
