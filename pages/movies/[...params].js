import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

// /movies/121221와 같은 URL로 접속하면 나오게 될 페이지
export default function Detail(){
  const router = useRouter();
  console.log(router);
  const [title, id] = router.query.params;

  return (
    <div>
      <Seo title={title}/>
      <h4>{title}</h4>
    </div>
  );
}