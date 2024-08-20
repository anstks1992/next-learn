//원래위치 about-us/components
import { API_URL } from "../app/constants";
import styles from "../styles/movie-video.module.css";

async function getVideos(id: string) {
  console.log(`fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideos(id);
  return (
    <div className={styles.container}>
      {video.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.title}
        />
      ))}
    </div>
  );
}
