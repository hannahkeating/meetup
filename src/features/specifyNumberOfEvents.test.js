import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";
import NumberofEvents from "../NumberofEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  test("By default, when user hasn’t specified a number, show 32 events", ({
    given,
    when,
    then,
  }) => {
    given(
      "user hasn’t changed the value in the number of events textbox",
      () => {}
    );

    when("the user opens the app", () => {
      AppWrapper = mount(<NumberofEvents />);
    });

    then("the user should see a list of 32 upcoming events", () => {
      expect(AppWrapper.state("numberOfEvents")).toEqual(32);
    });
  });

  test("User changes the number of events to be shown", ({
    given,
    when,
    then,
  }) => {
    given("user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    when("user changes the number in the events shown textbox", () => {
      AppWrapper.find(".eventsNumberInput").simulate("change", {
        target: { value: 30 },
      });
    });

    then("the user should receive the same number of events specified", () => {
      const EventWrapper = AppWrapper.find(NumberofEvents);
      expect(EventWrapper.state("numberOfEvents")).toEqual(30);
    });
  });
});
