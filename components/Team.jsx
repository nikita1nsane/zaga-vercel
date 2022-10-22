import React from 'react'

const Team = () => {
  return (
    <>
        <div id="team">
        <div className="container team-block">
            <div className="h2">Наша команда</div>
            <div className='flex'>
                <div className='flex-item'>
                    <div className='team-img'></div>
                    <div className='team-post'>Генеральный директор</div>
                    <div className='team-name'>Евгений Исаков</div>
                    <div className='team-mail' ><a href="mailto:isakov@zaga-game.com">isakov@zaga-game.com</a></div>
                </div>
                <div className='flex-item'>
                    <div className='team-img'></div>
                    <div className='team-post'>Технический директор</div>
                    <div className='team-name'>Федор Петров</div>
                    <div className='team-mail' ><a href="mailto:petrov@zaga-game.com">petrov@zaga-game.com</a></div>
                </div>
                <div className='flex-item'>
                    <div className='team-img'></div>
                    <div className='team-post'>Руководитель по развитию</div>
                    <div className='team-name'>Денис Фатеев</div>
                    <div className='team-mail' ><a href="mailto:sale@zaga-game.com">sale@zaga-game.com</a></div>
                </div>
                <div className='flex-item'>
                    <div className='team-img'></div>
                    <div className='team-post'>Маркетинг и партнёрство</div>
                    <div className='team-name'>Кирилл Николаев</div>
                    <div className='team-mail' ><a href="mailto:marketing@zaga-game.com">marketing@zaga-game.com</a></div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Team