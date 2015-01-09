function increment(elemID) {
  var count = parseInt(document.getElementById(elemID).innerHTML) + 1;
  document.getElementById(elemID).innerHTML = "" + count;
}
