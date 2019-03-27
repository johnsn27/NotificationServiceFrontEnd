Feature: Meeting Rooms

  As a BBC Employee
  I want to be able to view a list of rooms
  And be able to choose a room to watch that meets my requirements

  Background:
    Given I am on the Meeting Rooms Page

  Scenario: View Room Page
    When I click on a view link
    Then I see the room's page

  Scenario: Watch Room
    When I click on a watch button
    Then I see the "watch" room dialog
    When I click the confirm button
    Then the dialog should disappear
    And the watch button is disabled

  Scenario: Book Room
    When I click on a book button
    Then I see the "book" room dialog
    When I enter a meeting name
    And I click the confirm button
    Then the dialog should disappear
    And the book button becomes watch
