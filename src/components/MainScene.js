import React from 'react'

import ThreeScene from 'components/ThreeScene'
import Room from 'libs/three/units/Room'
import Lights from 'libs/three/units/Lights'

import combined from 'models/combined.glb'

import themeAudio from 'mp3/Sentionauts.mp3'


class MainScene extends React.Component {
  state = {
    started: false,
    canStart: false,
  }

  componentDidMount = () =>
    this.initializeAudio()

  initializeAudio = () => {
    this.audio = new Audio()

    this.audio.addEventListener('canplay', () =>
      this.setState({ canStart: true }))

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
    this.state.started ?
      <ThreeScene
        id="sceneClosed"
        units={{
          head: {
            unit: Room,
            args: { file: combined },
            disabled: false,
          },
          lights: {
            unit: Lights,
            disabled: false,
          }
        }}
      />
      :
      <button
        className="start"
        disabled={!this.state.canStart}
        onClick={() => this.start()}
      >
        {this.state.canStart ? "START" : "LOADING"}
      </button>
}


export default MainScene