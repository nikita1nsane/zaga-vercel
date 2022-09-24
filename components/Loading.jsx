import Image from 'next/image'
import React from 'react'
import preloader from '../images/preloader.gif'


const Loading = () => {
  return (
    <Image src={preloader} layout='fill' />
  )
}

export default Loading