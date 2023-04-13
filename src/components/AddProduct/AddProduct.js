import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { db } from '../../firebase';
import {collection, addDoc} from 'firebase/firestore';

const AddProduct = () => {
  const navigate = useNavigate();

  const [category] = useState('Mobile');
  const [productDetails, setProductDetails] = useState({
    category: category,
    brand: '',
    modelName: '',
    url: '',
    os: '',
    memoryCapacity: '',
    color: '',
    screenSize: '',
    description: ''
  });
  const categories = [
    {
      label: 'Mobile',
      value: 'Mobile'
    },
    {
      label: 'Laptop',
      value: 'Laptop'
    }
  ];

  const addProductHandler = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, productDetails.category), { ...productDetails });
    console.log('productDetails: ', productDetails);
    setProductDetails({});
    navigate('/', { state: { data: productDetails.category } });
  };

  const productDetailsHandler = (event) => {
    setProductDetails({
      ...productDetails,
      [event.target.id]: event.target.value
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '30px' }}>
        Add a New Product
      </h2>
      <form className="container pt-30" onSubmit={addProductHandler}>
        <div className="mb-3">
          <label>Select Category of Product</label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="category"
            onChange={productDetailsHandler}
          >
            {categories.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Brand
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            value={productDetails.firstName}
            onChange={productDetailsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Model Name
          </label>
          <input
            type="text"
            className="form-control"
            id="modelName"
            value={productDetails.lastName}
            onChange={productDetailsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            URL
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            value={productDetails.url}
            onChange={productDetailsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            OS
          </label>
          <input
            type="text"
            className="form-control"
            id="os"
            aria-describedby="emailHelp"
            value={productDetails.email}
            onChange={productDetailsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Memory Storage Capacity
          </label>
          <input
            type="text"
            className="form-control"
            id="memoryCapacity"
            value={productDetails.lastName}
            onChange={productDetailsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Color
          </label>
          <input
            type="text"
            className="form-control"
            id="color"
            value={productDetails.lastName}
            onChange={productDetailsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Screen Size
          </label>
          <input
            type="text"
            className="form-control"
            id="screenSize"
            value={productDetails.lastName}
            onChange={productDetailsHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            value={productDetails.description}
            onChange={productDetailsHandler}
          />
        </div>
        <button type="button" className="btn btn-danger me-2" onClick={() => navigate('/')}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
