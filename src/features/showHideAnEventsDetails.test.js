import React from "react";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("the list of events has loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("the user views the list of events", () => {
      AppWrapper.update();
    });

    then("the event elements are collapsed", () => {
      expect(AppWrapper.find(".Event .event__Details")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    given("the list of events has loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks on the Show Details button", () => {
      AppWrapper.update();
      AppWrapper.find(".Event .details-btn").at(0).simulate("click");
    });

    then(
      "the event element should be expanded to show more information",
      () => {
        expect(AppWrapper.find(".Event .event__Details")).toHaveLength(1);
      }
    );
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given("the list of events has loaded", () => {
      AppWrapper = mount(<App />);
    });

    given("the user has finished reading the details of an event", () => {
      AppWrapper.update();
      AppWrapper.find(".Event .details-btn").at(0).simulate("click");
      expect(AppWrapper.find(".Event .event__Details")).toHaveLength(1);
    });

    when("the user clicks on the Show Details button again", () => {
      AppWrapper.update();
      AppWrapper.find(".Event .details-btn").at(0).simulate("click");
    });

    then("the event element will collapse to hide the details.", () => {
      expect(AppWrapper.find(".Event .event__Details")).toHaveLength(0);
    });
  });
});
