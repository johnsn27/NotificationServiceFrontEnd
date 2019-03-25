module.exports = {
  
    selectSearchButton: function() {
      return driver.findElement(By.css('.advanced-search-button button')).click();
    },

    enterRoomName: function(name) {
      const nameField = driver.findElement(By.css('#room-name-textarea'));
      nameField.sendKeys(name);
    },

    setUnavailableCheckbox: function(bool) {
      const checkbox = driver.findElement(By.css('#unavailable-checkbox'));
      if (bool) {
        checkbox.click();
        return checkbox.isSelected().then(result => expect(result).to.equal(true));
      } else {
        return checkbox.isSelected().then(result => expect(result).to.equal(false));
      }
    },

    checkResultsContainRoom: function(roomName) {
      const meetingTableBody = driver.findElement(By.css('.meeting-rooms-table tbody'));
      return meetingTableBody.getText().then(result => expect(result).to.contain(roomName));
    },

    containsUnavailableRooms: function(bool) {
      const meetingTableBody = driver.findElement(By.css('.meeting-rooms-table tbody'));
      if (bool) {
        return meetingTableBody.getText().then(result => expect(result).to.contain('Watch'));
      } else {
        return meetingTableBody.getText().then(result => expect(result).to.not.contain('Watch'));
      }
    },

    setTimes: function() {
      const dateField =  driver.findElement(By.id('date'));
      const startTime = driver.findElement(By.id('start-time'));
      const endTime = driver.findElement(By.id('end-time'));
      dateField.sendKeys('27022019');
      startTime.sendKeys('1200');
      endTime.sendKeys('1245');
    }
  
  };
  