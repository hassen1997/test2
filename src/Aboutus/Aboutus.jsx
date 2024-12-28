import React from 'react'
import"./Aboutus.css"
function Aboutus() {
  return (
    <div className='about'>
        <h1>Aboutus</h1>
        <br/>
        <div>
            <p style={{display:"flex",justifyContent:"center"}}>Welcome to <span style={{color:"#7D4283"}}>Focus Marketing Solutions</span>! We're a creative team dedicated to driving your business</p>

            <p style={{display:"flex",justifyContent:"center"}}>orward with innovative marketing strategies. From digital marketing to social media management</p>
            <p style={{display:"flex",justifyContent:"center"}}>we're here to help you succeed <span style={{color:"#7D4283"}}>Let's build something extraordinary together</span> </p>
            <br/>
             <button>Read more</button>
        </div>
        
    </div>
  )
}

export default Aboutus