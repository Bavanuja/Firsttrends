import React from 'react'
import "./profileCard.css";
import { FaMicrophoneSlash } from 'react-icons/fa'; 

export default function Profilecard(props) {
  return (
    <div className="small-box">
      <div className="participant-name">{props.name}</div>
      <img src={props.image} alt="Participant" className="participant-image" />
      <div className="mute-icon"><FaMicrophoneSlash /></div> 
    </div>
  )
}

