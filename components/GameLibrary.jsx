
import GameSlider from './GameSlider';

const GameLibrary = () => {

  return (
    <>
      <div id="game-lib">
      <div className="container game-lib-block" id="gameLib">
            <div className="h2">Библиотека игр</div>
            <div className="h3 fw-400">В нашей библиотеке представлены 7 игр и 28 локаций</div>
            <div className="gameLib-sliders">
                <GameSlider />
            </div>
        </div>
      </div>
    </>
  )
}

export default GameLibrary