module.exports = {
  setLocalStorage: function() {
    global.localStorage = {
      getItem: function(key) {
        return this[key];
      },
      setItem: function(key, value) {
        this[key] = value;
      },
      removeItem: function(key) {
        delete this[key];
      }
    };

    const token = "token";
    localStorage.setItem('jwt', token);
  }
};
