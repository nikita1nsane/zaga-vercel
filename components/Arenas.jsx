import Image from "next/image"
import map from '../images/full-mapwithoutdots.webp'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { UserSlice } from '../store/reducers/UserSlice'
import {dataForm} from './dataForm/data'
import Form1 from './forms/Form1'
import Link from "next/link"

const Arenas = () => {

    const {show4} = useAppSelector(state => state.UserReducer)
    const {showR4} = UserSlice.actions;
    const dispatch = useAppDispatch();

  return (
    <>
      {/* {show4 ? <Form1 classes='form-block active' h2={dataForm[3].h2} h3={dataForm[3].h3} button={dataForm[3].button} /> : <Form1 classes='form-block' />} */}
        <div id="arenas">
        <div className="container arenas-block">
            <div className="h2">ZAGA-GAME Арены</div>
            <div className="h3 h3-title">По всей России и СНГ у нас открыто уже 30 арен, до<br /> конца 2023 года планируются открыть 40 арен.<br /> Следующая арена может быть и в вашем городе!</div>
            <div className="map-flex">
                <div className="map-img">
                <svg width="390" height="272" viewBox="0 0 390 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="329" cy="48" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="120" cy="216" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="110" cy="162" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="112" cy="148" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="110" cy="146" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="116" cy="132" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="216" cy="67" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="222" cy="113" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="297" cy="193" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="262" cy="4" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="262" cy="152" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="81" cy="111" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="57" cy="148" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="85" cy="218" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="132" cy="148" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="262" cy="71" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower animate__delay-2s"/>
                    <circle cx="85" cy="268" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                    <circle cx="94" cy="203" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                    <circle cx="77" cy="166" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                    <circle cx="4" cy="147" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                    <circle cx="258" cy="71" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                    <circle cx="234" cy="115" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                    <circle cx="220" cy="138" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                    <circle cx="325" cy="61" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                    <circle cx="386" cy="155" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                    <circle cx="116" cy="111" r="2" stroke="#E32966" strokeWidth="3" className="animate__animated animate__flash animate__infinite	infinite animate__slower"/>
                </svg>
                    <Image src={map} />
                </div>
                <div className="arenas-right">
                    <div className="arenas-right-flex">
                        <div className="h3">Города, в которых есть наша арена:</div>
                        <div className="arenas-flex">
                            <a target='_blank' href='https://kld.zaga-game.ru/'><div className="arenas-city-yes">Калининград</div></a>
                            <a target='_blank' href='https://yandex.ru/maps/-/CCUjJ8GjoB'><div className="arenas-city-yes">Бобруйск</div></a>
                            <a target='_blank' href='https://vrn.zaga-game.ru/'><div className="arenas-city-yes">Воронеж</div></a>
                            <a target='_blank' href='https://vr-vdonsk.ru/'><div className="arenas-city-yes">Волгодонск</div></a>
                            <a target='_blank' href='https://astrakhan.zaga-game.ru/'><div className="arenas-city-yes">Астрахань</div></a>
                            <a target='_blank' href='https://extremetactical.co.il/אקסטרים-vr-לוחמה-במציאות-מדומה/'><div className="arenas-city-yes">Хаифа</div></a>
                            <a target='_blank' href='vladikavkaz.zaga-game.ru'><div className="arenas-city-yes">Владикавказ</div></a>
                            <a target='_blank' href='https://mistypark71.ru/'><div className="arenas-city-yes">Тула</div></a>
                            <a target='_blank' href='https://msk.parkvr1.ru/'><div className="arenas-city-yes">Москва (Каховка)</div></a>
                            <a target='_blank' href='https://vr-real.ru/'><div className="arenas-city-yes">Москва (Новокосинская)</div></a>
                            <a target='_blank' href='https://vrarta.ru/'><div className="arenas-city-yes">Тверь</div></a>
                            <a target='_blank' href='https://pixel-game.ru/'><div className="arenas-city-yes">Ярославль (Тутаевское ш.)</div></a>
                            <a target='_blank' href='https://pixel-game.ru/'><div className="arenas-city-yes">Ярославль (Дорожная)</div></a>
                            <a target='_blank' href='kotlas.zaga-game.ru'><div className="arenas-city-yes">Котлас</div></a>
                            <a target='_blank' href='http://vrzoneglazov.tilda.ws/'><div className="arenas-city-yes">Глазов</div></a>
                            <a target='_blank' href='https://instagram.com/game_emerald_city'><div className="arenas-city-yes">Сосновское</div></a>
                            <a target='_blank' href='saransk.zaga-game.ru'><div className="arenas-city-yes">Саранск</div></a>
                            <a target='_blank' href='omsk.zaga-game.ru'><div className="arenas-city-yes">Омск</div></a>
                            <a target='_blank' href='https://ekb.parkvr1.ru/'><div className="arenas-city-yes">Екатеринбург (Сулимова)</div></a>
                            <a target='_blank' href='https://ekb.zaga-game.ru/'><div className="arenas-city-yes">Екатеринбург (Сибирский тракт)</div></a>
                            <a target='_blank' href='https://vrmatrixnsk.ru/'><div className="arenas-city-yes">Новосибирск</div></a>
                            <a target='_blank' href='abakan.zaga-game.ru'><div className="arenas-city-yes">Абакан</div></a>
                            <a target='_blank' href='belovo.zaga-game.ru'><div className="arenas-city-yes">Белово</div></a>
                            <a target='_blank' href='kansk.zaga-game.ru'><div className="arenas-city-yes">Канск</div></a>
                            <a target='_blank' href='krasnoyarsk.zaga-game.ru'><div className="arenas-city-yes">Красноярск</div></a>

                            {/* <a target='_blank' href='https://unitedgamers70.ru/zaga/'><div className="arenas-city-yes">Томск</div></a>
                            <a target='_blank' href='https://ulan-ude.zaga-game.ru/'><div className="arenas-city-yes">Улан-Удэ</div></a>
                            <a target='_blank' href='https://taldyikorgan.zaga-game.ru/'><div className="arenas-city-yes">Талдыкорган</div></a>
                            <a target='_blank' href='https://www.instagram.com/game_emerald_city/'><div className="arenas-city-yes">Нижний Новгород</div></a>
                            <a target='_blank' href='https://extremetactical.co.il/%D7%90%D7%A7%D7%A1%D7%98%D7%A8%D7%99%D7%9D-vr-%D7%9C%D7%95%D7%97%D7%9E%D7%94-%D7%91%D7%9E%D7%A6%D7%99%D7%90%D7%95%D7%AA-%D7%9E%D7%93%D7%95%D7%9E%D7%94/'><div className="arenas-city-yes">Израиль</div></a>
                            <a target='_blank' href='dushanbe.zaga-game.ru'><div className="arenas-city-yes">Душанбе</div></a>
                            <a target='_blank' href='taldykorgan.zaga-game.ru'><div className="arenas-city-yes">Талдыкорган</div></a>
                            <a target='_blank' href='yakutsk.zaga-game.ru'><div className="arenas-city-yes">Якутск</div></a>
                            <a target='_blank' href='ulan-ude.zaga-game.ru'><div className="arenas-city-yes">Улан-Удэ</div></a>
                            <a target='_blank' href='https://vk.com/mir_vr_86'><div className="arenas-city-yes">Нефтеюганск</div></a> */}
                        </div>
                    </div>
                    <div className="arenas-right-flex">
                        <div className="h3">Топ свободных городов:</div>
                        <div className="arenas-flex">
                            <div className="arenas-city-no">Санкт-Петербург</div>
                            <div className="arenas-city-no">Мурманск</div>
                            <div className="arenas-city-no">Белгород</div>
                            <div className="arenas-city-no">Нижний-Новгород</div>
                            <div className="arenas-city-no">Новый уренгой</div>
                            <div className="arenas-city-no">Махачкала</div>
                            <div className="arenas-city-no">Салехард</div>
                            <div className="arenas-city-no">Оренбург</div>
                            <div className="arenas-city-no">Нур-Султан</div>
                            <div className="arenas-city-no">и другие</div>
                        </div>
                    </div>
                    <div className="arenas-button">
                    <button className="button" onClick={() => dispatch(showR4(true))}>Проверить свой город</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Arenas