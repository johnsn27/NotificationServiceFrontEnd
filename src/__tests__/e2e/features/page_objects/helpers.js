module.exports = {
  url: 'http://localhost:3000/',
  
  loadPage: function() {
    driver.get('http://localhost:3000/').then(function() {
      return driver.wait(until.elementLocated(by.css('body')), timeout);
    })}
    
};
