

const NewCity = () => {
  return (
    <>
        <div className="newCity-block">
            <div className="container newCity">
                <div className="newCity-left">
                    <div className="title">Откройте ZAGA-GAME<br /> в своём городе</div>
                    <div className="h3">
                        ZAGA-GAME - является лидером рынка и крупной сетью VR арен! Узнайте, свободен ли ваш город?
                    </div>
                    <div>
                        <button className="button">Проверить свой город</button>
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
    </>
  )
}

export default NewCity