import React from 'react';
import DateTimeComponent from '../components/DateTime'; 
import cl from '../styles/General.module.css'

const PrivacyPolicy = () => {
  const userTimeZone = 'Europe/Minsk'; 

  return (
    <div className={cl.container}>

      <h2 className={cl.info}>Privacy Policy</h2>
      <div className={cl.Block}><DateTimeComponent userTimeZone={userTimeZone} /></div>
    </div>
  );
};

export default PrivacyPolicy;
