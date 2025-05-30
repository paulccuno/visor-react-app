import planeImg from '../../../assets/planes-los-frutales-v2_4646x3756.webp'
import { useLotsContext } from '../../contexts/LotsContext'

export const PlaneMap = () => {
  const { lots } = useLotsContext()

  // TODO: Refactorizar este codigo, esta especifico para los frutales
  // TODO: Investigar para que sirve useMap

  return (
    <>
      <div className="Plane">
        <img
          className="Plane__img"
          src={planeImg}
          alt="Plano Proyecto Los Frutales"
          useMap="#lotes-losfrutales"
        />
        <svg className="Map" id="lotes-losfrutales" viewBox="0 0 4096 3316">
          {lots.map(lot => (
            <path
              className={`Area`}
              strokeLinejoin="round"
              id={`${lot.id}`}
              d={lot.path}
            />
          ))}
        </svg>
      </div>
    </>
  )
}
