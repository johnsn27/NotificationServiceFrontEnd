module.exports = {

  loadPage: function() {
    driver.get('http://localhost:3000/').then(function() {
      return driver.wait(until.elementLocated(by.css('body')), timeout);
    })};
    
};
