
import { Outlet } from 'react-router-dom'
import Footer from './components/ui/Footer'

const App = () => {
  return (
    <div className='min-h-screen  content-between '>
       <div className='w-full block'>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default App