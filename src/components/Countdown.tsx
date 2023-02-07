import dayjs from "dayjs";
import React from "react";
import useCountdown from "src/useCountdown";
import classNames from "classnames";
const options = {
  buttons: {
    backgroundColor: "rgba(140, 94, 88, 0.8)",
    iconColor: "rgba(241, 191, 152, 0.7)",
    showDownloadButton: false
  },
  settings: {
    overlayColor: "#d6c6bc",
    transitionSpeed: 1000,
    transitionTimingFunction: "linear"
  },
  thumbnails: {
    thumbnailsSize: ["120px", "100px"],
    thumbnailsOpacity: 0.4
  },
  caption: {
    showCaption: false
  },
  progressBar: {
    size: "4px",
    backgroundColor: "rgba(255, 237, 225, 1)",
    fillColor: "#AF9AB2"
  }
};
const Countdown = ({ setReminder, color }) => {
  const countdown = useCountdown(dayjs('2023-11-18', "YYYY-MM-DD"))
  var borderClass = classNames({
    'rounded-lg': true,
    'p-1': true,
    'md:p-6': true,
    'border-gold': color === 'gold' ? true : false,
    'border-sageGreen': color === 'sageGreen' ? true : false,
    'border-blue': color === 'blue' ? true : false,
    'bg-white': true,
    'text-black': true,
    border: 0,
    // 'w-3/4': true

  });
  return (
    <div className="flex flex-col justify-center w-screen p-4">
      <div className="grid grid-cols-4 gap-6 md:gap-6 justify-center text-center self-center">
        <div className={borderClass}>
          <span className="font-bold text-sm">{countdown.days}</span> <br></br><span style={{ fontSize: '10px', textAlign: 'center' }} >days</span>
        </div>
        <div className={borderClass}>
          <span className="font-bold text-sm">{countdown.hours}</span> <br></br><span style={{ fontSize: '10px', textAlign: 'center' }} >hours</span>
        </div>
        <div className={borderClass}>
          <span className="font-bold text-sm">{countdown.minutes}</span> <br></br><span style={{ fontSize: '10px', textAlign: 'center' }} >minutes</span>
        </div>
        <div className={borderClass}>
          <span className="font-bold text-sm">{countdown.seconds}</span> <br></br><span style={{ fontSize: '10px', textAlign: 'center' }} >seconds</span>
        </div>
      </div>
      {setReminder ? (
        <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=asdf&details=noway&location=kempinski&dates=20210531T154800Z%2F20210702T154800Z">
          <div className="m-auto flex bg-gray-200 rounded-xl text-white w-max mt-4" style={{ backgroundColor: '#000000', padding: '10px 10px 5px 10px' }}>
            <div className="mr-2">
              <span style={{
                fontFamily: 'Material Icons', fontSize: '24px'
              }}>event_available </span>
            </div>
            <div>
              <span>Ingatkan di kalender</span>
            </div>
          </div>
        </a>
      ) : ('')}

    </div>
  )
}
export default Countdown