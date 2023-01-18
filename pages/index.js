import Seo from '@/components/Seo';
import { useEffect, useState } from 'react';


export default function Home({ results }){
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     // const response = await fetch(
  //     //   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  //     // );
  //     // const json = await response.json();
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, [])
  return (
    <div className='container'>
      <Seo title="Home"/>
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div key={movie.id} className='movie'>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
          <h4>{movie.original_title}</h4>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `
      }
      </style>
    </div>
  );
}


//get server side props (이름바뀌면 x) - 서버쪽에서만 실행
//props라는 key가 들어있는 object를 리턴
//page가 유저에게 보여지기 이전에 props 받아오는 함수
export async function getServerSideProps(){
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

  return {
    props: {
      results,
    },
  }
}