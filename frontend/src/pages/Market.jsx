import React from 'react'
import Borrow from '../components/Borrow'
import Deposit from '../components/Deposit'
import Navbar from '../components/Navbar'

const Market = () => {
  return (
  <>
  <Navbar />
    <div className="flex flex-row justify-around my-1">
        <Borrow />
        <Deposit />
    </div>
  </>
  )
}

export default Market