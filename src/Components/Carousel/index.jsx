import React, { useState } from 'react'

const Crousal=({image}) =>{
    // const{image}=props
    const[currentIndex,setCurrentIndex]=useState(0)

    const prevSlid=()=>{
        const index = (currentIndex - 1)% image.length;
        setCurrentIndex(index);
    }
    const nextSlid=()=>{
        const index = (currentIndex + 1)% image.length;
        setCurrentIndex(index)
    }
  return (
    <div className='w-full p-2 mt-3'>
        <div className='flex'>
            <button onClick={prevSlid}>&lt;</button>
            <img src={image[currentIndex]} alt=''/>
            <button onClick={nextSlid}>&gt;</button>
        </div>
    </div>
  )
}

export default Crousal