import ComSlider from "./Slider"
import img from '../images/photos-slider.webp'

const Photos = () => {
  return (
    <>
        <div className="container photos-block">
            <div className="h2">Наши фотографии</div>
        </div>
        <ComSlider img={img} />
    </>
  )
}

export default Photos