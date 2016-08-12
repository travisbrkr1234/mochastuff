exports.sanitize = function(word) {
  // console.log('running test');
  return word.toLowerCase().replace(/-/g, ' ');
}
