export const merge = (...objects) => {
  const merged = {}
  for (const obj of objects) {
    for (const key of Object.keys(obj)) {
      merged[key] = obj[key]
    }
  }
  return merged
}
export const mergeOptions = (options, defaults) => {
  if (options) {
    for (let key of Object.keys(defaults)) {
      if (options.hasOwnProperty(key)) {
        defaults[key] = options[key]
      }
    }
  }
  return defaults
}

export const findAll = (objects, search) => {
  const results = []
  for (let object of objects) {
    for (let key of Object.keys(search)) {
      if (object[key] === search[key]) {
        if (search[key] !== undefined) results.push(object)
      }
    }
  }
  return results
}

export const findFirst = (objects, search) => {
  for (let object of objects) {
    for (let key of Object.keys(search)) {
      if (object[key] === search[key]) {
        if (search[key] !== undefined) return object
      }
    }
  }
}

export const pluck = (objects, key) => {
  const results = []
  for (let object of objects) {
    if (object[key]) results.push(object[key])
  }
  return results
}

export const pluckKeys = (objects, keys) => {
  const results = []
  for (let object of objects) {
    const ob = {}
    for (let key of keys) {
      if (object[key]) ob[key] = object[key]
    }
    if (Object.keys(ob).length) results.push(ob)
  }
  return results
}
