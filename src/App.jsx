import './index.scss'
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import Inventory from './components/Inventory/Inventory'
import Finder from './components/Finder/Finder'
import Toolbar from './components/Toolbar/Toolbar'
import ConfirmModal from './components/ConfirmModal/ConfirmModal'
import ResetLoadoutButton from './components/ResetLoadoutButton/ResetLoadoutButton'

import { ToastContainer, Slide } from 'react-toastify';

export default function App() {

  return (
    <>
      <ConfirmModal />
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
      <ResetLoadoutButton />
      <Footer />
    </>
  )
}

