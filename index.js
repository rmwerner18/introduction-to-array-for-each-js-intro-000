// Add your doToElementsInArray() function here:
function doToElementsInAnArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array.prototype.forEach(doToElementsInAnArray)
}
