const capitalize = (input) => {
  if(typeof input !== "string") {
    return undefined;
  }
  return input.charAt(0).toUpperCase() + input.slice(1)
}

console.log(capitalize('hahaha'))

export default capitalize;