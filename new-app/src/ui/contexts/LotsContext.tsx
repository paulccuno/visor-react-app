import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from 'react'
import type { Lot } from '../../domain/entities/LotEntity'

interface ILotsContext {
  lots: Array<Lot>
  setLots: Dispatch<SetStateAction<Array<Lot>>>
}

const LotsContext = createContext<ILotsContext | undefined>(undefined)

const LotsContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [lots, setLots] = useState<Lot[]>([])

  return (
    <LotsContext.Provider
      value={{
        lots,
        setLots,
      }}
    >
      {children}
    </LotsContext.Provider>
  )
}

const useLotsContext = (): ILotsContext => {
  const context = useContext(LotsContext)

  if (!context)
    throw new Error(
      `userLotesContext must be used within an LotesContextProvider`,
    )

  return context
}

export { LotsContextProvider, useLotsContext }
