import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { UserSlice } from '../store/reducers/UserSlice'
import {dataForm} from './dataForm/data'
import Form1 from './forms/Form1'

const Zoom = () => {

    const {show5} = useAppSelector(state => state.UserReducer)
    const {showR5} = UserSlice.actions;
    const dispatch = useAppDispatch();

  return (
    <>
      {/* {show5 ? <Form1 classes='form-block active' h2={dataForm[4].h2} h3={dataForm[4].h3} button={dataForm[4].button} /> : <Form1 classes='form-block' />} */}
        <div id="zoom">
        <div className="container zoom-block">
            <div>
                <div className="bg-img pos-r">
                    {/* <div className="pos-aa">
                        <span className="gendir">Генеральный директор</span><br />
                        <span className="gendir-name">Евгений Исаков</span>
                    </div> */}
                </div>
            </div>
            <div className="zoom-right">
                <div className="h2">Запишитесь на встречу или звонок в Zoom</div>
                <div className="h3">Поможем с подбором и анализом помещения в вашем городе. Пердоставим чек-лист для подбора помещения и предложим свои варианты.</div>
                <div className="zoom-button">
                    <button className="button" onClick={() => dispatch(showR5(true))}>Записаться на встречу или звонок</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Zoom