import { createContext, useContext, type PropsWithChildren } from 'react'

// interface IHomeContext {}

const HomeContext = createContext</* IHomeContext |  */ undefined>(undefined)

const HomeContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <HomeContext.Provider value={undefined}>{children}</HomeContext.Provider>
  )
}

const useHomeContext = () /* : IHomeContext */ => {
  const context = useContext(HomeContext)

  if (!context)
    throw new Error(`useHomeContext must be used within an HomeContextProvider`)

  return context
}

export { HomeContextProvider, useHomeContext }
