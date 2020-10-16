npm var common = require("./common.js");

var helper = common.helper;

helper.init(require.resolve('node-red'));

describe('Amazon Echo Hub Node', function() {

  before(function(done) {
    helper.startServer(done);
  });

  after(function(done) {
    helper.stopServer(done);
  });

  afterEach(function() {
    helper.unload();
  });

  require('./nodes/hub/10-input_spec.js');
  require('./nodes/hub/11-philips-hue_spec.js');

});
