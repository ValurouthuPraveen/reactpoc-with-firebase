import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import { UserAuth } from '../Context/AuthContext';

const LoginPage = () => {
    const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [error, setError] = useState(false);

  const { signIn } = UserAuth();

  const userDetailsHandler = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const submitUserDetails = async (event) => {
    event.preventDefault();
    const { email, password } = loginDetails;
    try{
        await signIn(email, password);
        navigate('/');
        sessionStorage.setItem('loginDetails', JSON.stringify(loginDetails));
        setError(false);
    } catch(e) {
        setError(e.message);
        setLoginDetails({ email: '', password: '' });
    }
    // if(email !== 'ted@mosby.com' && password !== 'Ted@12345') {
    //     setError(true);
    //     return;
    // } else {
    //     navigate('/');
    //     setError(false);
    // }
  };

  return (
    <div className={`${classes.wrapper} d-flex ${classes['d-center']}`}>
      <div className={classes['login-whitebox']}>
        <form onSubmit={submitUserDetails}>
          <h3 className={classes.loginHeader}>Login</h3>
          <div className={classes.loginContainer}>
            <label className={classes.left}>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className={classes.inputClass}
              value={loginDetails.email}
              onChange={userDetailsHandler}
            />
          </div>
          <div className={classes.loginContainer}>
            <label className={classes.left}>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className={classes.inputClass}
              value={loginDetails.password}
              onChange={userDetailsHandler}
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button
              type="submit"
              className={`btn btn-primary ${classes.loginBtn}`}
            >
              Login
            </button>
          </div>
          {error && <p style={{ color: 'red', fontSize: '18px', textAlign: 'center' }}>Only Admin can Log In</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
