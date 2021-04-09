import React from 'react'

import ThreeScene from 'components/ThreeScene'
import Menu from 'components/Menu'
import Room from 'libs/three/units/Room'
import Lights from 'libs/three/units/Lights'
import Mouse from 'libs/three/units/Mouse'
import Environment from 'libs/three/units/Environment'

import combined from 'models/combined.glb'

import themeAudio from 'mp3/Sentionauts.mp3'


class MainScene extends React.Component {
  state = {
    started: false,
    audioLoaded: false,
    modelLoaded: false,
  }

  componentDidMount = () =>
    this.initializeAudio()

  componentWillUnmount = () =>
    this.audio.pause()

  initializeAudio = () => {
    this.audio = new Audio()

    this.audio.addEventListener('canplay', () =>
      this.setState({ audioLoaded: true }))

    this.audio.addEventListener('ended', () => {
      this.audio.pause()
      this.audio.currentTime = 0
      this.play()
    })

    this.audio.preload = 'auto'
    this.audio.src = themeAudio
    this.audio.load()
  }

  start = () => {
    this.audio.play()
    this.setState({ started: true })
  }


  render = () =>
  <>
    <ThreeScene
      id="sceneClosed"
      onLoad={() => this.setState({ modelLoaded: true })}
      start={this.state.started}
      units={{
        head: {
          unit: Room,
          args: { file: combined },
          disabled: false,
        },
        lights: {
          unit: Lights,
          disabled: false,
        },
        mouse: {
          unit: Mouse,
          disabled: false,
        },
        environment: {
          unit: Environment,
          disabled: false,
        },
      }}
    />
    {!this.state.started ?
      <div className="start-screen">
        <button
          className="start-screen__button"
          disabled={!this.state.audioLoaded || !this.state.modelLoaded}
          onClick={() => this.start()}
        >
          {this.state.audioLoaded && this.state.modelLoaded ? "START_" : "LOADING_"}
        </button>
      </div>
      :
      <Menu />
    }
  </>
}


export default MainScene