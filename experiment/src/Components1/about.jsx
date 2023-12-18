import React, { useEffect, useState } from 'react';
import { getUserData } from './exp7';

const AboutPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getUserData(); // Call the function to get the actual JWT token

        const response = await fetch('/about', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [getUserData]); // Include getUserData in the dependency array

  return (
    <div>
      <h1>About Page</h1>
      {userData}
    </div>
  );
};

export default AboutPage;
