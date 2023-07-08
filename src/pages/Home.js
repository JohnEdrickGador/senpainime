import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider';
import CardsContainer from '../components/CardsContainer';
// import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
  const [topAnime, setTopAnime] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);

  const getPopular = async () => {
    const temp2 = await fetch(`https://api.jikan.moe/v4/top/anime?limit=10&&type=movie&&filter=bypopularity`)

    .then(res => res.json());
    setMostPopular(temp2.data)
  }

  //add empty array so that the function will only be called once
  useEffect(() => {
    getPopular();
  },[])
  
  
  return (
    <div>
        <Navbar/>
        <div className='recommendations'>
          <p>Top 10 Most Popular</p>
          <CardsContainer searchResults={mostPopular} />
        </div>
    </div>
  )
}

export default Home