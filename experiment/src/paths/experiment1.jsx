import React, { useState, useEffect } from 'react';
import Cards from './cards';

const MyNewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const apiKey = '506e4c4bc0ebce07a5f14bfdc153919e';

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        // Check if data.articles is an array before updating state
        if (Array.isArray(data.articles)) {
          setNewsData((prevData) => [...prevData, ...data.articles]);
        } else {
          console.error('Invalid data format. Articles should be an array.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data for the first URL
    const url = `https://gnews.io/api/v4/search?category=health&q=diet for health&lang=en&country=in&max=2&apikey=${apiKey}`;
    fetchData(url);

    // Fetch data for the second URL
    const url1 = `https://gnews.io/api/v4/search?category=health&q=exercise for heart health&lang=en&country=in&max=2&apikey=${apiKey}`;
    fetchData(url1);
  }, [apiKey]);

  return (
    <div>
      <h1>News</h1>
      {newsData.map((article, index) => (
        <Cards key={index} title={article.title} description={article.description} />
      ))}
    </div>
  );
};

export default MyNewsComponent;
