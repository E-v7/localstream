import "./styles/style.scss";
import NavBar from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";
import VideoPlayerPage from "./pages/VideoPlayer";

function App() {
  return (
    <>
      {/* <NavBar />
      <MovieGrid /> */}
      <VideoPlayerPage video_url={"http://localhost:3000/"} />
    </>
  );
}

export default App;
