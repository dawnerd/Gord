var gord = require('../src/gord.js');

var testObj = {
  'testProp' : [
    {
      'one': 'two'
    },
    {
      'one': 'two'
    }
  ],
  'testPropTwo': {
    'test': 12,
    'testing': 3.14
  }
};

var result = gord(testObj);

console.log(result);