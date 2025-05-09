import './index.scss'
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import Inventory from './components/Inventory/Inventory'
import Finder from './components/Finder/Finder'
import ConfirmModal from './components/ConfirmModal/ConfirmModal'
import Toolbar from './components/Toolbar/Toolbar'

import { ToastContainer, Slide } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
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
      <Footer />
    </QueryClientProvider>
  )
}

