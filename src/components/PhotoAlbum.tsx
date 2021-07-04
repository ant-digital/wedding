import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    backgroundColor: "#000000",
    iconColor: "#F9F9F9",
    showDownloadButton: false
  },
  settings: {
    overlayColor: "#F9F9F9",
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
const PhotoAlbum = ({ color }) => {
  if (color === 'green') {
    options.buttons.backgroundColor = '#047857'
  } else if (color === 'blue') {
    options.buttons.backgroundColor = '#0045ac'
  }
  return (
    <div className="w-screen">
      <SRLWrapper options={options}>
        <div id="gallery-with-links" className="grid grid-cols-3 gap-4">
          <div >
            {/* <a href="A001.jpg"> */}
            <StaticImage
              src="https://images.unsplash.com/photo-1559286024-87b48d2fedc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyMDQ2OTQz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
              alt="Beach and waves"
            ></StaticImage>
            {/* </a> */}
          </div>
          <div >
            {/* <a href="A002.jpg"> */}
            <StaticImage
              src="../images/couple.jpg"
              alt="Waves"
            ></StaticImage>
            {/* </a> */}
          </div>
          <div >
            {/* <a href="A003.jpg"> */}
            <StaticImage
              src="../images/photo-1.jpg"
              alt="Under the water"
            ></StaticImage>
            {/* </a> */}
          </div>
          <div >
            {/* <a href="A004.jpg"> */}
            <StaticImage
              src="../images/couple3.jpg"
              alt="Canyon night"
            ></StaticImage>
            {/* </a> */}
          </div>
          <div >
            {/* <a href="A005.jpg"> */}
            <StaticImage
              src="../images/couple4.jpg"
              alt="Valley"
            ></StaticImage>
            {/* </a> */}
          </div>
        </div>
      </SRLWrapper>
    </div>
  )
}
export default PhotoAlbum