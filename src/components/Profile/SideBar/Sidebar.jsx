import React from 'react';
import {
  FaUserAlt,
  FaShoppingBag,
  FaShippingFast,
  FaHeart,
  FaShoppingCart,
  FaHeadset,
} from 'react-icons/fa';
import './sidebar.css';
const Sidebar = () => {
  return (
    <>
      <div className="d-flex flex-column bg-dark sidebar-container">
        <a className="btn rounded-0 p-0  wrapper">
          <div className="icon bg-transparent shadow-none">
            <FaUserAlt className="text-white" />
          </div>
        </a>
        <a className="btn rounded-0 p-0 tablinks">
          <div className="d-flex p-2 d-flex wrapper">
            <div className="icon bg-transparent shadow-none">
              <FaShoppingBag className="text-white" />
            </div>
          </div>
        </a>
        <a className="btn rounded-0 p-0 tablinks">
          <div className="d-flex p-2 d-flex wrapper">
            <div className="icon bg-transparent shadow-none">
              <FaShippingFast className="text-white" />
            </div>
          </div>
        </a>
        <a className="btn rounded-0 p-0 tablinks">
          <div className="d-flex p-2 d-flex wrapper">
            <div className="icon bg-transparent shadow-none">
              <FaHeart className="text-white" />
            </div>
          </div>
        </a>
        <a className="btn rounded-0 p-0 tablinks">
          <div className="d-flex p-2 d-flex wrapper">
            <div className="icon bg-transparent shadow-none">
              <FaShoppingCart className="text-white" />
            </div>
          </div>
        </a>
        <a className="btn rounded-0 p-0 tablinks">
          <div className="d-flex p-2 d-flex wrapper">
            <div className="icon bg-transparent shadow-none">
              <FaHeadset className="text-white" />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
