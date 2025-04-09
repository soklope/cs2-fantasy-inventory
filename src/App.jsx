import './index.scss'
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import Inventory from './components/Inventory/Inventory'
import Finder from './components/Finder/Finder'
import Toolbar from './components/Toolbar/Toolbar'
import { ToastContainer, Slide } from 'react-toastify';
import useInventoryStore from './store/inventoryStore'

export default function App() {
  const { resetInventory } = useInventoryStore();

  return (
    <>
      <Finder />
      <Header />
      <Toolbar />
      <Inventory />
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        transition={Slide}
      />

      <div className='reset-loadout-button page-container'>
        <button className="button-danger" onClick={resetInventory}>Reset Inventory</button>
      </div>

      <Footer />
    </>
  )
}

