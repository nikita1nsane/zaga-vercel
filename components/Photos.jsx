import img from '../images/photos-slider.webp'
import ComSlider from './Slider';

const Photos = () => {

  return (
    <>
      <div id="photos">
      <div className="container photos-block">
            <div className="h2">Наши фотографии</div>
        </div>
        <ComSlider img={img} />
      </div>
    </>
  )
}

export default Photos