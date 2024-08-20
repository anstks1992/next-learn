import Link from "next/link";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

export const metadata = {
  title: "Home",
};
//server side
//백엔드에서 데이터를 fetch하면서 useState나 그런것을 안봐도 됨
//즉각적인 로딩상태를 볼수 잇음(=사용자는 즉시 ui를 볼수잇음)
//통신이 마무리 되었을때 프레임워크에 의해 실제 결과값으로 자동적으로 교체
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); //잠시만 느리게
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
// 폴더명은 반드시 app으로 해야되면 파일명은 page
// ()은 url에 전혀 영향을 미치지 않는다

/*
//client side
export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <div>{isLoading ? "Loading" : JSON.stringify(movies)}</div>;
}
*/
