import './index.scss'
import Header from './components/Layout/Header/Header'
import Inventory from './components/Inventory/Inventory'
import Finder from './components/Finder/Finder'

export default function App() {

  return (
    <>
      <Finder />
      <Header />
      <Inventory />
    </>
  )
}

