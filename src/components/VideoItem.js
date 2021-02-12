import React from "react";
import "./VideoItem.css";
const VideoItem = ({ viedo, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(viedo)} className="item video-item">
      <img
        alt={viedo.snippet.title}
        className="ui image"
        src={viedo.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{viedo.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
