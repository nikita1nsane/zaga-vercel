import React from 'react'
import { useAppSelector } from '/hooks/redux'
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
    const {show} = useAppSelector(state => state.UserReducer)
    const {show2} = useAppSelector(state => state.UserReducer)
    const {show3} = useAppSelector(state => state.UserReducer)
    const {show4} = useAppSelector(state => state.UserReducer)
    const {show5} = useAppSelector(state => state.UserReducer)
    const {showFinal} = useAppSelector(state => state.UserReducer)

  return (
    <>
        {  show ? <Form1 classes='form-block active' h2={dataForm[0].h2} h3={dataForm[0].h3} button={dataForm[0].button} buttond={dataForm[0].buttond} mail={dataForm[0].mail} />
          : show2 ? <Form1 classes='form-block active' h2={dataForm[1].h2} h3={dataForm[1].h3} button={dataForm[1].button} buttond={dataForm[1].buttond} />
          : show3 ? <Form1 classes='form-block active' h2={dataForm[2].h2} h3={dataForm[2].h3} button={dataForm[2].button} mail={dataForm[2].mail} buttond={dataForm[2].buttond} />
          : show4 ? <Form1 classes='form-block active' h2={dataForm[3].h2} h3={dataForm[3].h3} button={dataForm[3].button} mail={dataForm[3].mail} buttond={dataForm[3].buttond} city={dataForm[3].city} time={dataForm[3].time} />
          : show5 ? <Form1 classes='form-block active' h2={dataForm[4].h2} h3={dataForm[4].h3} button={dataForm[4].button} buttond={dataForm[4].buttond} mail={dataForm[4].mail} time={dataForm[4].time} />
          : showFinal ? <Form1 classes='form-block active' h2={dataForm[5].h2} h3={dataForm[5].h3} button={dataForm[5].button} />
          : <Form1 classes='form-block' />
        }
        <Header />
        <FirstBlock />
        <VideoBlock />
        <Advantages />
        <WhatIs />
        <Numbers />
        <NewCity />
        <GameLibrary />
        <WorkWithUs />
        {/* <Comments /> */}
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