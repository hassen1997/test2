import React from 'react'
import './Pag3.css'
function Pag3() {
  return (
    <>
    <div className="pag3">
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
            <p className="not"></p>
            <p style={{color:"#7D4283"}}>The company's philosophy</p>
        </div>
    </div>

    <div className='pag-all-p' >
        <div className='pag-p'>
            <h1 style={{color:"#7D4283",fontSize:"47px",width:"490px"}}>We bear the responsibility of developing the sector.</h1>
               <br/>
            <p  style={{color:"#646A69",width:"490px"}}>Elevate your brand with our comprehensive marketing solutions, including Digital Marketing, Content Creation, and Social Media Strategy. Enhance visibility through expert SEO and PPC management, </p>

        </div>
        <br/>
        <br/>
        <div className="pag-number">
          <div className="pag-number-1">
            <h1 >1,200+ </h1>
            <p  style={{color:"#646A69",width:"490px"}}>Clients </p>
            
            </div>  

            <br/>
            <br/>
            <div className="pag-number-1">
            <h1 >20+ </h1>
            <p  style={{color:"#646A69",width:"490px"}}>Branches </p>
            
            </div> 
            <br/>
            <br/>
            <div className="pag-number-1">
            <h1 >200+ </h1>
            <p  style={{color:"#646A69",width:"490px"}}>Number of Employees </p>
            
            </div> 
           
           <br/>
           <br/>
            <div className="pag-number-1">
            <h1 >315+ </h1>
            <p  style={{color:"#646A69",width:"490px"}}>Sales Representative </p>
            
            </div> 

        </div>

    </div>
    
    </>
  )
}

export default Pag3