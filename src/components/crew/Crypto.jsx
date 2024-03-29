import { NavLink } from "react-router-dom"
import './Crew.css'

export default function Crew() {
  return (
    <div id='crew-container' className='flex-box'>
      <div id='cd-1'>
        <h2>SOCIAL</h2>
        <h1>CRYPTO-BANKING-SYSTEM</h1>
        <div>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</div>

        <div id='box' >
            <NavLink to='/crew'>
            <p className='circle'></p>
            </NavLink>
            <NavLink to='/crypto'>
            <p className='circle'></p>
            </NavLink>
            <NavLink to='/pilot'>
            <p className='circle'></p>
            </NavLink>
        </div>
      </div>
        <div id='cd-2' ><img src='./photos/Linex.png' alt="img" /></div>
    </div>
  )
}
