import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { UserSlice } from '../store/reducers/UserSlice'
import {dataForm} from './dataForm/data'
import Form1 from './forms/Form1'

const NewCity = () => {

    const {show4} = useAppSelector(state => state.UserReducer)
    const {showR4} = UserSlice.actions;
    const dispatch = useAppDispatch();

  return (
    <>
      {show4 ? <Form1 classes='form-block active' h2={dataForm[3].h2} h3={dataForm[3].h3} button={dataForm[3].button} /> : <Form1 classes='form-block' />}
        <div id="new-city">
        <div className="newCity-block">
            <div className="container newCity">
                <div className="newCity-left">
                    <div className="title">Откройте<br className='br-765' /> ZAGA-GAME<br /> в своём городе</div>
                    <div className="h3">
                        ZAGA-GAME - является лидером рынка и крупной сетью VR арен! Узнайте, свободен ли ваш город?
                    </div>
                    <div>
                        <button className="button" onClick={() => dispatch(showR4(true))}>Проверить свой город</button>
                    </div>
                </div>
                <div className="newCity-right">
                    <div className="right-title">Топ свободных городов:</div>
                    <div>
                        <div className="city-list">
                            <span>Санкт-Петербург</span><br />
                            <span>Нижний-Новгород</span><br />
                            <span>Белгород</span><br />
                            <span>Новый уренгой</span><br />
                            <span>Мурманск</span><br />
                            <span>Салехард</span><br />
                            <span>Махачкала</span><br />
                            <span>Оренбург</span><br />
                            <span>Нур-Султан</span><br />
                            <span>и другие</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default NewCity