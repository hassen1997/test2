import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Hom() {
  return (
    <>
      <div className="home">
        {/* Logo and Icon */}
        <div className="bars">
          <img
            src="https://s3-alpha-sig.figma.com/img/b6fa/d414/338d0ad0fa08bf0a86e0539cfedd5cc6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pt0srFucoGLO8Vpgy0Ydh0m43l-UfIjdBlpyWaPOpM7D3EguLkwfIr5KXeVca4qh8cRNhfRJDWSa3yoEwA3FHOjdYw7-YAzyIEUx1Q-pzNNkxJv3BRSO9xYLR9BsLJfn6sdGZvgOAN9gGzlqiFBqAjJJ~ibCBZuHJfbKn-VM16E9W0yPyx0C1kGrs1J7cEYBgQm6n2S9lQ4IwbiGszAyuTakqdTjA-l1sFRt97GSmL~~D7zs4VJsCWFZPDQnmi7y4ZJ~NbpwsS59-Kiiqq2wrWWyY1crRAu9KuyjqZcMxHJn6dvylYTVWXZ7lkRKMkIt~su0YrWucIevwmyZiOLU5w__"
            alt=""
          />
          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>

        {/* Navigation Menu */}
        <div className="nav-lest">
          <h3>Home</h3>
          <h3>About us</h3>
          <h3>Service</h3>
          <h3>Bronchse</h3>
          <h3 style={{ display: 'flex', gap: '10px' }}>
            Jobs
            <span
              style={{
                backgroundColor: '#7D4283',
                padding: '0px',
                borderRadius: '40%',
                textAlign: 'center',
                width: '40px',
                height: '20px',
              }}
            >
              12
            </span>
          </h3>
        </div>

        {/* Buttons */}
        <div className="nav-btn">
          <button className="btn-contact">Contact us</button>
          <button className="btn-join">Join us</button>
        </div>
      </div>
    </>
  );
}

export default Hom;
