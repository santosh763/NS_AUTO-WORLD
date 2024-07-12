import React from 'react'
import Navbar from '../Components/Navbar'
import { images } from '../handler'
import Crousal from '../Components/Carousel'

function Home() {
  return (
    <div className='w-full'>
        <Navbar/>
        <Crousal image={images}/>
    </div>
  )
}

export default Home