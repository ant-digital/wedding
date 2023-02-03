import { StaticImage } from "gatsby-plugin-image";
import React from "react";

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

    </div>
  )
}
export default PhotoAlbum