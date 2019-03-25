const page = require('../page_objects/left_side_bar');

module.exports = function () {

  this.Given(/^I am on the Home Page$/, function () {
    return helpers.loadPage('http://localhost:3000/home');
  });

  this.When(/^I select My Watched Rooms button$/, function () {
    return page.selectMyWatchedRoomsButton();
  });

  this.Then(/^I see the My Watched Rooms page$/, function () {
    return page.checkMyWatchedRoomsPage();
  });

  this.When(/^I select Search a Room button$/, function () {
    return page.selectSearchARoomButton();
  });

  this.Then(/^I see the Search a Room page$/, function () {
    return page.checkSearchARoomPage();
  });

  this.When(/^I select Meeting Rooms button$/, function () {
    return page.selectMeetingRoomsButton();
  });

  this.Then(/^I see the Meeting Rooms page$/, function () {
    return page.checkMeetingRoomsPage();
  });

};
