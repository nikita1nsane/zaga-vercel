import img from '../images/photos-slider.webp'
import dynamic from 'next/dynamic';

const Photos = () => {

  const ComSlider = dynamic(() => import('./Slider'), {
    ssr: false,
  });

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