import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa";
import { BiLogIn } from 'react-icons/bi';
import { FcTimeline } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isShow, setIsShow] = useState(true)

  return (
    <nav>
      <p><FcTimeline className={styles.logo}/> Navbar</p>
        <div className={styles.menu}> {isShow ? <FaBars onClick={() => setIsShow(false)}/> : <AiOutlineClose onClick={() => setIsShow(true)}/>} 
        </div>
      <ul className={styles.navbar} id={isShow? "" : styles.menu }>
        <li><a href='/' className={styles.active}>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/project'>Projects</a></li>
        <li><a href='/videos'>Videos</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      <div className={styles.profile}>
      <BiLogIn/>
        <button className={styles.btn}>Login</button>
    </div>
    </nav>
  )
}

export default Navbar
