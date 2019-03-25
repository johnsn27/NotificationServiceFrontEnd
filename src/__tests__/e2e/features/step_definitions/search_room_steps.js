const page = require('../page_objects/search_room');

module.exports = function () {

  this.Given(/^I am on the Search Room Page$/, function () {
    return helpers.loadPage('http://localhost:3000/search-room');
  });

  this.When(/^I click on the search button$/, function () {
    return page.selectSearchButton();
  });

  this.Then(/^I enter Luther into the Room Name field$/, function () {
    return page.enterRoomName('Luther');
  });

  this.Then(/^the results should show Luther$/, function () {
    return page.checkResultsContainRoom('Luther');
  });
  
  this.When(/^I enter a date, start and end times$/, function () {
    return page.setTimes();
  })

  this.When(/^the unavailable checkbox is not ticked$/, function () {
    return page.setUnavailableCheckbox(false);
  });

  this.Then(/^the results should not show any unavailable rooms$/, function () {
    return page.containsUnavailableRooms(false);
  });

  this.When(/^I tick the unavailable checkbox$/, function () {
    return page.setUnavailableCheckbox(true);
  });

  this.Then(/^the results should include unavailable rooms$/, function () {
    return page.containsUnavailableRooms(true);
  });

};