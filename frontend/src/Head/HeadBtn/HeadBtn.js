import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Help from '../HeadNav/Help'
import AllFlowers from './AllFlowers'
import Nextday from './Nextday'
import Occasons from './Occasons'
import Peonies from './Peonies'
import Sameday from './Sameday'
import Valentine from './Valentine'
import Weddng from './Weddng'
import Subscriptons from './Subscriptons'
const HeadBtn = () => {
  return (<>
    <div className='HeadBtn'>
      <nave>
      <ul>
     
          <li><AllFlowers/></li>
          <li><Nextday/></li>
          <li><Occasons/></li>
          <li><Peonies/></li>
          <li><Sameday/></li>
          <li><Valentine/></li>
          <li><Weddng/></li>
          <li><Subscriptons/></li>
  
      </ul>
      </nave>
    </div>
    <Routes>
            <Route path="/help" element={<Help />} />
          

            </Routes>

</>

  )
}

export default HeadBtn


