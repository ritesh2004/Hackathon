import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="homepage">
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
      <img
        className="undraw-page-not-found-su7k-1-icon"
        alt=""
        src="/undraw-page-not-found-su7k-1.svg"
      />
      <b className="oops">Oops!</b>
      <div className="we-cant-seem">
        We can’t seem to find the page you are looking for
      </div>
      <div className="button-wrapper">
        <div className="button1">
          <b className="back-to-homepage">Back to Homepage</b>
        </div>
      </div>
      <div className="follow-us-on">Follow us on</div>
      <img className="homepage-child" alt="" src="/group-65.svg" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <b className="event-hive1">
          <span>Event</span>
          <span className="span">{` `}</span>
          <span className="hive">Hive</span>
        </b>
        <div className="input-parent">
          <div className="input">
            <div className="event-hive">Enter your mail</div>
          </div>
          <div className="button2">
            <div className="event-hive">Subscribe</div>
          </div>
        </div>
        <div className="home-parent">
          <div className="home">Home</div>
          <div className="home">About</div>
          <div className="services">Services</div>
          <div className="services">Get in touch</div>
          <div className="home">FAQs</div>
        </div>
        <div className="group-item" />
        <div className="non-copyrighted">
          Non Copyrighted © 2023 Upload by rich technologies
        </div>
        <div className="phosphor-icons-linkedinlogo-parent">
          <img
            className="phosphor-icons-linkedinlogo"
            alt=""
            src="/phosphor-icons--linkedinlogo.svg"
          />
          <img
            className="phosphor-icons-linkedinlogo"
            alt=""
            src="/phosphor-icons--instagramlogo.svg"
          />
          <img
            className="phosphor-icons-linkedinlogo"
            alt=""
            src="/phosphor-icons--facebooklogo.svg"
          />
        </div>
        <div className="button-parent">
          <div className="button3">
            <div className="event-hive">English</div>
          </div>
          <div className="event-hive">French</div>
          <div className="event-hive">Hindi</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
