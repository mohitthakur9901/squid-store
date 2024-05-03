import React from 'react'
import Filter from '../filtration/Filter'

const ScreenLayout = ({children  } : {children : React.ReactNode ,}) => {

  return (
    <div className=''>
        <div className="w-full flex items-center justify-end py-2">
            <Filter />
        </div>
        <div className="">
            {children}
        </div>
    </div>
  )
}

export default ScreenLayout