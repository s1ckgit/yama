import { useRef, useState } from 'react';
import './App.css';
import './App2.css';
import TABLETOP from './assets/table-top.png';
import TABLEBOTTOM from './assets/table-bottom.png';

function App() {
  const [page, setPage] = useState('2');

  const tableTopRef = useRef<HTMLImageElement>(null);
  const tableTopRef2 = useRef<HTMLImageElement>(null);

  const onUp = () => {
    if(tableTopRef.current) {
      requestAnimationFrame(() => {
        tableTopRef.current?.classList.remove('animation-down');
        tableTopRef.current?.classList.add('animation-up');
      })
    }
  }

  const onDown = () => {
    requestAnimationFrame(() => {
      tableTopRef.current?.classList.remove('animation-up');
      tableTopRef.current?.classList.add('animation-down');
    })
  }

  const onUp2 = () => {
    if(tableTopRef.current) {
      requestAnimationFrame(() => {
        tableTopRef2.current?.classList.remove('animation-down');
        tableTopRef2.current?.classList.add('animation-up');
      })
    }
  }

  const onDown2 = () => {
    requestAnimationFrame(() => {
      tableTopRef2.current?.classList.remove('animation-up');
      tableTopRef2.current?.classList.add('animation-down');
    })
  }

  if(page === '1') {
    return (
      <main className='main'>
        <button className='button-page' onClick={() => setPage('2')}>2ая страница</button>
        <div className='info'>
          <h1 className='info-title'>Yamaguchi <br /> Voice Control</h1> 
          <p className='info-text'>
            Вы можете управлять программами массажа или самим креслом с помощью голосовых команд, приведённых ниже. Коснитесь кратковременно кнопки голосового управления, расположенной на левом подлокотнике, для запуска сеанса голосового управления. <br /><br />
            Произнесите одну из доступных команд. Если произнесённая команда распознана, вы услышите ответ и кресло приступит к выполнению запроса.
          </p>
          <p className='info-promo'>
            СКАЖИ: 
              <span className='info-promo-span'>«ОКЕЙ, ЯМАГУЧИ»</span>
          </p>
        </div>
        <div className='portal-wrapper'>
          <div className='portal'>
              <div className='portal-top'></div>
              <div className='portal-bottom'></div>
              <div className='portal-image-wrapper'>
                <div className='portal-image' />
              </div>
          </div>
        </div>
        <div className='helper'>
        </div>
        <p className='info-promo-l'>
          СКАЖИ: 
          <span className='info-promo-span'>«ОКЕЙ, ЯМАГУЧИ»</span>
        </p>
      </main>
    )
  } else {
    return (
      <main className='main2'>
        <button className='button-page button-page_2' onClick={() => setPage('1')}>1ая страница</button>
        <div className='onecolumn'>
          <h1 className='onecolumn-h1'>
            Эргономика — 
            ключ к успеху современного человека 
          </h1>
          <p className='onecolumn-p'>
          Cтильная столешница , выполненной из экологически безопасного материала (ДСП), и усиленной стальной рамы не составит труда разместить на поверхности инновационного стола большое количество крупногабаритной техники: стол выдерживает нагрузку до 80 кг.
          </p>
          <div className='table-section'>
            <img className='table-top-img' ref={tableTopRef2} src={TABLETOP} alt="стол верх" />
            <img className='table-bottom-img' src={TABLEBOTTOM} alt="стол низ" />
            <div className='table-buttons'>
              <button onClick={onUp2} className='table-button'>вверх</button>
              <button onClick={onDown2} className='table-button'>вниз</button>
            </div>
          </div>
          <p className='onecolumn-p'>
            Также столешница, обладающая меламиновым покрытием, хорошо переносит механические воздействия (царапины или удары), при контакте с водой не разрушается, устойчиво переносит бытовые химические вещества и не выгорает под воздействием ультрафиолета.
          </p>
        </div>
        <div className='table-section'>
          <img className='table-top-img' ref={tableTopRef} src={TABLETOP} alt="стол верх" />
          <img className='table-bottom-img' src={TABLEBOTTOM} alt="стол низ" />
          <div className='table-buttons'>
            <button onClick={onUp} className='table-button'>вверх</button>
            <button onClick={onDown} className='table-button'>вниз</button>
          </div>
        </div>
        <div className='info-section'>
          <h1 className='info-section-header'>
            Эргономика — 
            ключ к успеху современного человека 
          </h1>
          <p className='info-section-text'>
            Cтильная столешница , выполненной из экологически безопасного материала (ДСП), и усиленной стальной рамы не составит труда разместить на поверхности инновационного стола большое количество крупногабаритной техники: стол выдерживает нагрузку до 80 кг.
            <br /><br />
            Также столешница, обладающая меламиновым покрытием, хорошо переносит механические воздействия (царапины или удары), при контакте с водой не разрушается, устойчиво переносит бытовые химические вещества и не выгорает под воздействием ультрафиолета.
          </p>
        </div>
      </main>
    )
  }
  
}

export default App
