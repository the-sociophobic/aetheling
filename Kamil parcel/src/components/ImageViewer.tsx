import React from 'react'
import { maleImages, femaleImages } from './images'


export type TImageViewerProps = {
  male: boolean
}


const timeDelay = 3000

const ImageViewer: React.FC<TImageViewerProps> = ({
  male
}) => {
  const [currentImage, setCurrentImage] = React.useState(0)
  const images = male ? maleImages : femaleImages
  let interval = null

  React.useEffect(() => {
    interval = setInterval(() =>
      setCurrentImage((currentImage + 1 + images.length) % images.length), timeDelay)

    return () =>
      interval = clearInterval(interval)
  })

  return (
    <div className='ImageViewer'>
      <div className='col-6'>
        <img
          className='w-100 h-auto'
          src={images[currentImage]}
        />
      </div>
      <div className='ImageViewer__images'>
        {images.map((image, index) =>
          <img
            className={`ImageViewer__images__item ${index === currentImage && 'ImageViewer__images__item--selected'}`}
            onClick={() => setCurrentImage(index)}
            src={image}
          />
        )}
      </div>
    </div>
  )
}


export default ImageViewer