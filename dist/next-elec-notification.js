/*!
 * name: next-elec-notification
 * url: https://github.com/afeiship/next-elec-notification
 * version: 1.0.0
 * date: 2019-07-08T14:10:02.177Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var notifier = require('node-notifier');
  var DEFAULT_OPTIONS = {
    title: 'title',
    message: 'Message',
    sound: true
  };

  var NxElecNotification = nx.declare('nx.ElecNotification', {
    methods: {
      notify: function(inOptions) {
        const options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        return new Promise(function(resolve, reject) {
          notifier.notify(options, function(err, response, data) {
            if (!err) {
              resolve({ code: 0, data: nx.mix(data, { status: response }) });
            } else {
              reject({ code: -1, data: err });
            }
          });
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxElecNotification;
  }
})();

//# sourceMappingURL=next-elec-notification.js.map
