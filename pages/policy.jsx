import React from 'react'
import { Provider } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PolicyBlock from '../components/PolicyBlock'
import { setupStore } from "../store/store"

const Policy = () => {
    const store = setupStore();
  return (
    <>
        <Provider store={store}>
            <Header />
            <PolicyBlock />
            <Footer />
        </Provider>
    </>
  )
}

export default Policy