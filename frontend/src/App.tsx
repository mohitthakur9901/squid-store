
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-h-screen flex flex-wrap content-between '>
       <div className='w-full block'>
        <main>
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default App