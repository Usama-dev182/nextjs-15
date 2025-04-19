import { posts } from "@/app/lib/placeholder-data";
import  Post  from "@/app/ui/components/posts/Post";


// export default function Page() { 
//       const post = posts.find((post) =>  post.id === 'a5e08164-b12b-4e72-9191-2f7daadb4e88');
 
//   return (
//     <>
//       <ul>
//        <Post {...post} />
//       </ul>
//     </>
//   );
// }

export default function Page({params} : {params: {id: string}}) { 
      const post = posts.find((post) =>  post.id === params.id);
 
  return (
    <>
      <ul>
       <Post {...post} />
      </ul>
    </>
  );
}