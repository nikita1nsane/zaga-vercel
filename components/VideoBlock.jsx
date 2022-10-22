import YouTube from 'react-youtube'

const VideoBlock = () => {

    const onPlayerReady = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  
    const opts = {
      height: '474px',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };


  return (
    <>
      <div id="video">
        <div className="container video-block">
        <YouTube videoId="uBQMH3vyvRM" opts={opts} onReady={onPlayerReady} />
        </div>
      </div>
    </>
  )
}

export default VideoBlock