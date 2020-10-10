import React, { Component } from "react";
import Event from "./Event";
import { InfoAlert } from "./Alert";

class EventList extends Component {
  state = {
    events: [],
  };
  render() {
    return (
      <div>
        {!navigator.onLine && <InfoAlert text="Device is offline." />}
        <ul className="EventList">
          {this.props.events.map((event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EventList;
