import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

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
const PhotoAlbum = () => {
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