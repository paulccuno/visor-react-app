import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import { PlaneMap } from './PlaneMap'

export const Plane = () => {
  return (
    <>
      <TransformWrapper
        initialScale={1.1}
        initialPositionX={100}
        initialPositionY={-100}
        centerOnInit
        minScale={0.8}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <TransformComponent>
              <PlaneMap />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </>
  )
}
