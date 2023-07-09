import "./Signup.css";
const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-child" />
      <img
        className="unsplashucbmz0s-w28-icon"
        alt=""
        src="/unsplashucbmz0sw28@2x.png"
      />
      <div className="signup-item" />
      <div className="welcome-back-parent">
        <b className="welcome-back">Welcome back</b>
        <div className="to-keep-connected">{`To keep connected with us provide us with your information `}</div>
        <div className="button">
          <div className="enter-your-mail">Signin</div>
        </div>
      </div>
      <div className="event-hive-parent">
        <b className="event-hive">
          <span>Event</span>
          <span className="hive"> Hive</span>
        </b>
        <b className="sign-up-to">Sign Up to Event Hive</b>
        <div className="frame-parent">
          <div className="your-name-parent">
            <div className="your-name">YOUR NAME</div>
            <div className="input">
              <div className="enter-your-mail">Enter your name</div>
            </div>
          </div>
          <div className="your-name-parent">
            <div className="password-wrapper">
              <div className="enter-your-mail">PASSWORD</div>
            </div>
            <div className="input">
              <div className="enter-your-mail">Enter your password</div>
            </div>
          </div>
          <div className="your-name-parent">
            <div className="password-wrapper">
              <div className="enter-your-mail">CONFIRM PASSWORD</div>
            </div>
            <div className="input">
              <div className="enter-your-mail">Enter your password</div>
            </div>
          </div>
        </div>
        <div className="button1">
          <div className="enter-your-mail">Sign Up</div>
        </div>
        <div className="or">Or</div>
        <div className="google-button">
          <div className="button-content">
            <img className="logo-icon" alt="" src="/logo.svg" />
            <div className="button-text">Sign up with Google</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
