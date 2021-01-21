import * as THREE from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

const hdrLoader = async file =>
  new Promise((res, rej) =>
    new RGBELoader()
      .load(file,
        texture => {
          texture.mapping = THREE.EquirectangularReflectionMapping

          res(texture)
        },
        progress => {
          const url = progress.srcElement.responseURL.split('/')
          const name = url[url.length - 1].split('.')

          // console.log(`loading ${name[0]}.${name[2]} ${Math.floor(progress.loaded / progress.total * 100)}%`)
        },
        error =>
          rej(error)
      )
  )


export default hdrLoader