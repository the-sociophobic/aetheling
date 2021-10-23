import * as THREE from 'three'

import Unit from 'libs/three/Unit'
import hdrLoader from 'libs/three/loaders/hdrLoader'
import HDRMap from './HDRI/delta_2_1k.hdr'


export default class Fence extends Unit {
  constructor(props) {
    super(props)

    this.loadTexture()
  }

  loadTexture = async () => {
    this.props.scene.environment = await hdrLoader(HDRMap)
    // this.props.scene.environment.encoding = THREE.RGBEEncoding
    // this.props.scene.environment.minFilter = THREE.NearestFilter
    // this.props.scene.environment.magFilter = THREE.NearestFilter
    // this.props.scene.environment.flipY = true

    // console.log(this.props.scene.environment)
  }

  animate = props => {}
  dispose = props => {}
}