import React, { useState, useEffect } from 'react';
import Cards from './cards';

const apiKey = '506e4c4bc0ebce07a5f14bfdc153919e';

const MyNewsComponent = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data.articles)) {
          setNewsData((prevData) => [...prevData, ...data.articles]);
          console.log(newsData)
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
  }, []); // Dependency array is empty as apiKey is constant

  return (
    <div>
      <h1>News</h1>
      {newsData.map((article, index) => (
        <Cards key={index} title={article.title} description={article.description} image={article.image} />
      ))}
    </div>
  );
};

export default MyNewsComponent;
