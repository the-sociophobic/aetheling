import React from 'react'
import ImageViewer from './components/ImageViewer'
import './styles/index.sass'


const App: React.FC = () => {
  const [male, setMale] = React.useState(true)

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-7 px-0 pe-lg-5 d-flex flex-row justify-content-between'>
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
            <h2 className='h2 color-blue'>
              ОБОЛОЧКА SOFTSHELL (WR TPU 10000/3000)
            </h2>
            <h2 className='h2 color-blue'>
              ФОЛЬГИРОВАННАЯ ПОДКЛАДКА
            </h2>
            <h1 className='h1 color-red'>
              32000 ₽
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
