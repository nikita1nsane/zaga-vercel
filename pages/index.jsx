import {Provider} from 'react-redux'
import { setupStore } from "../store/store"

import dynamic from "next/dynamic"
 


function HomePage() {

    const store = setupStore();
    const Header = dynamic(() => import('../components/Header'), {
        ssr: false,
      });
      const FirstBlock = dynamic(() => import('../components/FirstBlock'), {
        ssr: false,
      });
      const VideoBlock = dynamic(() => import('../components/VideoBlock'), {
        ssr: false,
      });
      const Advantages = dynamic(() => import('../components/Advantages'), {
        ssr: false,
      });
      const WhatIs = dynamic(() => import('../components/WhatIs'), {
        ssr: false,
      });
      const Numbers = dynamic(() => import('../components/Numbers'), {
        ssr: false,
      });
      const NewCity = dynamic(() => import('../components/NewCity'), {
        ssr: false,
      });
      const GameLibrary = dynamic(() => import('../components/GameLibrary'), {
        ssr: false,
      });
      const WorkWithUs = dynamic(() => import('../components/WorkWithUs'), {
        ssr: false,
      });
      const Comments = dynamic(() => import('../components/Comments'), {
        ssr: false,
      });
      const Zoom = dynamic(() => import('../components/Zoom'), {
        ssr: false,
      });
      const Photos = dynamic(() => import('../components/Photos'), {
        ssr: false,
      });
      const Team = dynamic(() => import('../components/Team'), {
        ssr: false,
      });
      const Arenas = dynamic(() => import('../components/Arenas'), {
        ssr: false,
      });
      const JoinUs = dynamic(() => import('../components/JoinUs'), {
        ssr: false,
      });
      const Footer = dynamic(() => import('../components/Footer'), {
        ssr: false,
      });

    return (
        <>
            <Provider store={store}>
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
            </Provider>
        </>
    )
  }
  
  export default HomePage