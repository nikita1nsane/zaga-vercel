import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { UserSlice } from '../../store/reducers/UserSlice'
import FormFinal from './FormFinal';
import InputMask from "react-input-mask";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';


const Form1 = (props) => {

    const {showR} = UserSlice.actions;
    const {showR2} = UserSlice.actions;
    const {showR3} = UserSlice.actions;
    const {showR4} = UserSlice.actions;
    const {showR5} = UserSlice.actions;
    const {showRFinal} = UserSlice.actions;
    const {showFinal} = useAppSelector(state => state.UserReducer)
    const dispatch = useAppDispatch();
    const API_PATH = 'https://zaga-osnova.vercel.app/api/b24Sender.php'



    const func = () => {
        dispatch(showR(false))
        dispatch(showR2(false))
        dispatch(showR3(false))
        dispatch(showR4(false))
        dispatch(showR5(false))
        dispatch(showRFinal(false))
    }

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    function func2(e) {
        e.preventDefault();
        dispatch(showRFinal(true));
        ym(88105763,'reachGoal','zakaz');
        let dataСollection = new FormData(e.target);
        // let sendData = fetchData("/components/scripts/site.app/bitrix24/b24Sender.php", dataСollection);
        const data = {
            name,
            phone,
            email
        }
        axios({
            method: 'post',
            url: '/api/b24Sender',
            headers: { 'content-type': 'application/json' },
            data: data,
        }).then(result => {
            console.log(result.data);
        }).catch(error => console.log(error.message))
        fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setName('')
            setPhone('')
        }
        })
    }

    const [phonik, setPhonik] = useState('')
    const [phonikDirty, setPhonikDirty] = useState(false)
    const [phonikError, setPhonikError] = useState('Поле с номером не заполнено')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (phonikError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [phonikError])

    const phonikHandler = (e) => {
        setPhonik(e.target.value);
        setPhone(e.target.value);
        if (e.target.selectionEnd < 18) {
            setPhonikError('Поле с номером не заполнено')
        } else {
            setPhonikError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'phone':
                setPhonikDirty(true)
                break
        }
    }

    /**
 * Getting and Transforming Form Data
 * @param {*} form
 * @returns data
 */
let getData = (form) => {
    const inputs = form.querySelectorAll('input');
    let data = {
        t_typ,
        t_src,
        t_mdm,
        t_cmp,
        t_cnt,
        t_trm,
        t_vst,
        t_pgs,
        t_afd,
        t_cpg,
        t_uag,
        gid: getCookie_MW("_ga"),
        yid: getCookie_MW("_ym_uid"),
        from_page: window.location.href,
    };
    let key;
    let val;

    for (let i = 0; i < inputs.length; i++) {
        key = inputs[i].getAttribute('name');
        val = inputs[i].value;
        data[key] = val;
    }

    return data;
}
let fetchData = (url, d) => {
    fetch(url, {
			method: "POST",
			body: d,
		})
        .then((response) => response.json())
        .then((data) => {
            console.log("Success: ", data)
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
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
                
                <form action="" className='forma' onSubmit={func2}>
                    <div className="flex">
                        <input type="text" placeholder='Как к вам обращаться?' name="name" onChange={(e)=>{setName(e.target.value)}} />
                        
                        <InputMask onChange={e => phonikHandler(e)} className={(phonikDirty && phonikError) ? 'ne-norm' : 'norm' } name='phone' type='phone' value={phonik} onBlur={e => blurHandler(e)} mask="+7 (999) 999-99-99"  maskChar={null} placeholder={`Ваш номер телефона*`} />
                    </div>
                    <input onChange={(e) =>{setEmail(e.target.value)}} type="email" name="mail" placeholder='E-mail для отправки материалов' />
                    {props.city}
                    {props.time}

                    <div className="text">
                        <span>Отправляя форму, вы соглашаетесь с <Link href="/policy"><a политикой className='policy'>политикой конфиденциальности</a></Link></span>
                    </div>
                    {!formValid ? props.buttond : props.button}
                </form>
            </div>
        </div>
        </div>
        {showFinal ? <FormFinal classes='form-block active form-final'/> : <FormFinal classes='form-block' />}
    </>
  )
}

export default Form1