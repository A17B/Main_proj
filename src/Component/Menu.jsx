import React from 'react'
import Style from './nav.module.css'
export default function Menu() {
  return (
    <div>
        <ol id={Style.menuBlock}>
            <li><a href="#">Explore work</a></li>
            <li><a href="#">Hire Talentsk</a></li>
            <li><a href="#">Challenges</a></li>
        </ol>
    </div>
  )
}
