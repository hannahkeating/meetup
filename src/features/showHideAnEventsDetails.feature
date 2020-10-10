Feature: Show or hide an events details

    Scenario: An event element is collapsed by default
        Given the list of events has loaded
        When the user views the list of events
        Then the event elements are collapsed

    Scenario: User can expand an event to see its details
        Given the list of events has loaded
        When the user clicks on the Show Details button
        Then the event element should be expanded to show more information

    Scenario: User can collapse an event to hide its details
        Given the list of events has loaded
        And the user has finished reading the details of an event
        When the user clicks on the Show Details button again
        Then the event element will collapse to hide the details.