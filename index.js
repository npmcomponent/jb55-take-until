
module.exports = function takeUntil(xs, pred) {
  var res = [];
  for (var i = 0; i < xs.length; ++i) {
    var x = xs[i];
    if (!pred(x))
      res.push(x);
    else
      break;
  }
  return res;
};
