import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../Style/profile.css';

const Profile = () => {
  const emailStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : '';
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header title="Profile" />
      <p
        className="Profile-email"
        data-testid="profile-email"
      >

        { emailStorage.email }

      </p>
      <div
        className="Profile"

      >

        <button
          className="Profile-done"
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          @FamiliaRoses

        </button>
        <button
          className="Profile-favorite"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
         Dirección: __________

        </button>
        <button
          className="Profile-favorite-logout"
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleLogout }
        >
          Logout

        </button>
      </div>

      <Footer />
    </div>

  );
};

export default Profile;
