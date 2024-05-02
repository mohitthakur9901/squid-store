

import Carousel from '../components/ui/Carousel'
import Header from '../components/Appbar/Header'
import Card from '../components/ui/Card'
import Collection from '../components/ui/Collection'

const HomePage = () => {
    document.title = "Squid-Store 🦑"

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
    <>
    <Header />
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium py-2">
        Love Alpine JS?
        <a href="#" className="inline-block underline">Check out this new course!</a>
      </p>
    </div>
    <div className="py-5">
      <Carousel link={Imglinks.map((link, index) => (
        <img key={index} src={link} alt={`Slide ${index}`} />
      ))} autoSlide={true} />
    </div>
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-2 xl:grid-cols-4">
        {
            // render card
            Imglinks.map((link, index) => (
                <Card key={index} link={link} id={random.toString()} image={link} price={random} title={random.toString()}  />
            ))
        }
    </div>
    <Collection/>
   
  </>
  )
}

export default HomePage