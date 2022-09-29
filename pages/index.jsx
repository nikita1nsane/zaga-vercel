import {Provider} from 'react-redux'
import { setupStore } from "../store/store"
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
import MainPage from '../components/MainPage'
 


function HomePage() {

    const store = setupStore();

    return (
        <>
            <Provider store={store}>
                <MainPage>
                    {/* <Header />
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
                    <Footer /> */}
                </MainPage>
            </Provider>
        </>
    )
  }
  
  export default HomePage