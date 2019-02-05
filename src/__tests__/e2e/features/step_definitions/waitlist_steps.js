const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I am on page {string}', (string) => {
  // Write code here that turns the phrase above into concrete actions
  const page = "/results";
  assert.equal(page, string);
});

Given('there are no rooms available', () => {
  // Write code here that turns the phrase above into concrete actions
  const roomsAvailable = 0;
  assert.equal(roomsAvailable, 0);
});

When('I click to watch a room', () => {
  // Write code here that turns the phrase above into concrete actions
});

Then('I should be added to the waitlist', () => {
  // Write code here that turns the phrase above into concrete actions
});