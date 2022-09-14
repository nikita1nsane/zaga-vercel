import React from 'react'

const Team = () => {
  return (
    <>
        <div className="container team-block">
            <div className="h2">Наша команда</div>
            <div className='flex'>
                <div className='flex-item'>
                    <div className='team-img'></div>
                    <div className='team-post'>Генеральный директор</div>
                    <div className='team-name'>Евгений Исаков</div>
                    <div className='team-mail'>isakov@zaga-game.com</div>
                </div>
                <div className='flex-item'>
                    <div className='team-img'></div>
                    <div className='team-post'>Технический директор</div>
                    <div className='team-name'>Федор Петров</div>
                    <div className='team-mail'>petrov@zaga-game.com</div>
                </div>
                <div className='flex-item'>
                    <div className='team-img'></div>
                    <div className='team-post'>Руководитель по развитию</div>
                    <div className='team-name'>Денис Фатеев</div>
                    <div className='team-mail'>sale@zaga-game.com</div>
                </div>
                <div className='flex-item'>
                    <div className='team-img'></div>
                    <div className='team-post'>Маркетинг и партнёрство</div>
                    <div className='team-name'>Кирилл Николаев</div>
                    <div className='team-mail'>marketing@zaga-game.com</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Team