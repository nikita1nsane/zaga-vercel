import ComSlider from './Slider';
import img1 from '../images/ph_new/dsc1.webp'
import img2 from '../images/ph_new/dsc2.webp'
import img3 from '../images/ph_new/dsc3.webp'

const Photos = () => {

  return (
    <>
      <div id="photos">
      <div className="container photos-block">
            <div className="h2">Наши фотографии</div>
        </div>
        <ComSlider img1={img1} img2={img2} img3={img3} />
      </div>
    </>
  )
}

export default Photos