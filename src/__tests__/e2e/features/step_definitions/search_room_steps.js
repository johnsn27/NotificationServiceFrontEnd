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
    // Write code here that turns the phrase above into concrete actions
  });

  this.When(/^the unavailable checkbox is not ticked$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.Then(/^the results should not show any unavailable rooms$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.When(/^I tick the unavailable checkbox$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.Then(/^the results should include unavailable rooms$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.When(/^I enter a start time$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.When(/^I enter a end time before the start time$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });

  this.Then(/^I should recieve an error$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });

};