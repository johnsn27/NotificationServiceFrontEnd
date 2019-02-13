module.exports = {

  elements: {
    pageTitle: by.css(''),
    myAccountButton: by.css(''),
    myBookingsButton: by.css(''),
    myWatchedRoomsButton: by.css(''),
    bookARoomButton: by.css(''),
    searchARoomButton: by.css(''),
    meetingRoomsButton: by.css(''),
  },

  selectMyAccountButton: function() {
    return driver.findElement({myAccountButton}).click();
  },

  checkMyAccountPage: function() {
    let result = driver.findElement({pageTitle}).getText();
    return assert.ok(result.includes('My Account'));
  },

  selectMyBookingsButton: function() {
    return driver.findElement({myBookingsButton}).click();
  },

  checkMyBookingsPage: function() {
    let result = driver.findElement({pageTitle}).getText();
    return assert.ok(result.includes('My Bookings'));
  },

  selectMyWatchedRoomsButton: function() {
    return driver.findElement({myWatchedRoomsButton}).click();
  },

  checkMyWatchedRoomsPage: function() {
    let result = driver.findElement({pageTitle}).getText();
    return assert.ok(result.includes('My Watched Rooms'));
  },

  selectBookARoomButton: function() {
    return driver.findElement({bookARoomButton}).click();
  },

  checkBookARoomPage: function() {
    let result = driver.findElement({pageTitle}).getText();
    return assert.ok(result.includes('Book a Room'));
  },

  selectSearchARoomButton: function() {
    return driver.findElement({searchARoomButton}).click();
  },

  checkSearchARoomPage: function() {
    let result = driver.findElement({pageTitle}).getText();
    return assert.ok(result.includes('Search a Room'));
  },

  selectMeetingRoomsButton: function() {
    return driver.findElement({meetingRoomsButton}).click();
  },

  checkMeetingRoomsPage: function() {
    let result = driver.findElement({pageTitle}).getText();
    return assert.ok(result.includes('Meeting Rooms'));
  }

};
