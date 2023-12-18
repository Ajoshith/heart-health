import React, { useEffect, useState } from 'react';
import Exp6 from './exp6';

function Exp5() {
  const [first, setFirst] = useState(null);
  const apilink = "https://newsapi.org/v2/top-headlines?q=cricket&from=2023-11-03&to=2023-11-03&sortBy=popularity&apiKey=3d88642bc8514c1e957eda554932cbe4";

  const setApi = async () => {
    try {
      const data = await fetch(apilink);
      const jsdata = await data.json();
      setFirst(jsdata);
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  }

  useEffect(() => {
    setApi(apilink);
  }, []);

if (first&&first.articles){
  return (
    <>
    {first.articles.map((article)=>
    <Exp6 title={article.title} description={article.description} />)}
    </>
  )
}
  return (
    <h1>Hello</h1>
  );
}

export default Exp5;
