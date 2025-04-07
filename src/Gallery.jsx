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

    if (response.isLoading){
      return (
        <section>
            <h4>Loading...</h4>
        </section>
      )
  }

  if (response.isError){
      return (
        <section>
            <h4>There was an error...</h4>
        </section>
      )
  }

  const results = response.data.results
 if(results.lenght < 1)
  <section>
      <h4>No results found...</h4>
  </section>
  
  

  return(
     <section className="image-container">
       {results.map((item)=>{
          const url = item?.urls?.regular
          return  <img
          src={url}
          key={item.id}
          alt={item.alt_description}
          className="img"
          ></img>
       })}
     </section>
   

  );
};

export default Gallery 