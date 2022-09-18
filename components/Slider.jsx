import Image from 'next/image'
import React from 'react'
import Slider from "react-slick"


const ComSlider = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0%",
        responsive: [
          {
              breakpoint: 766,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows: false
              }
          },
      ]
      }
      return (
        <Slider {...settings}>
          <div>
            <Image src={props.img} />
          </div>
          <div>
            <Image src={props.img} />
          </div>
          <div>
            <Image src={props.img} />
          </div>
        </Slider>
      )
}

export default ComSlider