import logo from '../images/logo.webp'
import Image from 'next/image'
import Form1 from './forms/Form1'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { UserSlice } from '../store/reducers/UserSlice'
import {dataForm} from './dataForm/data'



const Header = () => {

    const {show2} = useAppSelector(state => state.UserReducer)
    const {showR2} = UserSlice.actions;
    const dispatch = useAppDispatch();



  return (
    <>
       
            <header className="container">
                <div className='header'>
                    <div className='header-left'>
                        <div className='header-logo'>
                            <Image src={logo} alt='logo' />
                        </div>
                        <div className='header-logo2'>
                        Франшиза VR-арен<br /> полного погружения
                        </div>
                    </div>
                    <div className='header-right'>
                        <div className='email'>info@zaga-game.com</div>
                        <div className='wa-both'>
                            <div className='header-wa'>
                                <div className="header-wa-text">
                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 30.6414C23.2843 30.6414 30 23.972 30 15.7448C30 7.51769 23.2843 0.848267 15 0.848267C6.71573 0.848267 0 7.51769 0 15.7448C0 23.972 6.71573 30.6414 15 30.6414Z" fill="#25D366"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4944 24.0326H15.4907C13.9979 24.0321 12.5311 23.6601 11.2283 22.9544L6.5 24.1862L7.76538 19.5961C6.98483 18.2527 6.57411 16.7289 6.57478 15.1677C6.57674 10.2838 10.578 6.3103 15.4943 6.3103C17.8804 6.31133 20.1199 7.23381 21.8039 8.90815C23.4879 10.5824 24.4148 12.8079 24.4138 15.1747C24.4119 20.0575 20.4122 24.0306 15.4944 24.0326ZM11.4487 21.3521L11.7194 21.5116C12.8577 22.1824 14.1624 22.5374 15.4927 22.5379H15.4957C19.5818 22.5379 22.9075 19.2351 22.9091 15.1755C22.9099 13.2082 22.1395 11.3585 20.7398 9.96682C19.3402 8.57517 17.4788 7.8084 15.4986 7.80772C11.4094 7.80772 8.08365 11.1102 8.08203 15.1695C8.08146 16.5607 8.4734 17.9155 9.21551 19.0876L9.39178 19.3662L8.64285 22.083L11.4487 21.3521ZM19.9867 17.282C19.931 17.1897 19.7825 17.1343 19.5596 17.0235C19.3367 16.9127 18.241 16.3773 18.0367 16.3034C17.8325 16.2296 17.6838 16.1927 17.5353 16.4142C17.3867 16.6357 16.9596 17.1343 16.8296 17.282C16.6996 17.4297 16.5696 17.4482 16.3468 17.3374C16.1239 17.2266 15.4058 16.9929 14.5545 16.2389C13.892 15.6519 13.4447 14.9272 13.3147 14.7056C13.1847 14.484 13.3008 14.3643 13.4124 14.2539C13.5127 14.1547 13.6353 13.9953 13.7467 13.8661C13.8581 13.7369 13.8953 13.6445 13.9696 13.4969C14.0439 13.3492 14.0067 13.22 13.951 13.1092C13.8953 12.9984 13.4496 11.9089 13.2639 11.4658C13.0829 11.0342 12.8992 11.0926 12.7624 11.0858C12.6326 11.0793 12.4838 11.078 12.3353 11.078C12.1867 11.078 11.9452 11.1334 11.741 11.355C11.5367 11.5766 10.9609 12.112 10.9609 13.2014C10.9609 14.2908 11.7595 15.3433 11.871 15.491C11.9824 15.6387 13.4425 17.8743 15.6782 18.833C16.2099 19.061 16.625 19.1972 16.9487 19.2992C17.4826 19.4677 17.9685 19.4439 18.3524 19.3869C18.7807 19.3234 19.671 18.8515 19.8568 18.3345C20.0424 17.8174 20.0424 17.3743 19.9867 17.282Z" fill="white"/>
                                </svg>
                                <span className='fw-600'>Связаться в WhatsApp</span>
                                </div>
                            </div>
                            <div>
                                <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="4" cy="4.5586" rx="4" ry="3.97242" fill="#8BD073"/>
                                </svg>
                                <span className='color-green'>Сейчас работаем</span>
                                </div>
                        </div>
                        <div className='wa-both'>
                            <div className='phone bold'>8 (800) 500-40-17</div>
                            <div className='order' onClick={() => dispatch(showR2(true))}>Заказать звонок</div>
                        </div>
                    </div>
                </div>
            </header>
            <header>
                <div className='header-bottom'>
                    <div className="container">
                        <nav className='nav'>
                            <div className='nav-item'>Что такое ZAGA-GAME?</div>
                            <div className='nav-item'>Франшиза в цифрах</div>
                            <div className='nav-item'>Работая с нами вы получаете</div>
                            <div className='nav-item'>Отзывы наших партнёров</div>
                        </nav>
                    </div>
                </div>
            </header>
            {show2 ? <Form1 classes='form-block active' h2={dataForm[1].h2} h3={dataForm[1].h3} button={dataForm[1].button} /> : <Form1 classes='form-block' />}
            {/* {show ? <FormFinal classes="form-block form-final active" /> : <FormFinal classes='form-block form-final' />} */}
          
    </>
        
  )
}

export default Header