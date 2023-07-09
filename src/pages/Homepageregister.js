import "./Homepageregister.css";
const Homepageregister = () => {
  return (
    <div className="homepageregister">
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
      <div className="registration-parent">
        <b className="registration">Registration</b>
        <div className="input-parent">
          <div className="input">
            <div className="event-hive">Enter your mail</div>
          </div>
          <div className="your-name">Your name</div>
        </div>
        <div className="input-parent">
          <div className="input">
            <div className="event-hive">Enter your mail</div>
          </div>
          <div className="your-email">Your Email</div>
        </div>
      </div>
    </div>
  );
};

export default Homepageregister;
