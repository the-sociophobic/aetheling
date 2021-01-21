import * as THREE from 'three'
import classes from 'multiple-extend'

import Model from 'libs/three/units/Model'
import transitionHandler from 'libs/three/units/transitionHandler'
import tapEvent from 'libs/utils/tapEvent'


const degToRad = deg =>
  deg / 180 * Math.PI

const setQuaternion = angle => {
  let res = new THREE.Quaternion()

  res.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), degToRad(angle) )

  return res
}


const scenePositions = [
  {
    pos: [0, -30, 20],
    rot: [0, Math.PI, 0],
  },
]

export default class Room extends classes(Model, transitionHandler) {
  constructor(props) {
    super(props)
    this.loadModel(this)
  }

  onLoad = () => {
    this.scene.scale.multiplyScalar(12.5)
    this.scene.position.add(new THREE.Vector3(17, -35, 20))
    // this.scene.rotation.y += Math.PI
    this.scene.rotation.x += Math.PI / 7

    // this.room = this.scene.children[0]
    // this.walls = this.scene.children[1]
    // this.logo = this.scene.children[2]

    // this.scene.castShadow = true
    // this.scene.receiveShadow = true
    this.props.onLoad()
  }

  animate = props => {

    // let alpha = props.frameNumber / props.maxFrameNumber * 7

    // this.scene && (this.scene.rotation.y = alpha * 1.2 * Math.PI)

    if (this.scene) {
      this.animateTransitions()

      const { alphaX, alphaY } = props.input.mouse

      this.scene.rotation.y = Math.PI / 1.2 - (Math.sign(alphaX) * Math.abs(alphaX) ** 3) * 5
      this.scene.rotation.z = -Math.PI / 5 - (Math.sign(alphaY) * Math.abs(alphaY) ** 3) * 3
    }
  }
  dispose = props => {}
}