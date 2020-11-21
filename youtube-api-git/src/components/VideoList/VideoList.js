import React from "react";
import VideoListItem from "./VideoListItem/VideoListItem";
const VideoList = (props) => {
  const videoItems = props.videos.map((video, index) => {
    // console.log("video", video);
    return (
      <VideoListItem
        // take the prop coming from VideoList and pass it to VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    );
  });
  return (
    <div className="col-md-4">
      <ul className="list-group">{videoItems}</ul>
    </div>
  );
};

export default VideoList;
