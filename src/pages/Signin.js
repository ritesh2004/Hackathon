import "./Signin.css";
const Signin = () => {
  return (
    <div className="signin">
      <img
        className="unsplashevgsabl51rk-icon"
        alt=""
        src="/unsplashevgsabl51rk@2x.png"
      />
      <div className="signin-child" />
      <div className="event-hive-parent">
        <b className="event-hive">
          <span>Event</span>
          <span className="hive"> Hive</span>
        </b>
        <b className="sign-in-to">Sign In to Event Hive</b>
        <div className="frame-parent">
          <div className="your-email-parent">
            <div className="your-email">YOUR EMAIL</div>
            <div className="input">
              <div className="enter-your-mail">Enter your mail</div>
            </div>
          </div>
          <div className="your-email-parent">
            <div className="password-parent">
              <div className="enter-your-mail">PASSWORD</div>
              <div className="forgot-your-password">Forgot your password?</div>
            </div>
            <div className="input">
              <div className="enter-your-mail">Enter your password</div>
            </div>
          </div>
        </div>
        <div className="button">
          <div className="enter-your-mail">Sign In</div>
        </div>
        <div className="or">Or</div>
        <div className="google-button">
          <div className="button-content">
            <img className="logo-icon" alt="" src="/logo.svg" />
            <div className="button-text">Sign up with Google</div>
          </div>
        </div>
      </div>
      <div className="hello-friend-parent">
        <b className="hello-friend">Hello Friend</b>
        <div className="to-keep-connected">{`To keep connected with us provide us with your information `}</div>
        <div className="button1">
          <div className="enter-your-mail">Signup</div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
