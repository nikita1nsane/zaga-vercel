import Image from "next/image"
import map from '../images/map.png'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { UserSlice } from '../store/reducers/UserSlice'
import {dataForm} from './dataForm/data'
import Form1 from './forms/Form1'

const Arenas = () => {

    const {show4} = useAppSelector(state => state.UserReducer)
    const {showR4} = UserSlice.actions;
    const dispatch = useAppDispatch();

  return (
    <>
      {show4 ? <Form1 classes='form-block active' h2={dataForm[3].h2} h3={dataForm[3].h3} button={dataForm[3].button} /> : <Form1 classes='form-block' />}
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
                            <div className="arenas-city-yes">Тверь</div>
                            <div className="arenas-city-yes">Глазов</div>
                            <div className="arenas-city-yes">Ярославль</div>
                            <div className="arenas-city-yes">Томск</div>
                            <div className="arenas-city-yes">Улан-Удэ</div>
                            <div className="arenas-city-yes">Талдыкорган</div>
                            <div className="arenas-city-yes">Воронеж</div>
                            <div className="arenas-city-yes">Екатеринбург</div>
                            <div className="arenas-city-yes">Нижний Новгород</div>
                            <div className="arenas-city-yes">Москва</div>
                            <div className="arenas-city-yes">Новосибирск</div>
                            <div className="arenas-city-yes">Калининград</div>
                            <div className="arenas-city-yes">Астрахань</div>
                            <div className="arenas-city-yes">Бобруйск</div>
                            <div className="arenas-city-yes">Израиль</div>
                            <div className="arenas-city-yes">Михельсон</div>
                            <div className="arenas-city-yes">Волоколамск</div>
                            <div className="arenas-city-yes">Воскресенск</div>
                            <div className="arenas-city-yes">Душанбе</div>
                            <div className="arenas-city-yes">Анапа</div>
                            <div className="arenas-city-yes">Волгодонск</div>
                            <div className="arenas-city-yes">Тихорецк</div>
                            <div className="arenas-city-yes">Нефтеюганск</div>
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
    </>
  )
}

export default Arenas