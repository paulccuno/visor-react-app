import { AreaContextProvider } from '../../contexts/AreaContext'

export const Panel = () => {
  return (
    <>
      <AreaContextProvider>
        <div className="Panel w-[calc(100%-8rem)] max-w-full mx-auto bg-[#4242421a] border border-[#424242] rounded-[5px] m-auto overflow-hidden relative max-[800px]:w-[97%]">
          <div className="Panel-container h-full flex flex-col">
            <footer className="Panel__fotter flex flex-wrap gap-[10px] min-h-[50px] items-center justify-center bg-[#424242] text-white"></footer>
          </div>
        </div>
      </AreaContextProvider>
    </>
  )
}
