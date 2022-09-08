import Image from "next/image"
import img1 from '../images/whatis-img.webp'

const WhatIs = () => {
  return (
    <>
        <div className="whatIs-block container">
            <div className="h2"><span>Что такое ZAGA-GAME?</span></div>
            <div className="h3">
                <span>VR-АРЕНА ZAGA GAME – это арена виртуальной реальности полного погружения без ПАУШАЛЬНЫХ ВЗНОСОВ и РОЯЛТИ. Движения в реальном мире на площади от 100м2 до 648 м2 полностью переносятся в виртуальную реальность!</span>
            </div>
            <div className="whatIs-content">
                <div className="whatIs-left">
                    <div className="whatIs-item">
                        <div className="whatIs-number">
                            <span className="color-red">1.</span>
                        </div>
                        <div className="whatIs-text">
                            <span className="gilroy-700">Открытие под брендом ZAGA-GAME или же под своим. Бесплатно!</span><br />
                            <span className="gilroy-500">Мы не ограничиваем вас ни на одном из этапов. Вы сами можете решить открываться под нашим брендом или под своим</span>
                        </div>
                    </div>
                    <div className="whatIs-item">
                        <div className="whatIs-number">
                            <span className="color-red">2.</span>
                        </div>
                        <div className="whatIs-text">
                            <span className="gilroy-700">Захватывающие игры без проводов!</span><br />
                            <span className="gilroy-500">Ничто не сковывает движение игроков, поскольку они используют только беспроводной шлем VR и удобные бластеры нового поколения</span>
                        </div>
                    </div>
                    <div className="whatIs-item">
                        <div className="whatIs-number">
                            <span className="color-red">3.</span>
                        </div>
                        <div className="whatIs-text">
                            <span className="gilroy-700">Регулярные обновления</span><br />
                            <span className="gilroy-500">Благодаря регулярным обновлениям линеек игр, арены наших партнёров стабильно показываются 70% повторных посетителей!</span>
                        </div>
                    </div>
                    <div className="whatIs-item">
                        <div className="whatIs-number">
                            <span className="color-red">4.</span>
                        </div>
                        <div className="whatIs-text">
                            <span className="gilroy-700">Бессрочная поддержка на всех этапах</span><br />
                            <span className="gilroy-500">Фокусируемся на бесперебойную работу и успешность наших партнёров</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="whatIs-right">
                        <Image src={img1} alt='img' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhatIs