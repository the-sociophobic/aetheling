import React from 'react'


export type TImageViewerProps = {
  size: 'S' | 'M' | 'L'
  setSize: (newSize: 'S' | 'M' | 'L') => void
}


const ImageViewer: React.FC<TImageViewerProps> = ({
  size,
  setSize
}) => {
  const [opened, setOpened] = React.useState<boolean>(false)

	// register clicks outside
	const handleClick = (e: any) =>
		(!e?.target?.className?.includes?.('Dropdown') && opened)
			&& setOpened(false)

	React.useEffect(() => {
		window.addEventListener('click', handleClick)
		return () =>
			window.removeEventListener('click', handleClick)
	})

  return (
    <div className='Dropdown'>
      <div
        className='Dropdown__label'
        onClick={() => setOpened(!opened)}
      >
        размер {size}
      </div>
      {opened &&
        <div className='Dropdown__options'>
          {['S', 'M', 'L'].map(option =>
            <div
              className={`Dropdown__options__item ${size === option && 'Dropdown__options__item--selected'}`}
              onClick={() => {
                setSize(option)
                setOpened(false)
              }}
            >
              размер {option}
            </div>
          )}
        </div>
      }
    </div>
  )
}


export default ImageViewer