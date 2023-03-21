import React from "react";
import YouTube from "react-youtube";

const ContentPlayer = ({ meditationId }) => {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <YouTube
      style={{ width: "90%", height: "100%" }}
      videoId={meditationId}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
};

export default ContentPlayer;
