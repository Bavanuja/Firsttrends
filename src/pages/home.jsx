import React from 'react'
import Profilecard from '../components/profileCard'

export default function Home(props) {
  return (
  <div className='outer-box'>
   <div className='grid-container'>
   <Profilecard name="Oliver"  image="p0.jpg"/>
   <Profilecard name="Arthur"  image="p1.jpeg"/>
   <Profilecard name="Emily"  image="p2.jpeg"/>
   <Profilecard name="George"  image="p3.jpg"/>
   <Profilecard name="Olivia"  image="p4.jpeg"/>
   <Profilecard name="Lily"  image="p5.jpeg"/>
   <Profilecard name="Charllote"  image="p6.jpeg"/>
   <Profilecard name="Emma"  image="p7.jpg"/>
   <Profilecard name="William"  image="p8.jpeg"/>
   </div>
  </div>
  )
}


