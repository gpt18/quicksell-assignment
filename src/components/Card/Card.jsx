import React from 'react'
import './Card.css'
import { MdSignalCellular2Bar } from 'react-icons/md'

export default function Card() {
  return (
    <div className="card">
        <div className="row">
            <div className="card-id">CAM 1</div>
            <div className="user-avatar" style={{backgroundColor: "#94a3b8"}}>
                A
                <div className="available" style={{backgroundColor: "silver"}}></div>
            </div>
        </div>
        <div className="title">
        Create Onboarding Tutorial for New Users
        </div>
        <div className="tags">
            <div className="tag">
                <MdSignalCellular2Bar/>
            </div>
            <div className="tag">
                <div className="circle"/>
                Feature Request
            </div>
        </div>
    </div>
  )
}
