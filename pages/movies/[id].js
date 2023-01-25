import { useRouter } from 'next/router';

// /movies/121221와 같은 URL로 접속하면 나오게 될 페이지
export default function Detail(){
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h4>
        {router.query.title || "Loading..."}
      </h4>
    </div>
  );
}