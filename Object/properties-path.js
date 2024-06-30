const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f'
  }
}

function get(obj, path) {
  let paths = path.split(".")
  if (paths.length > 1) {
    let propName = paths.shift();
    if (!obj[propName]) {
      return undefined
    } else {
      return get(obj[propName], paths.join('.'))
    }
  } else {
    return obj[paths[0]]
  }
}

console.log(get(obj, 'a.b'))
console.log(get(obj, 'a.b.x'))