import Mobile from '../../images/mobile-image.avif';
import Laptop from '../../images/laptop.jpg';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const HeaderPage = (props) => {
  const navigate = useNavigate();

  const loginDetails = sessionStorage.getItem('loginDetails');
  let email, name;
  if(loginDetails) {
    ({ email } = JSON.parse(loginDetails));
    name = email.split('@')[0];
  }

  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <h4>
          {!email ? 'POC with Firebase' : `Hi ${name.charAt(0).toUpperCase() + name.slice(1)}`}
        </h4>

        <div
          onClick={() => props.categoryHandler('Mobile')}
          style={{ cursor: 'pointer' }}
        >
          <img src={Mobile} alt="mobile" className={classes.image} />
          <p className={classes.imageText}>Mobiles</p>
        </div>

        <div
          onClick={() => props.categoryHandler('Laptop')}
          style={{ cursor: 'pointer' }}
        >
          <img src={Laptop} alt="laptop" className={classes.image} />
          <p className={classes.imageText}>Laptops</p>
        </div>

        <div>
          {!props.isLoggedIn && (
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => navigate('/login')}
            >
              Log In
            </button>
          )}

          {props.isLoggedIn && (
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => props.logoutHandler()}
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
