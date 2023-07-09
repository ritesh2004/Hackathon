import { useCallback } from "react";
import "./Homepagedashboard.css";
const Homepagedashboard = () => {
  const onHomepagedashboardContainerClick = useCallback(() => {
    // Please sync "signup" to the project
  }, []);

  return (
    <div
      className="homepagedashboard"
      onClick={onHomepagedashboardContainerClick}
    >
      <div className="frame-parent">
        <div className="frame-group">
          <div className="rectangle-wrapper">
            <div className="frame-child" />
          </div>
          <div className="rectangle-wrapper">
            <div className="frame-child" />
          </div>
          <div className="rectangle-wrapper" />
          <div className="rectangle-wrapper" />
          <div className="rectangle-wrapper" />
          <img className="image-21-icon" alt="" src="/image-21@2x.png" />
        </div>
        <div className="consumption-per-day-wrapper">
          <div className="consumption-per-day">
            <b className="title">Weekly Revenue</b>
            <img className="button-icon" alt="" src="/button.svg" />
            <img className="chart-icon" alt="" src="/chart@2x.png" />
          </div>
        </div>
        <div className="medium-pie-chart-parent">
          <div className="consumption-per-day">
            <div className="timeline-button">
              <b className="monthly">Monthly</b>
              <img
                className="arrow-drop-up-icon"
                alt=""
                src="/arrow-drop-up.svg"
              />
            </div>
            <div className="title1">
              <b className="title2">Your Pie Chart</b>
            </div>
            <img className="chart-icon1" alt="" src="/chart1.svg" />
            <div className="content">
              <div className="content1">
                <div className="separator" />
                <div className="sent">
                  <div className="your-files">Your files</div>
                  <b className="b">63%</b>
                  <div className="sent-child" />
                </div>
                <div className="recieved">
                  <div className="system">System</div>
                  <b className="b1">25%</b>
                  <div className="recieved-child" />
                </div>
              </div>
            </div>
          </div>
          <div className="medium-traffic">
            <div className="days">
              <b className="b2">00</b>
              <b className="b3">04</b>
              <b className="b4">08</b>
              <b className="b5">12</b>
              <b className="b6">14</b>
              <b className="b7">16</b>
              <b className="b8">18</b>
            </div>
            <div className="precentage">
              <b className="b9">+2.45%</b>
              <img
                className="arrow-drop-up-icon1"
                alt=""
                src="/arrow-drop-up1.svg"
              />
            </div>
            <div className="charts">
              <div className="bar-7">
                <div className="bar-7-child" />
              </div>
              <div className="bar-6">
                <div className="bar-7-child" />
              </div>
              <div className="bar-5">
                <div className="bar-7-child" />
              </div>
              <div className="bar-4">
                <div className="bar-7-child" />
              </div>
              <div className="bar-3">
                <div className="bar-7-child" />
              </div>
              <div className="bar-2">
                <div className="bar-7-child" />
              </div>
              <div className="bar-1">
                <div className="bar-7-child" />
              </div>
            </div>
            <div className="content2">
              <div className="label">Daily Traffic</div>
              <b className="cash">2.579</b>
              <div className="label1">Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepagedashboard;
