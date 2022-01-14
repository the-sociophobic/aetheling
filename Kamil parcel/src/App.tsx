import React from 'react'
import ImageViewer from './components/ImageViewer'
import './styles/index.sass'


const App: React.FC = () => {
  const [male, setMale] = React.useState(true)

  return (
    <div className="App">
      <div className='widget-container'>
        <div className='row mb-4'>
          <div className='col-12 px-0 pe-lg-5 d-flex flex-row justify-content-between'>
            <h2 className='h2 color-blue'>
              КУРТКА DX01
            </h2>
            <h2 className='h2 color-blue d-flex flex-row'>
              <div
                className={`inherit-all cursor-pointer d-inline-flex ${male && 'color-red'}`}
                onClick={() => setMale(true)}
              >
                МУЖЧИНАМ
              </div>
              <div className='mx-3'>
                /
              </div>
              <div
                className={`inherit-all cursor-pointer d-inline-flex ${!male && 'color-red'}`}
                onClick={() => setMale(false)}
              >
                ЖЕНЩИНАМ
              </div>
            </h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-7 px-0 pe-lg-5 pb-3'>
            <ImageViewer male={male} />
          </div>
          <div className='col-12 col-lg-5 d-flex flex-column justify-content-between pb-0 pb-lg-5 ps-0 ps-lg-5'>
            <h3 className='h3 color-blue'>
              ОСНОВА - СОФТШЕЛЛ:<br />
              92% ПОЛИЭСТЕР; 8% СПАНДЕКС; ПЛОТНОСТЬ 320г/м2
            </h3>
            <h3 className='h3 color-blue'>
              ПОДКЛАДКА ФОЛЬГИРОВАННАЯ:<br />
              100% ПОЛИЭСТЕР; ПЛОТНОСТЬ 65г/м2
            </h3>
            <h1 className='h1 color-red'>
              35000 P
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
