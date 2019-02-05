Feature: Waitlist
    As a BBC Employee
    I want to be able to view a list of rooms that match my requirements
    And be able to watch rooms if none are available

    Scenario: Watch Room
        Given I am on page "/results"
        And there are no rooms available
        When I click to watch a room
        Then I should be added to the waitlist