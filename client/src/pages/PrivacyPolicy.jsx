import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [userTimeZone, setUserTimeZone] = useState('Europe/Minsk'); // Replace with the actual user time zone
  const [dataModifiedDate, setDataModifiedDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getDataModifiedDate();
  }, [userTimeZone]);

  const getDataModifiedDate = () => {
    try {
      // Replace this with the actual logic to fetch data modification date
      // For demonstration, using the current date as data modification date
      const now = new Date();
      if (!isNaN(now.getTime())) {
        const formattedDate = new Intl.DateTimeFormat('en-US', {
          timeZone: userTimeZone,
          dateStyle: 'full',
          timeStyle: 'long',
        }).format(now);
        setDataModifiedDate(formattedDate);
      } else {
        throw new Error('Invalid date');
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      {dataModifiedDate && (
        <p>
          {`Data Modification Date (Europe/Minsk): ${dataModifiedDate}`}
        </p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PrivacyPolicy;
