import React from 'react'
import ScreenLayout from '../components/ui/Layout/ScreenLayout'
import Card from '../components/ui/Card'

const Tshirts = () => {
  document.title = "T-shirts"
  const Imglinks = [
    "https://images.unsplash.com/photo-1633464129147-777bdcc97c1d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589384267710-7a170981ca78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1633464129147-777bdcc97c1d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589384267710-7a170981ca78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  const random = Math.floor(Math.random() * Imglinks.length)

  return (
    <ScreenLayout >
       <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4">
        {
            // render card
            Imglinks.map((link, index) => (
                <Card  key={index} link={link} id={random.toString()} image={link} price={random} title={random.toString()}  />
            ))
        }
    </div>
    </ScreenLayout>
  )
}

export default Tshirts