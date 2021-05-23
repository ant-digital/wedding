import dayjs from "dayjs";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import useCountdown from "src/useCountdown";

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];
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
const Countdown = () => {
  const countdown = useCountdown(dayjs('2022-05-14:00:00.000Z'))
  return (
    <div className="flex flex-col justify-center w-screen p-4" style={{ backgroundColor: '#d6c6bc' }}>
      <h1 className="text-2xl text-white mb-4 text-center">Countdown</h1>
      <div className="grid grid-cols-4 gap-2 md:gap-6 justify-center text-center self-center">
      <div className="border-2 border-white rounded-lg p-2 md:p-6">
        <span className="font-bold">{countdown.days}</span> <br></br><span className="text-sm">hari</span>
      </div>
      <div className="border-2 border-white rounded-lg p-2 md:p-6">
      <span className="font-bold">{countdown.hours}</span> <br></br><span className="text-sm">jam</span>
      </div>
      <div className="border-2 border-white rounded-lg p-2 md:p-6">
      <span className="font-bold">{countdown.minutes}</span> <br></br><span className="text-sm">menit</span>
      </div>
      <div className="border-2 border-white rounded-lg p-2 md:p-6">
      <span className="font-bold">{countdown.seconds}</span> <br></br><span className="text-sm">detik</span>
      </div>
      </div>
      <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=asdf&details=noway&location=kempinski&dates=20210531T154800Z%2F20210702T154800Z">
              <div className="m-auto flex bg-gray-200 rounded-xl text-white text-sm w-max mt-4" style={{ backgroundColor: '#b89768', padding: '10px 10px 5px 10px' }}>
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
    </div>
  )
}
export default Countdown