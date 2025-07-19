import React from 'react';
import './Video.css'
const Video = () => {
  return (
  <div className="video_content">
    <iframe
      width="900"
      height="550"
      src="https://www.youtube.com/embed/91Vdve_SlTE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
};

export default Video;
