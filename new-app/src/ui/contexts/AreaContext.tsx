import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react'

interface IAreaContext {
  areaHover: boolean
  setAreaHover: Dispatch<SetStateAction<boolean>>
  areaSelected: boolean
  setAreaSelected: Dispatch<SetStateAction<boolean>>
}

const AreaContext = createContext<IAreaContext | undefined>(undefined)

const AreaContextProvider = ({ children }: PropsWithChildren) => {
  const [areaHover, setAreaHover] = useState(false)
  const [areaSelected, setAreaSelected] = useState(false)

  return (
    <AreaContext.Provider
      value={{
        areaHover,
        setAreaHover,
        areaSelected,
        setAreaSelected,
      }}
    >
      {children}
    </AreaContext.Provider>
  )
}

const useAreaContext = (): IAreaContext => {
  const context = useContext(AreaContext)

  if (!context)
    throw new Error(`useAreaContext must be used within an AreaContextProvider`)

  return context
}

export { AreaContextProvider, useAreaContext }
