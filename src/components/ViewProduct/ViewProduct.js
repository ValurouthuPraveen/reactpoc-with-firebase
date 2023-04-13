import { useLocation, useNavigate } from 'react-router-dom';
import Mobile from '../../images/mobile-image.avif';
import Laptop from '../../images/laptop.jpg';
import classes from './ViewProduct.module.css';

const ViewProduct = () => {
  const locate = useLocation();
  const navigate = useNavigate();
  const product = locate.state.data;
  const productCategory = product.category;

  const backToDashboardHandler = (product) => {
    navigate('/', { state: { data: product.category } });
  }

  return (
    <div className="container mt-30">
      <div className="row">
        <div className="col-md-6">
          {productCategory === 'Mobile' && <img src={Mobile} alt="mobile" style={{height: '100%'}} />}
          {productCategory === 'Laptop' && <img src={Laptop} alt="mobile" style={{height: '100%', width: '100%'}} />}
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <div className={classes.categoryDetails}>
                <div className="col-md-4">
                  <h6>Brand</h6>
                </div>
                <div className="col-md-8">
                  <p>{product.brand}</p>
                </div>
              </div>
              <div className={classes.categoryDetails}>
                <div className="col-md-4">
                  <h6>Model Name</h6>
                </div>
                <div className="col-md-8">
                  <p>{product.modelName}</p>
                </div>
              </div>
              <div className={classes.categoryDetails}>
                <div className="col-md-4">
                  <h6>URL</h6>
                </div>
                <div className={`col-md-8 ${classes['mb-16']}`}>
                  <a target='_blank' href={product.url} rel="noreferrer" className={classes.websiteLink}>Link to Website</a>
                </div>
              </div>
              <div className={classes.categoryDetails}>
                <div className="col-md-4">
                  <h6>Category</h6>
                </div>
                <div className="col-md-8">
                  <p>{product.category}</p>
                </div>
              </div>
              <div className={classes.categoryDetails}>
                <div className="col-md-4">
                  <h6>OS</h6>
                </div>
                <div className="col-md-8">
                  <p>{product.os}</p>
                </div>
              </div>
              <div className={classes.categoryDetails}>
                <div className="col-md-4">
                  <h6>Memory Storage Capacity</h6>
                </div>
                <div className="col-md-8">
                  <p>{product.memoryCapacity}</p>
                </div>
              </div>
              <div className={classes.categoryDetails}>
                <div className="col-md-4">
                  <h6>Color</h6>
                </div>
                <div className="col-md-8">
                  <p>{product.color}</p>
                </div>
              </div>
              <div className={classes.categoryDetails}>
                <div className="col-md-4">
                  <h6>Screen Size</h6>
                </div>
                <div className="col-md-8">
                  <p>{product.screenSize}</p>
                </div>
              </div>
              <div className={classes.categoryDetails}>
                <div className="col-md-4">
                  <h6>Description</h6>
                </div>
                <div className="col-md-8">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">
              <button className="btn btn-primary" onClick={() => backToDashboardHandler(product)}>
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
