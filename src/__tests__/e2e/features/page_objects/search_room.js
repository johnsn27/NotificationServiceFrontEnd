module.exports = {
  
    selectSearchButton: function() {
      return driver.findElement(By.css('.advanced-search-button button')).click();
    },

    enterRoomName: function(name) {
      const nameField = driver.findElement(By.css('#name'));
      nameField.sendKeys(name);
    }
  
  };
  