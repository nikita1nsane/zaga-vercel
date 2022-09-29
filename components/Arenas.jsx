import Image from "next/image"
import map from '../images/full-map.webp'

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
            <div className="h3 h3-title">По всей России и СНГ у нас открыто уже 23 арены, до<br /> конца 2022 года планируются открыть 40 арен.<br /> Следующая арена может быть и в вашем городе!</div>
            <div className="map-flex">
                <div className="map-img">
                    <Image src={map} />
                </div>
                <div className="arenas-right">
                    <div className="arenas-right-flex">
                        <div className="h3">Города, в которых есть наша арена:</div>
                        <div className="arenas-flex">
                            <Link href='https://vrarta.ru/'><div className="arenas-city-yes">Тверь</div></Link>
                            <Link href='http://vrzoneglazov.tilda.ws/'><div className="arenas-city-yes">Глазов</div></Link>
                            <Link href='https://pixel-game.ru/'><div className="arenas-city-yes">Ярославль</div></Link>
                            <Link href='https://unitedgamers70.ru/zaga/'><div className="arenas-city-yes">Томск</div></Link>
                            <Link href='https://ulan-ude.zaga-game.ru/'><div className="arenas-city-yes">Улан-Удэ</div></Link>
                            <Link href='https://taldyikorgan.zaga-game.ru/'><div className="arenas-city-yes">Талдыкорган</div></Link>
                            <Link href='https://vrn.zaga-game.ru/'k><div className="arenas-city-yes">Воронеж</div></Link>
                            <Link href='https://ekb.zaga-game.ru/'><div className="arenas-city-yes">Екатеринбург</div></Link>
                            <Link href='https://www.instagram.com/game_emerald_city/'><div className="arenas-city-yes">Нижний Новгород</div></Link>
                            <Link href='https://vr-real.ru/'><div className="arenas-city-yes">Москва</div></Link>
                            <Link href='https://vrmatrixnsk.ru/'><div className="arenas-city-yes">Новосибирск</div></Link>
                            <Link href='https://kld.zaga-game.ru/'><div className="arenas-city-yes">Калининград</div></Link>
                            <Link href='https://astrakhan.zaga-game.ru/'><div className="arenas-city-yes">Астрахань</div></Link>
                            <Link href='/'><div className="arenas-city-yes">Бобруйск</div></Link>
                            <Link href='https://extremetactical.co.il/%D7%90%D7%A7%D7%A1%D7%98%D7%A8%D7%99%D7%9D-vr-%D7%9C%D7%95%D7%97%D7%9E%D7%94-%D7%91%D7%9E%D7%A6%D7%99%D7%90%D7%95%D7%AA-%D7%9E%D7%93%D7%95%D7%9E%D7%94/'><div className="arenas-city-yes">Израиль</div></Link>
                            <Link href=''><div className="arenas-city-yes">Михельсон</div></Link>
                            <Link href=''><div className="arenas-city-yes">Волоколамск</div></Link>
                            <Link href=''><div className="arenas-city-yes">Воскресенск</div></Link>
                            <Link href=''><div className="arenas-city-yes">Душанбе</div></Link>
                            <Link href=''><div className="arenas-city-yes">Анапа</div></Link>
                            <Link href=''><div className="arenas-city-yes">Волгодонск</div></Link>
                            <Link href=''><div className="arenas-city-yes">Тихорецк</div></Link>
                            <Link href='https://vk.com/mir_vr_86'><div className="arenas-city-yes">Нефтеюганск</div></Link>
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