module.exports = function () {

  this.Given(/^I am on the Home Page$/, function () {
    return helpers.loadPage();
  });

  this.When(/^I select My Account button$/, function () {
    return page.selectMyAccountButton();
  });

  this.Then(/^I see the My Account page$/, function () {
    return page.checkMyAccountPage();
  });

  this.When(/^I select My Bookings button$/, function () {
    return page.selectMyBookingsButton();
  });

  this.Then(/^I see the My Bookings page$/, function () {
    return page.checkMyBookingsPage();
  });

  this.When(/^I select My Watched Rooms button$/, function () {
    return page.selectMyWatchedRoomsButton();
  });

  this.Then(/^I see the My Watched Rooms page$/, function () {
    return page.checkMyWatchedRoomsPage();
  });

  this.When(/^I select Book a Room button$/, function () {
    return page.selectBookARoomButton();
  });

  this.Then(/^I see the Book a Room page$/, function () {
    return page.checkBookARoomPage();
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
