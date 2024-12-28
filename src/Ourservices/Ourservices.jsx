import React from 'react'
import "./Ourservices.css"
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import img7 from '../img/img7.png'
import Image from 'next/image'; // استيراد مكتبة الصور الخاصة بـ Next.js

function Ourservices() {
  return (
    <>
    <div className="Ourservices">
        <h1>Our services</h1>
        <p> ransforming your online presence with innovative digital strategies</p>
    </div>

    <br/>
    <br/>

    <br/>

    <br/>


    <div className="Ourservices-img" >
         <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div className='Ourservices-all-img'>
           <Image style={{width:"160px",height:"60px",borderRadius:"100%"}} src={img2} alt='' />
        </div>

        <div >
        <h3 style={{color:"white"}}>Video Making</h3>
           <p style={{color:"#646A69"}}>Random content </p>
        </div>
        </div>


        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

        <div className='Ourservices-all-img'>
        <Image style={{width:"160px",height:"60px",borderRadius:"100%"}} src={img3} alt='' />

           </div>
   
           <div >
           <h3 style={{color:"white"}}>Branding  </h3>
              <p style={{color:"#646A69",width:"130px"}}>Random content to fill the blank space </p>
           </div>
 </div>


 <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

           <div className='Ourservices-all-img'>
           <Image style={{width:"170px",height:"50px",borderRadius:"50%"}} src={img4} alt='' />

           </div>
   
           <div >
           <h3 style={{color:"white"}}> Marketing strategy</h3>
              <p style={{color:"#646A69",width:"130px"}}>Random content to fill the blank space </p>
           </div>
           </div>

           <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>


           <div className='Ourservices-all-img'>
           <Image style={{width:"70px",height:"50px",borderRadius:"50%"}} src={img5} alt='' />

           </div>
   
           <div >
           <h3 style={{color:"white"}}>Email Marketing </h3>
              <p style={{color:"#646A69"}}>Random content </p>
           </div>

           </div>


           <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

           <div className='Ourservices-all-img'>
           <Image style={{width:"70px",height:"50px",borderRadius:"50%"}} src={img6} alt='' />

           </div>
   
           <div >
           <h3 style={{color:"white"}}>Social Media Managing </h3>
              <p style={{color:"#646A69",width:"160px"}}>Random content to fill the blank space </p>
           </div>

</div>

<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

           <div className='Ourservices-all-img'>
           <Image style={{width:"70px",height:"50px",borderRadius:"50%"}} src={img7} alt='' />

           </div>
   
           <div >
           <h3 style={{color:"white"}}>Content Writing </h3>
              <p style={{color:"#646A69",width:"160px"}}>Random content to fill the blank space  </p>
           </div>
        </div>

    </div>


    
    
    </>

  )
}

export default Ourservices