module.exports = {

    selectViewRoom: function() {
      return driver.findElement(By.css('.view-room-link a')).click();
    },

    checkRoomPage: function() {
      const roomName = driver.findElement(By.css('.view-room-title'));
      return roomName.getText().then(result => expect(result).to.equal('George Lucas BC5 A3 M2'));
    },

    clickWatch: function() {
        //Add an id to it or something, maybe I could do 'watch-' and then the room id so it's unique - maybe do the same for the view and other stuff
        return driver.findElement(By.css('')).click();
    },

    // checkResultsContainRoom: function(roomName) {
    //   const meetingTableBody = driver.findElement(By.css('.meeting-rooms-table tbody'));
    //   return meetingTableBody.getText().then(result => expect(result).to.contain(roomName));
    // },

    // containsUnavailableRooms: function(bool) {
    //   const meetingTableBody = driver.findElement(By.css('.meeting-rooms-table tbody'));
    //   if (bool) {
    //     return meetingTableBody.getText().then(result => expect(result).to.contain('Watch'));
    //   } else {
    //     return meetingTableBody.getText().then(result => expect(result).to.not.contain('Watch'));
    //   }
    // },

    // setTimes: function() {
    //   const dateField =  driver.findElement(By.id('date'));
    //   const startTime = driver.findElement(By.id('start-time'));
    //   const endTime = driver.findElement(By.id('end-time'));
    //   dateField.sendKeys('27022019');
    //   startTime.sendKeys('1200');
    //   endTime.sendKeys('1245');
    // }

  };
