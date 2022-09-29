import React from 'react'
import { useAppDispatch, useAppSelector } from '/hooks/redux'
import Form1 from './forms/Form1'

import FirstBlock from '../components/FirstBlock'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VideoBlock from '../components/VideoBlock'
import Advantages from '../components/Advantages'
import WhatIs from '../components/WhatIs'
import Numbers from '../components/Numbers'
import NewCity from '../components/NewCity'
import GameLibrary from '../components/GameLibrary'
import WorkWithUs from '../components/WorkWithUs'
import Comments from '../components/Comments'
import Zoom from '../components/Zoom'
import Photos from '../components/Photos'
import Team from '../components/Team'
import Arenas from '../components/Arenas'
import JoinUs from '../components/JoinUs'
import { dataForm } from './dataForm/data'

const MainPage = () => {

    const {show2} = useAppSelector(state => state.UserReducer)

  return (
    <>
         {show2 ? <Form1 classes='form-block active' h2={dataForm[1].h2} h3={dataForm[1].h3} button={dataForm[1].button} /> : <Form1 classes='form-block' />}
         <Header />
        <FirstBlock />
        <VideoBlock />
        <Advantages />
        <WhatIs />
        <Numbers />
        <NewCity />
        <GameLibrary />
        <WorkWithUs />
        <Comments />
        <Zoom />
        <Photos />
        <Team />
        <Arenas />
        <JoinUs />
        <Footer />
    </>
  )
}

export default MainPage