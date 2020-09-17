import React from "react";
import { shallow } from "enzyme";
import App from "../App";

import EventList from "../EventList";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    const event = {
      created: 1600296353000,
      duration: 3600000,
      id: "prjsxrybcmbcc",
      name: "Spiritual Wisdom on Karma and Reincarnation",
      date_in_series_pattern: false,
      status: "upcoming",
      time: 1600725600000,
      local_date: "2020-09-21",
      local_time: "18:00",
      updated: 1600296357000,
      utc_offset: -14400000,
      waitlist_count: 0,
      yes_rsvp_count: 2,
      venue: {
        id: 26906060,
        name: "Event",
        lat: 37.99,
        lon: -81.14,
        repinned: false,
        city: "Oak Hill",
        country: "us",
        localized_country_name: "",
      },
      group: {
        created: 1581622529000,
        name: "Have You Had a Spiritual Experience? Charleston ECKANKAR",
        id: 33340328,
        join_mode: "open",
        lat: 38.349998474121094,
        lon: -81.62999725341797,
        urlname: "Eckankar-Charleston",
        who: "Spiritual Seekers",
        localized_location: "Charleston, WV",
        state: "WV",
        country: "us",
        region: "en_US",
        timezone: "US/Eastern",
      },
      link: "https://www.meetup.com/Eckankar-Charleston/events/prjsxrybcmbcc/",
      description: "<p>Live a More Joyful Life!</p> ",
      visibility: "public",
      member_pay_fee: false,
    };
    EventWrapper = shallow(<Event event={event} />);
  });
  test("test that componet is rendered", () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test("test that event wrapping div is rendered", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("test that event wrapping div just shows event__Overview", () => {
    expect(EventWrapper.find(".event").children()).toHaveLength(1);
  });

  test("test that event__Overview is rendered", () => {
    expect(EventWrapper.find(".event__Overview")).toHaveLength(1);
  });

  test("test that event__Overview children are rendered", () => {
    expect(EventWrapper.find(".event__Overview").children()).toHaveLength(3);
  });

  test("test that event__Details children are rendered", () => {
    EventWrapper.setState({
      showDetails: true,
    });
    expect(EventWrapper.find(".event__Details--description")).toHaveLength(1);
  });

  test("test that show/hide details button is rendered", () => {
    expect(EventWrapper.find(".event__Overview button")).toHaveLength(1);
  });

  test("click on button should show details", () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find(".event__Overview button").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });
});
