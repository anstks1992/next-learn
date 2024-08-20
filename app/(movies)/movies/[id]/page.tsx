//폴더이름에 중괄호[]를 넣을시 동적 라우팅 가능
//123123?region=kr&page=2
// export default function MovieDetail(props) {
//   console.log(props);
//   return <h1>Movie {id}</h1>;
// }

import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../component/movie-info";
import MovieVideos from "../../../../component/movie-video";

async function getMovies(id: string) {
  console.log(`fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //throw new Error("somethong broke");
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovies(id);
  return {
    title: movie.title,
  };
}

// 1
// async function getMovies(id: string) {
//   console.log(`fetching movies: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// async function getViedos(id: string) {
//   console.log(`fetching videos: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

// export default async function MovieDetail({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   const [movie, videos] = await Promise.all([getMovies(id), getViedos(id)]);
//   /*Propmise.all
//   자바스크립트에서 여러 비동기 작업을 동시에 실행하고,
//   모든 작업이 완료될 때까지(여러 Promise를 모두 이행할 때까지 기다린 후) 기다렸다가 결과를 배열 형태로 반환하는 함수입니다.
//   */

//   return (
//     <h1>
//       {movie.title}
//       {videos.title}
//     </h1>
//   );
// }

//2
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
  //suspense
  //전체페이지가 아닌 fetch해야 하는 컴포넌트만 로딩상태 가능
}
