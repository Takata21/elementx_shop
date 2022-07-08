import React from 'react';
import './Profile.css';
import UserDashboard from '../../components/UserDashboard/UserDashboard';
import {
  FaRegAddressCard,
  FaRegEnvelope,
  FaRegUser,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { useAuth } from '../../context/provider/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
const Profile = () => {
  let navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <div className="profile">
        <div className="profile-menu-container">
          <ProfileMenu />
        </div>
        <div className="profile-data-info">
          <div className="profile-details-container">
            <h3>Mi Información</h3>
            <div className="profile-details">
              <div className="profile-details-img">
                <img
                  src={
                    user.image === 'default'
                      ? 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'
                      : user.image
                  }
                  alt={`Profile picture ${user?.name} ${user?.surname}`}
                />
              </div>
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
              <div className="profile-details-data">
                <h6>Dirección</h6>
                <div>
                  <FaMapMarkerAlt />
                  <span style={{ textTransform: 'capitalize' }}>
                    {user?.province}
                  </span>
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
