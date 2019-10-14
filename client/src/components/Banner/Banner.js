import React from 'react'
import './Banner.css'

function Banner(props) {
   return (
      <div className='banner'>
         {props.userType}'s Dashboard
      </div>
   )
}


export default Banner