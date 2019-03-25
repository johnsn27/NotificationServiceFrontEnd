module.exports = {
  url: 'http://localhost:3000/',
  elements: {
    pageTitle: by.css(''),
    myAccountButton: by.css(''),
    myBookingsButton: by.css(''),
    myWatchedRoomsButton: by.css(''),
    bookARoomButton: by.css(''),
    searchARoomButton: by.css(''),
    meetingRoomsButton: by.css(''),
  },

  selectMyWatchedRoomsButton: function() {
    return driver.findElement(By.css('#watchedRooms')).click();
  },

  checkMyWatchedRoomsPage: function() {
    return driver.findElement(By.css('.sticky-bar')).getText().then(result => expect(result).to.equal('My Watched Rooms'));
  },

  selectSearchARoomButton: function() {
    return driver.findElement(By.css('#searchRoom')).click();
  },

  checkSearchARoomPage: function() {
    return driver.findElement(By.css('.sticky-bar')).getText().then(result => expect(result).to.equal('Search Room'));
  },

  selectMeetingRoomsButton: function() {
    return driver.findElement(By.css('#meetingRooms')).click();
  },

  checkMeetingRoomsPage: function() {
    return driver.findElement(By.css('.sticky-bar')).getText().then(result => expect(result).to.equal('Meeting Rooms'));
  }

};
