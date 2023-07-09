import { FunctionComponent, useCallback } from "react";

const Homepagedashboard: FunctionComponent = () => {
  const onHomepagedashboardContainerClick = useCallback(() => {
    // Please sync "signup" to the project
  }, []);

  return (
    <div
      className="relative rounded-xl bg-background-grey w-full h-[1150px] overflow-hidden cursor-pointer text-left text-[24px] text-black font-dm-sans"
      onClick={onHomepagedashboardContainerClick}
    >
      <div className="absolute top-[83px] left-[254px] flex flex-col items-start justify-start gap-[40px]">
        <div className="rounded-3xs w-[1130px] h-[202px] flex flex-row items-center justify-center gap-[43px]">
          <div className="relative rounded-3xs bg-white w-[250px] h-[214px] overflow-hidden shrink-0 hidden">
            <div className="absolute top-[15px] left-[-0.5px] bg-gainsboro w-[1130px] h-[214px]" />
          </div>
          <div className="relative rounded-3xs bg-white w-[250px] h-[214px] overflow-hidden shrink-0 hidden">
            <div className="absolute top-[15px] left-[-0.5px] bg-gainsboro w-[1130px] h-[214px]" />
          </div>
          <div className="relative rounded-3xs bg-white w-[250px] h-[214px] overflow-hidden shrink-0 hidden" />
          <div className="relative rounded-3xs bg-white w-[250px] h-[214px] overflow-hidden shrink-0 hidden" />
          <div className="relative rounded-3xs bg-white w-[250px] h-[214px] overflow-hidden shrink-0 hidden" />
          <img
            className="relative rounded-3xs w-[1130px] h-[214px] object-cover"
            alt=""
            src="/image-21@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative rounded-xl bg-white h-[345px] overflow-hidden">
            <b className="absolute top-[29px] left-[31px] tracking-[-0.02em] leading-[100%]">
              Weekly Revenue
            </b>
            <img
              className="absolute h-[9.57%] w-[4.58%] top-[6.38%] right-[3.61%] bottom-[84.06%] left-[91.81%] rounded-3xs max-w-full overflow-hidden max-h-full"
              alt=""
              src="/button.svg"
            />
            <img
              className="absolute top-[82px] left-[22px] w-[1067px] h-64 object-cover"
              alt=""
              src="/chart@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[20px] text-xs text-grey">
          <div className="flex-1 relative rounded-xl bg-white h-[345px] overflow-hidden">
            <div className="absolute top-[27px] right-[24px] w-[66px] h-[21px]">
              <b className="absolute top-[0px] right-[3px] tracking-[-0.02em] leading-[20px] inline-block w-[63px] h-[21px]">
                Monthly
              </b>
              <img
                className="absolute top-[1px] right-[0px] w-[19px] h-[19px] overflow-hidden"
                alt=""
                src="/arrow-drop-up.svg"
              />
            </div>
            <div className="absolute top-[23px] left-[28px] w-[121px] h-[22px] text-[16px] text-black">
              <b className="absolute top-[0px] left-[0px] tracking-[-0.02em] leading-[28px] inline-block w-[121px] h-[22px]">
                Your Pie Chart
              </b>
            </div>
            <img
              className="absolute top-[calc(50%_-_102.5px)] left-[calc(50%_-_72px)] w-[143px] h-[143px]"
              alt=""
              src="/chart1.svg"
            />
            <div className="absolute w-[calc(100%_-_64px)] right-[32px] bottom-[36px] left-[32px] h-[75px]">
              <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] rounded-[15px] bg-white shadow-[0px_18px_40px_rgba(112,_144,_176,_0.12)] h-[75px] overflow-hidden">
                <div className="absolute top-[13.5px] left-[161.5px] box-border w-px h-12 border-r-[1px] border-solid border-ghostwhite" />
                <div className="absolute bottom-[22px] left-[40px] w-16 h-[31px]">
                  <div className="absolute bottom-[21px] left-[13px] tracking-[-0.02em] leading-[20px] font-medium flex items-center w-[51px] h-2.5">
                    Your files
                  </div>
                  <b className="absolute bottom-[0px] left-[13px] text-lg tracking-[-0.02em] leading-[30px] flex text-black items-center w-[41px] h-4">
                    63%
                  </b>
                  <div className="absolute bottom-[22px] left-[0px] rounded-[50%] bg-primary w-2 h-2" />
                </div>
                <div className="absolute right-[39px] bottom-[22px] w-16 h-[31px]">
                  <div className="absolute right-[0px] bottom-[21px] tracking-[-0.02em] leading-[20px] font-medium flex items-center w-[51px] h-2.5">
                    System
                  </div>
                  <b className="absolute right-[10px] bottom-[0px] text-lg tracking-[-0.02em] leading-[30px] flex text-black items-center w-[41px] h-4">
                    25%
                  </b>
                  <div className="absolute right-[56px] bottom-[22px] rounded-[50%] bg-lightskyblue w-2 h-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative rounded-xl bg-white h-[345px] overflow-hidden hidden text-center text-lightsteelblue-100">
            <div className="absolute h-[5.8%] w-[85.43%] top-[82.9%] right-[7.71%] bottom-[11.3%] left-[6.86%]">
              <b className="absolute w-[6.02%] top-[0%] left-[0%] tracking-[-0.02em] leading-[20px] inline-block">
                00
              </b>
              <b className="absolute w-[5.69%] top-[0%] left-[16.05%] tracking-[-0.02em] leading-[20px] inline-block">
                04
              </b>
              <b className="absolute w-[6.02%] top-[0%] left-[31.77%] tracking-[-0.02em] leading-[20px] inline-block">
                08
              </b>
              <b className="absolute w-[4.01%] top-[0%] left-[48.49%] tracking-[-0.02em] leading-[20px] inline-block">
                12
              </b>
              <b className="absolute w-[4.35%] top-[0%] left-[64.21%] tracking-[-0.02em] leading-[20px] inline-block">
                14
              </b>
              <b className="absolute w-[4.35%] top-[0%] left-[79.93%] tracking-[-0.02em] leading-[20px] inline-block">
                16
              </b>
              <b className="absolute w-[4.35%] top-[0%] left-[95.65%] tracking-[-0.02em] leading-[20px] inline-block">
                18
              </b>
            </div>
            <div className="absolute top-[30px] right-[22px] w-[60px] h-5 text-mediumseagreen">
              <b className="absolute top-[0px] right-[0px] tracking-[-0.02em] leading-[20px]">
                +2.45%
              </b>
              <img
                className="absolute top-[1px] right-[42px] w-[18px] h-[18px] overflow-hidden"
                alt=""
                src="/arrow-drop-up1.svg"
              />
            </div>
            <div className="absolute h-[44.35%] w-[84.83%] top-[33.91%] right-[7.46%] bottom-[21.74%] left-[7.71%]">
              <div className="absolute h-[13.06%] w-[8.54%] top-[100%] right-[-4.3%] bottom-[-13.06%] left-[95.76%] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-41xl rounded-br-41xl rounded-bl-none [background:linear-gradient(270deg,_rgba(56,_24,_217,_0.5),_rgba(56,_24,_217,_0.75))] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              </div>
              <div className="absolute h-[13.06%] w-[32.5%] top-[100%] right-[-12.19%] bottom-[-13.06%] left-[79.7%] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-41xl rounded-br-41xl rounded-bl-none [background:linear-gradient(270deg,_rgba(56,_24,_217,_0.5),_rgba(56,_24,_217,_0.75))] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              </div>
              <div className="absolute h-[13.06%] w-[24.67%] top-[100%] right-[11.39%] bottom-[-13.06%] left-[63.94%] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-41xl rounded-br-41xl rounded-bl-none [background:linear-gradient(270deg,_rgba(56,_24,_217,_0.5),_rgba(56,_24,_217,_0.75))] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              </div>
              <div className="absolute h-[13.06%] w-[18.5%] top-[100%] right-[33.62%] bottom-[-13.06%] left-[47.88%] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-41xl rounded-br-41xl rounded-bl-none [background:linear-gradient(270deg,_rgba(56,_24,_217,_0.5),_rgba(56,_24,_217,_0.75))] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              </div>
              <div className="absolute h-[13.06%] w-[29.41%] top-[100%] right-[38.77%] bottom-[-13.06%] left-[31.82%] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-41xl rounded-br-41xl rounded-bl-none [background:linear-gradient(270deg,_rgba(56,_24,_217,_0.5),_rgba(56,_24,_217,_0.75))] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              </div>
              <div className="absolute h-[13.06%] w-[14.94%] top-[100%] right-[69%] bottom-[-13.06%] left-[16.06%] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-41xl rounded-br-41xl rounded-bl-none [background:linear-gradient(270deg,_rgba(56,_24,_217,_0.5),_rgba(56,_24,_217,_0.75))] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              </div>
              <div className="absolute h-[13.06%] w-[21.11%] top-[100%] right-[78.89%] bottom-[-13.06%] left-[0%] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-41xl rounded-br-41xl rounded-bl-none [background:linear-gradient(270deg,_rgba(56,_24,_217,_0.5),_rgba(56,_24,_217,_0.75))] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              </div>
            </div>
            <div className="absolute top-[25px] left-[25px] w-[271px] h-[67px] text-left text-sm text-lightsteelblue-200">
              <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] leading-[24px] font-medium inline-block w-[114px] h-[22px]">
                Daily Traffic
              </div>
              <b className="absolute top-[25px] left-[0px] text-[34px] tracking-[-0.02em] leading-[42px] text-darkslateblue">
                2.579
              </b>
              <div className="absolute top-[41px] left-[88px] tracking-[-0.02em] leading-[24px] font-medium inline-block w-[183px] h-[22px]">
                Visitors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepagedashboard;
