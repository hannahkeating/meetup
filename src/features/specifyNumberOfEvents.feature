Feature: Specify the number of events to be shown

    Scenario: By default, when user hasn’t specified a number, show 32 events
        Given user hasn’t changed the value in the number of events textbox
        When the user opens the app
        Then the user should see a list of 32 upcoming events

    Scenario: User changes the number of events to be shown
        Given user opens the app
        When user changes the number in the events shown textbox
        Then the user should receive the same number of events specified
