import Image from "next/image"
import video from '../images/video-block.png'

const VideoBlock = () => {
  return (
    <>
        <div className="container video-block">
            <Image src={video} alt='video' />
        </div>
    </>
  )
}

export default VideoBlock