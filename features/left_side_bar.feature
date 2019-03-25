Feature: Left Side Bar

  As a BBC Employee
  I want to be able to interact with the left side bar
  And be able to navigate the product to find the pages I want

  Background:
    Given I am on the Home Page

  Scenario: My Watched Rooms functionality
    When I select My Watched Rooms button
    Then I see the My Watched Rooms page

  Scenario: Search a Room functionality
    When I select Search a Room button
    Then I see the Search a Room page

  Scenario: Meeting Rooms functionality
    When I select Meeting Rooms button
    Then I see the Meeting Rooms page
