import "./Homepagedashboardmessages.css";
const Homepagedashboardmessages = () => {
  return (
    <div className="homepagedashboardmessages">
      <div className="homepagedashboardmessages-inner">
        <div className="event-hive-parent">
          <b className="event-hive">Event Hive</b>
          <div className="frame-parent">
            <div className="frame-wrapper">
              <div className="phosphor-icons-squaresfour-parent">
                <img
                  className="phosphor-icons-squaresfour"
                  alt=""
                  src="/phosphor-icons--squaresfour.svg"
                />
                <b className="event-hive">Dashboard</b>
              </div>
            </div>
            <div className="phosphor-icons-televisionsim-parent">
              <img
                className="phosphor-icons-squaresfour"
                alt=""
                src="/phosphor-icons--televisionsimple.svg"
              />
              <b className="event-hive">Events</b>
            </div>
            <div className="phosphor-icons-paperplanerig-parent">
              <img
                className="phosphor-icons-squaresfour"
                alt=""
                src="/phosphor-icons--paperplaneright.svg"
              />
              <b className="event-hive">Messages</b>
            </div>
            <div className="phosphor-icons-user-parent">
              <img
                className="phosphor-icons-squaresfour"
                alt=""
                src="/phosphor-icons--user.svg"
              />
              <b className="event-hive">Profile</b>
            </div>
          </div>
        </div>
      </div>
      <div className="homepagedashboardmessages-child">
        <div className="group-child" />
      </div>
    </div>
  );
};

export default Homepagedashboardmessages;
