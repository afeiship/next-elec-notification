(function() {
  var nx = require('next-js-core2');
  var NxElecNotification = require('../src/next-elec-notification');

  describe('NxElecNotification.methods', function() {
    test('init', function() {
      var notification = new NxElecNotification();

      notification.notify({ message: 'test' });
    });
  });
})();
