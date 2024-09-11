import React from 'react'
import "./BoxContainer.css";


export default function BoxContainer() {
  return (
    <div className="outer-box">
        <div className="grid-container">
            <div className="small-box">
              <img src="/p0.jpg" alt="Participant" className="participant-image" />
              <div className="participant-name">John Doe</div>
              </div>
            <div className="small-box"><img src="/p1.jpeg" alt="Participant" className="participant-image" /></div>
            <div className="small-box"><img src="/p2.jpeg" alt="Participant" className="participant-image" /></div>
            <div className="small-box"><img src="/p3.jpg" alt="Participant" className="participant-image" /></div>
            <div className="small-box"><img src="/p4.jpeg" alt="Participant" className="participant-image" /></div>
            <div className="small-box"><img src="/p5.jpeg" alt="Participant" className="participant-image" /></div>
            <div className="small-box"><img src="/p6.jpeg" alt="Participant" className="participant-image" /></div>
            <div className="small-box"><img src="/p7.jpg" alt="Participant" className="participant-image" /></div>
            <div className="small-box"><img src="/p8.jpeg" alt="Participant" className="participant-image" /></div>
            
        </div>
    </div>


  )
}

