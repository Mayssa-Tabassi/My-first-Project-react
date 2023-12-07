
import React from 'react';
import './Home.css'; 
import './Footer';

const Home = () => {
  const containerStyle = {
    backgroundImage: `url("image/17.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px', 
  };

  const h1Style = {
    textAlign: 'center',
    color: 'green',
    fontSize: '2rem', 
    marginBottom: '20px',
  };

  const pStyle = {
    textAlign: 'center',
    color: 'black',
    fontSize: '1.2rem', 
    maxWidth: '600px',
    marginBottom: '40px',
  };
 
  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Bienvenue sur notre site de parfums</h1>
      <p style={pStyle}>
      "Découvrez une collection exquise de parfums qui captivent vos sens et 

      laissent une empreinte mémorable."
      </p>
     
    
    

  </div>
    );
  };

  export default Home;
