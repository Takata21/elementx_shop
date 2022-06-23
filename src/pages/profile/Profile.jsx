import React from 'react';
import './Profile.css';
import UserDashboard from '../../components/UserDashboard/UserDashboard';
import { FaRegAddressCard, FaRegEnvelope, FaRegUser } from 'react-icons/fa';
import { useAuth } from '../../context/provider/AuthContext';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  let navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return (
      <div className="profile">
        <UserDashboard />
        <div>
          <h5>Detalles</h5>
          <div className="profile-details-container">
            <div className="profile-details">
              <div className="profile-details-data">
                <h6>ID:</h6>
                <div>
                  <FaRegAddressCard />

                  <span>{user?._id}</span>
                </div>
              </div>
              <div className="profile-details-data">
                <h6>Name:</h6>
                <div>
                  <FaRegEnvelope />
                  <span style={{ textTransform: 'capitalize' }}>
                    {user?.name} {user?.surname}
                  </span>
                </div>
              </div>
              <div className="profile-details-data">
                <h6>Email:</h6>
                <div>
                  <FaRegUser />
                  <span>{user?.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    navigate('/login');
    return <>hola</>;
  }
};

export default Profile;
