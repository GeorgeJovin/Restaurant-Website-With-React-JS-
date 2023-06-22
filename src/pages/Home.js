import React from 'react';
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
import banner from '../images/banner.jpg';
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
          <h1>Food Corner</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;