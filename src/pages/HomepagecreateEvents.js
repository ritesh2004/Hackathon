import "./HomepagecreateEvents.css";
const HomepagecreateEvents = () => {
  return (
    <div className="homepagecreate-events">
      <div className="event-hive-parent">
        <b className="event-hive">
          <span>Event</span>
          <span className="hive"> Hive</span>
        </b>
        <div className="login-parent">
          <div className="event-hive">Login</div>
          <div className="button">
            <div className="event-hive">Signup</div>
          </div>
        </div>
      </div>
      <div className="create-event-parent">
        <b className="create-event">Create Event</b>
        <div className="input-parent">
          <div className="input">
            <div className="event-hive">Enter your mail</div>
          </div>
          <div className="event-title">Event Title</div>
        </div>
        <div className="input-parent">
          <div className="input">
            <div className="event-hive">Enter your mail</div>
          </div>
          <div className="event-venue">Event Venue</div>
        </div>
        <div className="input-parent">
          <div className="input-container">
            <div className="input2">
              <div className="event-hive">Enter your mail</div>
            </div>
            <div className="start-time">Start time</div>
          </div>
          <div className="group-div">
            <div className="input2">
              <div className="event-hive">Enter your mail</div>
            </div>
            <div className="end-time">End time</div>
          </div>
        </div>
        <div className="group-container">
          <div className="input-parent1">
            <div className="input4">
              <div className="event-hive">Enter your mail</div>
            </div>
            <div className="start-date">Start date</div>
          </div>
          <div className="input-parent1">
            <div className="input4">
              <div className="event-hive">Enter your mail</div>
            </div>
            <div className="end-date">End date</div>
          </div>
        </div>
      </div>
      <div className="event-description-parent">
        <b className="event-description">Event Description</b>
        <div className="event-image-parent">
          <div className="event-image">Event Image</div>
          <div className="frame-child" />
        </div>
        <div className="event-image-parent">
          <div className="event-image">Event Description</div>
          <div className="input6">
            <div className="event-hive">Type here...</div>
          </div>
        </div>
        <div className="button1">
          <div className="event-hive">Create event</div>
        </div>
      </div>
    </div>
  );
};

export default HomepagecreateEvents;
