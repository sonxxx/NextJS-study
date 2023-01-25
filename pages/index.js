import Seo from '@/components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const onClick = (id, title) => {
    router.push({
      pathname: `/movies/${id}`,
      query: {
        title,
      }
    //as는 보여질 url을 작성
    }, `/movies/${id}`);
  };
  return (
    <div className='container'>
      <Seo title="Home"/>
      {/* {!movies && <h4>Loading...</h4>} */}
      {
        results?.map((movie) => (
          <div onClick={() => onClick(movie.id, movie.original_title)} className='movie' key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <h4>
              <Link href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                }
              }} as={`/movies/${movie.id}`} legacyBehavior>
                <a>{movie.original_title}</a>
              </Link>  
            </h4>
          </div>
        ))
      }

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
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