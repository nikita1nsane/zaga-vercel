import ComSlider from "./Slider"
import video from '../images/video-block.png'


const Comments = () => {
  return (
    <>
        <div className="container comments-block" id="comments">
            <div className="h2">Отзывы наших партнеров</div>
        </div>
        <ComSlider img={video} />
        
    </>
  )
}

export default Comments