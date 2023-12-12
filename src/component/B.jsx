import React, { useContext } from 'react'
import { productContext } from '../context/Product'

function B() {
  let {state:{hide},togglerHandler}=    useContext(productContext)
  return (
    <>
      <button className='btn btn-primary' onClick={togglerHandler}>{hide?"HIDE":"SHOW"}</button></>
  )
}

export default B