import React, { useEffect, useState } from 'react'; 
import { useAxios } from '../hook/useAxios';
import { API_KEY } from '../hook/useEnv';
import CustomCard from '../components/CustomCard'; 

function NowPlaying() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await useAxios().get(`/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`);
        setProducts(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      }
    };

    fetchNowPlaying();
  }, []);

  return (
    <div className='p-5'>
      <ul className="flex flex-wrap justify-between gap-5">
        {products.map(item => (
          <li key={item.id} className="mx-auto">
            <CustomCard item={item} /> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NowPlaying;
