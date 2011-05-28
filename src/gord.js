!function(context) {

  var params = [],
      output = "";

  function generateString(p) {
    for(var i = 0, c = params.length; i < c; i++) {
      for(var prop in params[i]) {
        output += "&"+prop+"="+encodeURIComponent(params[i][prop]);
      }
    }

    return output.slice(1);
  }

  function process(obj) {
    for(var prop in obj) {
      if(obj[prop] instanceof Object) {
        process(obj[prop]);
      } else {
        var _o = {};
        _o[prop] = obj[prop];
        params.push(_o);
      }
    }
  }

  function gord(obj) {
    if(obj instanceof Object) {
      process(obj);
    } else {
      throw new TypeError('Unsupported type.');
    }

    return generateString(params);
  }

  var old = context.gord;
  gord.noConflict = function () {
    context.gord = old;
    return this;
  };

  (typeof module !== 'undefined') && module.exports ?
    (module.exports = gord) :
    (context.gord = gord);
}(this)