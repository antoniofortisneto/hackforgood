import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../Style/explor.css';

export default function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header title="Información" />
      <div className="container-explore">

        <div>
          <button
            className="Profile-done1"
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/Menu') }
          >
            Consumo de agua
          </button>
          <button
            className="Profile-done1"
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/foods') }
          >
            Corte eléctrico

          </button>
          <button
            className="Profile-done1"
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/foods') }
          >
            Fuga de agua
          </button>
          <button
            className="Profile-done1"
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => history.push('/foods') }
          >
            Temperatura

          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
