import React, { useContext } from 'react'
import { productContext } from '../context/Product'
import A from './A'

function Home() {
   let {deleteHandler,state:{hide,data},togglerHandler}= useContext(productContext)
   console.log(hide,data)
  return (
    <>
       <A fdkjfkj/>
    {hide && null}
    {!hide &&  <>
         
         <div className="container">
           <div className="row d-flex justify-content-center">
                
               {data.length===0 && 'wait for while....'}
               {data.length>0 && data.map((item)=>{
                   return (
                       <div className="col-md-3 m-3">
                           <div className="card">
                               <div className="card-body">
                                   <h5>{item.id}</h5>
                                    <h5>{item.name}</h5>
                                    <h5>{item.username}</h5>
                               </div>
                               <div className="card-footer">
                                   <button className='btn btn-danger' onClick={()=>{
                                       deleteHandler(item.id)
                                   }}>del</button>
                               </div>
                           </div>
                       </div>
                   )
               })}
           </div>
         </div>
       </>}
        
  </>
  )
}

export default Home