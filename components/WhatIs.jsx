import Image from "next/image"
import img1 from '../images/whatis-img.webp'

const WhatIs = () => {
  return (
    <>
        <div className="whatIs-block container" id="whatIs">
            <div className="h2"><span>Что такое ZAGA-GAME?</span></div>
            <div className="h3">
                <span className="fw-400"><span className="fw-500">VR-АРЕНА ZAGA GAME</span> – это арена виртуальной реальности полного погружения <span className="fw-700">без ПАУШАЛЬНЫХ ВЗНОСОВ</span> и <span className="fw-700">РОЯЛТИ</span>. Движения в реальном мире на площади от 100м<sup><small>2</small></sup> до<br /> 648 м<sup><small>2</small></sup> полностью переносятся в виртуальную реальность!</span>
            </div>
            <div className="whatIs-content">
                <div className="whatIs-left">
                    <div className="whatIs-item">
                        <div className="whatIs-number">
                            <span className="color-red fw-700 fz-18">1.</span>
                        </div>
                        <div className="whatIs-text">
                            <span className="gilroy-700">Открытие под брендом ZAGA-GAME или же под своим. Бесплатно!</span><br />
                            <span className="gilroy-400">Мы не ограничиваем вас ни на одном из этапов. Вы сами можете решить открываться под нашим брендом или под своим</span>
                        </div>
                    </div>
                    <div className="whatIs-item">
                        <div className="whatIs-number">
                            <span className="color-red fw-700 fz-18">2.</span>
                        </div>
                        <div className="whatIs-text">
                            <span className="gilroy-700">Захватывающие игры без проводов!</span><br />
                            <span className="gilroy-400">Ничто не сковывает движение игроков, поскольку они используют только беспроводной шлем VR и удобные бластеры нового поколения</span>
                        </div>
                    </div>
                    <div className="whatIs-item">
                        <div className="whatIs-number">
                            <span className="color-red fw-700 fz-18">3.</span>
                        </div>
                        <div className="whatIs-text">
                            <span className="gilroy-700">Регулярные обновления</span><br />
                            <span className="gilroy-400">Благодаря регулярным обновлениям линеек игр, арены наших партнёров стабильно показываются 70% повторных посетителей!</span>
                        </div>
                    </div>
                    <div className="whatIs-item">
                        <div className="whatIs-number">
                            <span className="color-red fw-700 fz-18">4.</span>
                        </div>
                        <div className="whatIs-text">
                            <span className="gilroy-700">Бессрочная поддержка на всех этапах</span><br />
                            <span className="gilroy-400">Фокусируемся на бесперебойную работу и успешность наших партнёров</span>
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