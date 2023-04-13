import HeaderPage from '../Header/HeaderPage';

import classes from './Dashboard.module.css';
import Mobile from '../../images/mobile-image.avif';
import Laptop from '../../images/laptop.jpg';
import DeleteIcon from '../../images/delete_icon.svg';

import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { db } from '../../firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const DashboardPage = () => {
  const navigate = useNavigate();
  const locate = useLocation();

  const [category, setCategory] = useState(
    locate.state !== null ? locate.state.data : 'Mobile'
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [categories, setCategories] = useState([]);
  const categoryHandler = (category) => {
    setCategory(category);
  };

  const fetchData = async () => {
    const categories = await getDocs(collection(db, category));
    const res = [];

    categories.forEach((category) => {
      res.push({
        id: category.id,
        ...category.data()
      });
    });

    setCategories(res);
  };

  useEffect(() => {
    const details = sessionStorage.getItem('loginDetails');
    if (details) {
        setIsLoggedIn(true);
    }
    setCategory(locate.state !== null ? locate.state.data : 'Mobile');
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [category]);

  const viewProductHandler = (product) => {
    navigate(`viewProduct/${product.id}`, { state: { data: product } });
  };

  const deleteProductHandler = (category) => {
    const docRef = doc(db, category.category, category.id.toString());
    deleteDoc(docRef).then(() => {
        fetchData();
    }).catch(err => console.log(err));
  }

  const logoutHandler = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  }

  return (
    <div>
      <HeaderPage categoryHandler={categoryHandler} logoutHandler={logoutHandler} isLoggedIn={isLoggedIn} />
      {isLoggedIn && <div className="container">
        <button
          className={`btn btn-primary ${classes.addProductBtn}`}
          onClick={() => navigate('/addProduct')}
        >
          Add Product
        </button>
      </div>}
      <div className="container">
        <div className="row">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`col-md-3 ${classes.categoryCard}`}
            >
              <div className="card h-100">
                {category.category === 'Mobile' && (
                  <img
                    src={Mobile}
                    className={`card-img-top ${classes.imageResolution}`}
                    alt="category"
                  />
                )}
                {category.category === 'Laptop' && (
                  <img
                    src={Laptop}
                    className={`card-img-top ${classes.imageResolution}`}
                    alt="category"
                  />
                )}

                <div className="card-body d-flex flex-column">
                  <h5 className={`card-title ${classes.cardHeader}`}>
                    <span>{category.brand}</span>
                    {isLoggedIn && <img src={DeleteIcon} alt='delete icon' style={{width: '22px', cursor: 'pointer'}} onClick={() => deleteProductHandler(category)} />}
                  </h5>
                  <p className="card-text">{category.description}</p>
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => viewProductHandler(category)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
