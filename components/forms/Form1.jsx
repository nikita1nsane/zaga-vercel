import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { UserSlice } from '../../store/reducers/UserSlice'
import FormFinal from './FormFinal';
import InputMask from "react-input-mask";


const Form1 = (props) => {

    const {showR} = UserSlice.actions;
    const {showR2} = UserSlice.actions;
    const {showR3} = UserSlice.actions;
    const {showR4} = UserSlice.actions;
    const {showR5} = UserSlice.actions;
    const {showRFinal} = UserSlice.actions;
    const {showFinal} = useAppSelector(state => state.UserReducer)
    const dispatch = useAppDispatch();


    const func = () => {
        dispatch(showR(false))
        dispatch(showR2(false))
        dispatch(showR3(false))
        dispatch(showR4(false))
        dispatch(showR5(false))
        dispatch(showRFinal(false))
    }

    function func2(e) {
        e.preventDefault();
        dispatch(showRFinal(true))
    }

  return (
    <>
        <div className={props.classes}>
        <div className="close-form" onClick={() => func()}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3894 0.609395C18.5769 -0.203132 17.2594 -0.203132 16.4482 0.609395L9.99955 7.05891L3.55087 0.609395C2.73834 -0.203132 1.4222 -0.203132 0.609673 0.609395C-0.202853 1.42192 -0.202853 2.73806 0.609673 3.55059L7.05835 9.99983L0.609395 16.4493C-0.203132 17.2619 -0.203132 18.578 0.609395 19.3905C1.01552 19.7967 1.54782 20 2.08013 20C2.61244 20 3.1453 19.7969 3.55087 19.3905L9.99955 12.9413L16.4482 19.3905C16.8544 19.7967 17.3867 20 17.919 20C18.4513 20 18.9833 19.7969 19.3897 19.3905C20.2022 18.578 20.2022 17.2619 19.3897 16.4493L12.9407 10.0001L19.3894 3.55087C20.2019 2.73834 20.2019 1.42192 19.3894 0.609395Z" fill="#E32966"/>
            </svg>
        </div>
        <div className="form">
            <div className="pos-r">
                {props.h2}
                {props.h3}
                <form action="" onSubmit={func2}>
                    <div className="flex">
                        <input type="text" placeholder='Как к вам обращаться?' />
                        <InputMask mask="+7 (999) 999-99-99" placeholder={`Ваш номер телефона*`} />
                    </div>
                    {props.mail}
                    {props.city}
                    {props.time}

                    <div className="text">
                        <span>Отправляя форму, вы соглашаетесь с <a href="" className='policy'>политикой конфиденциальности</a></span>
                    </div>
                    {props.button}
                </form>
            </div>
        </div>
        </div>
        {showFinal ? <FormFinal classes='form-block active form-final'/> : <FormFinal classes='form-block' />}
    </>
  )
}

export default Form1