import React from 'react'
import Film from '../NavBar/FIlm'
const Home = () => {
  return (
    <div>
      <h2 style={{textAlign:"center", fontSize:"20px",padding:"10px",color:"#5F9EA0"}}>Welcome to My Movies store</h2>
      <section>
        <h3 style={{color:"#5F9EA0"}}>File Section</h3>
        <Film />
      </section>
    </div>
  )
}

export default Home
