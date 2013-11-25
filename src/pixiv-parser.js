// Generated by CoffeeScript 1.6.3
var Debug, PixivParser, PixivReader, PixivURL;

Debug = (function() {
  function Debug() {}

  Debug.print = function(html) {
    return ($('html')).html(html);
  };

  return Debug;

})();

PixivURL = (function() {
  function PixivURL() {}

  PixivURL.host = 'http://www.pixiv.net';

  PixivURL.actions = {
    login: 'login.php'
  };

  PixivURL.makeURL = function(action) {
    return this.host + '/' + this.actions[action];
  };

  return PixivURL;

})();

PixivReader = (function() {
  function PixivReader(id, pass) {
    this.id = id;
    this.pass = pass;
  }

  PixivReader.prototype.get = function(action, data, callback) {
    return $.get(PixivURL.makeURL(action), data, callback);
  };

  PixivReader.prototype.post = function(action, data, callback) {
    return $.post(PixivURL.makeURL(action), data, callback);
  };

  PixivReader.prototype.login = function(callback) {
    return this.post('login', {
      pixiv_id: this.id,
      pass: this.pass,
      mode: 'login',
      'skip': '0'
    }, callback);
  };

  return PixivReader;

})();

PixivParser = (function() {
  function PixivParser() {}

  return PixivParser;

})();
