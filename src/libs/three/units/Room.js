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
    this.scene.position.add(new THREE.Vector3(0, -35, 20))
    // this.scene.rotation.y += Math.PI
    this.scene.rotation.x += Math.PI / 7

    // this.room = this.scene.children[0]
    // this.walls = this.scene.children[1]
    // this.logo = this.scene.children[2]

    // this.room.castShadow = true
    // this.room.receiveShadow = true
    // this.walls.castShadow = true
    // this.walls.receiveShadow = true

  }

  animate = props => {
    this.animateTransitions()

    let alpha = props.frameNumber / props.maxFrameNumber * 7

    this.scene && (this.scene.rotation.y = alpha * 1.2 * Math.PI)
  }
  dispose = props => {}
}