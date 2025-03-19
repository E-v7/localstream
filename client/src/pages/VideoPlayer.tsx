import ReactPlayer from "react-player";
import { Container, Row } from "react-bootstrap";

function VideoPlayerPage({ video_url }: { video_url: string }) {
  return (
    <>
      <Container className="vh-100" fluid>
        <Row className="justify-content-center align-items-center h-100">
          <ReactPlayer url={video_url} controls={true} />
        </Row>
      </Container>
    </>
  );
}

export default VideoPlayerPage;
