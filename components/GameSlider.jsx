import Image from 'next/image'
import React from 'react'
import Slider from "react-slick"
import img1 from '../images/gameLib-img/img1.webp'
import img2 from '../images/gameLib-img/img2.webp'
import img3 from '../images/gameLib-img/img3.webp'
import img4 from '../images/gameLib-img/img4.webp'
import img5 from '../images/gameLib-img/img5.webp'
import img6 from '../images/gameLib-img/img6.webp'
import img7 from '../images/gameLib-img/img7.webp'


const GameSlider = (props) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
      }
      return (
        <Slider {...settings}>
            <div className="gameLib-item">
                <div>
                    <Image src={img1} />
                </div>
                <div>
                    <div className="janr">Жанр игры</div>
                    <div className="gameName">Наёмники</div>
                    <div className="gameDesc">Наемники - это обновленная версия игры Storm Squad с новой системой игры. Игроки делятся на две команды, после чего сражаются друг с другом в серии раундов, по результатам которых выбирается команда-победитель. В арсенале игроков оружие на любой вкус: пистолеты, пистолет-пулемёт, дробовик, автоматические винтовки и лазерный бластер. Игрокам так же доступна игра с ботами, опыт и меткость которых можно настроить в меню. В параметрах игры вы можете настроить уровень жестокости игры под возраст игроков. максимальное количество игроков – 10, количество игровых карт – 10.</div>
                    <div className="gameFull">Читать полностью</div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img2} />
                </div>
                <div>
                    <div className="janr">Жанр игры</div>
                    <div className="gameName">Чистюли</div>
                    <div className="gameDesc">Игра – квест. Команда персонажей-белок отмывает игровые уровни пеной и водой из специальных пушек. Игроки собирают сироп чтобы заправить им телепорт для перехода на другие уровни, где будут ждать новые увлекательные задания. В финальном раунде игрокам предстоит встретиться со злодеем, который пачкал город. 
                    Помогите Зверокоманде спасти и отмыть город от Злого Сиропа!</div>
                    <div className="gameFull">Читать полностью</div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img3} />
                </div>
                <div>
                    <div className="janr">Жанр игры</div>
                    <div className="gameName">Снежки</div>
                    <div className="gameDesc">Команда игроков выполняет задания зверят, например, нарядить снеговика, собрать подарки, поймать вырубщика елок. Противники - снеговики и еноты, которые кидают в игроков снежками. Игроки отстреливаются снежками из пушки, из противников выпадают разные подарки и детали для снеговика. Как только игроки выполнят все задания, то переходят на следующий уровень. В финале ждет главный злодей - Злой Буран. Помогите Зверокоманде победить Злого Бурана, мечтающего испортить зимние праздники!</div>
                    <div className="gameFull">Читать полностью</div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img4} />
                </div>
                <div>
                    <div className="janr">Жанр игры</div>
                    <div className="gameName">Storm Squad</div>
                    <div className="gameDesc">В этой игре сражение происходит в одной из арабских стран на территории высотного здания. По сюжету изначально вы спускаетесь с вертолета на крышу и вам нужно зачищать этажи от монстров. Игра состоит из двух отдельных частей. Сюжет 2-ой части разворачивается в бункере.</div>
                    <div className="gameFull">Читать полностью</div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img5} />
                </div>
                <div>
                    <div className="janr">Жанр игры</div>
                    <div className="gameName">Storm Squad 2</div>
                    <div className="gameDesc">В этой игре мы продолжаем прохождение захваченной монстрами высотки и постепенно спускаемся в бункеры. Команде нужно слаженно проходить каждый уровень и защищать друг друга, чтобы все смогли выбраться живыми.</div>
                    <div className="gameFull">Читать полностью</div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img6} />
                </div>
                <div>
                    <div className="janr">Жанр игры</div>
                    <div className="gameName">Bounce</div>
                    <div className="gameDesc">Bounce - 3d шутер по мотивам вселенной Star Wars, командное сражение в ангаре космического корабля. В этой игре игроков ждет сражение “команда на команду” на площадке космической станции. Тыл команды прикрывают компьютерные боты. Игровой сет длится 90 секунд и заканчивается победой одной из сторон либо истечением времени раунда.</div>
                    <div className="gameFull">Читать полностью</div>
                </div>
            </div>
            <div className="gameLib-item">
                <div>
                    <Image src={img7} />
                </div>
                <div>
                    <div className="janr">Жанр игры</div>
                    <div className="gameName">Painball VR</div>
                    <div className="gameDesc">“Painball VR - это как ЛазерТаг, только круче!” Вторая игра, переносит нас в ангарный отсек первой игры (Bounce). Задача команд остается прежней - победить любой ценой. На базе данной игры проводится Всероссийский турнир “ZAGA - Blast Games”.</div>
                    <div className="gameFull">Читать полностью</div>
                </div>
            </div>
        </Slider>
      )
}

export default GameSlider