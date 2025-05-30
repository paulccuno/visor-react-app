import { HomeContextProvider } from '../contexts/HomeContext'
import { Header } from '../components/General/Header'
import { Main } from '../components/General/Main'
import { Panel } from '../components/Home/Panel'

export const HomePage = () => (
  <>
    <HomeContextProvider>
      <Header />
      <Main>
        <Panel />
      </Main>
    </HomeContextProvider>
  </>
)
