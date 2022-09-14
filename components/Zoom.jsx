import Image from "next/image"
import img1 from '../images/zoom-img.webp'

const Zoom = () => {
  return (
    <>
        <div className="container zoom-block">
            <div>
                <div className="bg-img pos-r">
                    <div className="pos-aa">
                        <span className="gendir">Генеральный директор</span><br />
                        <span className="gendir-name">Евгений Исаков</span>
                    </div>
                </div>
            </div>
            <div className="zoom-right">
                <div className="h2">Запишитесь на встречу или звонок в Zoom</div>
                <div className="h3">Поможем с подбором и анализом помещения в вашем городе. Пердоставим чек-лист для подбора помещения и предложим свои варианты.</div>
                <div>
                    <button className="button">Записаться на встречу или звонок</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Zoom