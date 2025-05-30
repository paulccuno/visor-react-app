import type { PropsWithChildren } from 'react'

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main className="Main bg-center bg-no-repeat bg-cover min-w-[400px] h-[calc(100vh-100px)] flex flex-col">
        {children}
      </main>
    </>
  )
}
