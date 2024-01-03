import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <>
     <div style={{height:'500px',backgroundImage:'url(https://i.gifer.com/origin/70/70e1f509341ddefdd5fd601be198eaf6_w200.gif)',backgroundPosition:'center'}} className='container w-25 mt-5  rounded shadow'>
      <div style={{height:'500px'}} className='w-100 d-flex flex-column  justify-content-center align-items-center  bg-info bg-opacity-10'>
        <h1 className='text'>Quizzles</h1>
        <h5 className='mt-5 text-danger fw-bolder'>Let's Play! </h5>
        <p className='text-light fw-bold'>Play Now and Have Fun</p>
        <Link to={'\home'}>
          <Button className='opacity-75 btn-info rounded-pill mt-3 px-5 w-100' >Play Now</Button>
        </Link>      
      </div>
    </div>
    </>
  )
}

export default LandingPage