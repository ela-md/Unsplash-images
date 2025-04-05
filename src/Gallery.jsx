import axios from "axios";
import { useQuery } from '@tanstack/react-query';


const url = 'https://api.unsplash.com/search/photos?client_id=KQP31iEegDQWe3CuZzYJfepLyJSzJ4lw9Nz4QPDlgyI&query=cat ';

function Gallery () {
  

  const response = useQuery({
      queryKey: ['images'],
      queryFn: async () => {
        const result = await axios.get(url);
        return result.data;
      },
    });

   return(
    <>
     <h2>Gallery</h2>
    </>
   )
};

export default Gallery 