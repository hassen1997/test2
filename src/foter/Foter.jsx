import React from 'react';
import './foter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Foter() {
  return (
    <div className='foter'>
      <h1>What are you waiting for?</h1>
      <h2>Register now to get the best delivery experience for you and your clients in Iraq!</h2>
      <br />
      <div className='foter-inp'>
        <input type='text' placeholder='Your email' />
        <button>Register Now</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='foter-end'>
        <img
          src="https://s3-alpha-sig.figma.com/img/b6fa/d414/338d0ad0fa08bf0a86e0539cfedd5cc6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pt0srFucoGLO8Vpgy0Ydh0m43l-UfIjdBlpyWaPOpM7D3EguLkwfIr5KXeVca4qh8cRNhfRJDWSa3yoEwA3FHOjdYw7-YAzyIEUx1Q-pzNNkxJv3BRSO9xYLR9BsLJfn6sdGZvgOAN9gGzlqiFBqAjJJ~ibCBZuHJfbKn-VM16E9W0yPyx0C1kGrs1J7cEYBgQm6n2S9lQ4IwbiGszAyuTakqdTjA-l1sFRt97GSmL~~D7zs4VJsCWFZPDQnmi7y4ZJ~NbpwsS59-Kiiqq2wrWWyY1crRAu9KuyjqZcMxHJn6dvylYTVWXZ7lkRKMkIt~su0YrWucIevwmyZiOLU5w__"
          alt=''
        />

        <div style={{display:"flex" ,}}>

            <div style={{width:"150px"}}>
              
          <p>The company</p>
          <br />
          <p>Who are we</p>
          <br />
          <p>Services</p>
          <br />
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px',textAlign:"center" }}>
            Jobs
            <span
              style={{
                backgroundColor: '#000',
                color: 'white',
                padding: '0px 3px',
                borderRadius: '100%',
                width: '25px',
                height: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              12
            </span>
          </p>
          <br />
          <p>Branches</p>

</div>

          <div>
          <p>Help center</p>
          <br />
          <p>Common questions</p>
          <br />
          <p>Contact us</p>
          <br />
          <p>Register as merchant</p>
        </div>
        </div>

      

        <div className='icon-all'>
        <p style={{display:"flex",alignItems:"center",gap:"10px",width:"230px"}} className='icon'><FontAwesomeIcon icon={faFacebook} style={{  color: 'white',width:"40px" }} />Facebook</p>  
        <br/>
        <p style={{display:"flex",alignItems:"center",gap:"10px",width:"230px"}}  className='icon'>  <FontAwesomeIcon icon={faInstagram} style={{  color: 'white',width:"40px" }}/>Instagram </p>
        <br/>
        <p style={{display:"flex",alignItems:"center",gap:"10px",width:"230px"}}  className='icon'>  <FontAwesomeIcon icon={faLinkedin} style={{  color: 'white',width:"40px" }}/>Instagram </p>
        
        </div>
      </div>
      <br />
      <br />
      <div style={{ marginLeft: '300px' }}>
        <p>© 2024 Leader Express Delivery Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Foter;
