module.exports = function () {
this.Given(/^I am on page "([^"]*)"$/, (string) => {
  const page = "/results";
  expect(string).to.equal(page);
});

this.Given('there are no rooms available', () => {
  const roomsAvailable = 0;
  expect(roomsAvailable).to.equal(0);
});

this.When('I click to watch a room', () => {
  // Write code here that turns the phrase above into concrete actions
});

this.Then('I should be added to the waitlist', () => {
  // Write code here that turns the phrase above into concrete actions
})};