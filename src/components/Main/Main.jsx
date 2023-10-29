import React from 'react'
import { HiOutlineDotsHorizontal, HiPlus } from "react-icons/hi";
import './Main.css'

import { BsCircle } from "react-icons/bs";
import Card from '../Card/Card';

export default function Main() {
  return (
    <div className="main">
        <div className="section">
            <div className="heading">
                <div className="left-items">
                    <BsCircle/>
                    <div className="fw-bold text-black">
                    No priority
                    </div>
                    <div>1</div>
                </div>
                <div className="right-items" >
                <HiPlus size={20} />
                <HiOutlineDotsHorizontal size={20}/>
                </div>
            </div>
            <div className="list">
                <Card/>
            </div>
        </div>
    </div>
  )
}
