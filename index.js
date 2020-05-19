// Add your doToElementsInArray() function here:
function doToElementsInAnArray(element, index, array) {
  array.prototype.forEach(console.log("hello"))
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array.forEach(doToElementsInAnArray)
}
