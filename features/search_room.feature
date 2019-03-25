Feature: Search Room

  As a BBC Employee
  I want to be able to search for rooms
  And be able to filter these rooms according to my requirements

  Background:
    Given I am on the Search Room Page

  Scenario: Search by Room Name
    When I enter Luther into the Room Name field
    And I click on the search button
    Then I see the Meeting Rooms page
    And the results should show Luther

  Scenario: Include Only Available Rooms
    When I enter a date, start and end times
    And the unavailable checkbox is not ticked
    And I click on the search button
    Then I see the Meeting Rooms page
    And the results should not show any unavailable rooms

  Scenario: Include Unavailable Rooms
    When I enter a date, start and end times
    When I tick the unavailable checkbox
    And I click on the search button
    Then I see the Meeting Rooms page
    And the results should include unavailable rooms
