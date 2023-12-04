import React from 'react'
import americano from "../../coffee/americano.jpg"
import { Link } from 'react-router-dom'

const Americano = () => {
  return (
    <div>
        <p className='text-center font-serif font-bold text-2xl text-red-800 p-3'><span> <Link to="/menu">Menu/</Link></span>Americano</p>
        <div className='grid grid-cols-2 bg-red-950'>
            <img className="w-80 h-80 rounded-full m-auto mt-5 mb-5"src={americano} alt="americano"/>
            <div className='mt-14 m-auto font-mono font-bold text-3xl text-white '>
                Americano : Made By Pouring hot mater over an espresso shot.
            </div>
        </div>
    </div>
  )
}

export default Americano
