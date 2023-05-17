import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa";
import { FcTimeline } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const [isShow, setIsShow] = useState(true)

  const handleMenuClick = () => {
    if (!isShow) {
      setIsShow(true);
    }
  };

  return (
    <nav>
      <Link to ='/'><p><FcTimeline className={styles.logo}/> Navbar</p></Link>
        <div className={styles.menu}> {isShow ? <FaBars onClick={() => setIsShow(false)}/> : <AiOutlineClose onClick={() => setIsShow(true)}/>} 
        </div>
      <ul className={styles.navbar} id={isShow? "" : styles.menu} onClick={handleMenuClick}>

        <li><NavLink to ='/'>Home</NavLink></li>
        <li><NavLink to ='/register'>Register</NavLink></li>
        <li><NavLink to ='/login'>Login</NavLink></li>
        <li><NavLink to ='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar