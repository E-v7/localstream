import { Container, Row, Col } from "react-bootstrap";

function GetMovieInfo() {
  // Test data. This will change later to get data from a file system using some middleware
  const all_movie_infos = [
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2021%2F08%2F09%2Fdune-button-2021-1628542173776.jpg&f=1&nofb=1&ipt=8c53037bfdb1a9d5d51eb56afefd632e162f9afd007f9222d55bfe3379501314&ipo=images",
      title: "Dune",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2F7%2F5%2F126330.jpg&f=1&nofb=1&ipt=7641b9efe60473c35acc03983584e65bc04d3bbe026388816ac5a6940f9d33e1&ipo=images",
      title: "Star Wars",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fv36kyEWptxB3TLpkr6r25aGbn7D.jpg&f=1&nofb=1&ipt=eb155386ecdcf43555f31b9a3c984857c9d0ce92a93ef2d009dfa02a019a7102&ipo=images",
      title: "Minecraft Movie",
    },
    {
      img: undefined,
      title: "Test Movie with a very long name for absolutely no reason",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2021%2F08%2F09%2Fdune-button-2021-1628542173776.jpg&f=1&nofb=1&ipt=8c53037bfdb1a9d5d51eb56afefd632e162f9afd007f9222d55bfe3379501314&ipo=images",
      title: "Dune",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2F7%2F5%2F126330.jpg&f=1&nofb=1&ipt=7641b9efe60473c35acc03983584e65bc04d3bbe026388816ac5a6940f9d33e1&ipo=images",
      title: "Star Wars",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fv36kyEWptxB3TLpkr6r25aGbn7D.jpg&f=1&nofb=1&ipt=eb155386ecdcf43555f31b9a3c984857c9d0ce92a93ef2d009dfa02a019a7102&ipo=images",
      title: "Minecraft Movie",
    },
    {
      img: undefined,
      title: "Test Movie with a very long name for absolutely no reason",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2021%2F08%2F09%2Fdune-button-2021-1628542173776.jpg&f=1&nofb=1&ipt=8c53037bfdb1a9d5d51eb56afefd632e162f9afd007f9222d55bfe3379501314&ipo=images",
      title: "Dune",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2F7%2F5%2F126330.jpg&f=1&nofb=1&ipt=7641b9efe60473c35acc03983584e65bc04d3bbe026388816ac5a6940f9d33e1&ipo=images",
      title: "Star Wars",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fv36kyEWptxB3TLpkr6r25aGbn7D.jpg&f=1&nofb=1&ipt=eb155386ecdcf43555f31b9a3c984857c9d0ce92a93ef2d009dfa02a019a7102&ipo=images",
      title: "Minecraft Movie",
    },
    {
      img: undefined,
      title: "Test Movie with a very long name for absolutely no reason",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-prd.ignimgs.com%2F2021%2F08%2F09%2Fdune-button-2021-1628542173776.jpg&f=1&nofb=1&ipt=8c53037bfdb1a9d5d51eb56afefd632e162f9afd007f9222d55bfe3379501314&ipo=images",
      title: "Dune",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2F7%2F5%2F126330.jpg&f=1&nofb=1&ipt=7641b9efe60473c35acc03983584e65bc04d3bbe026388816ac5a6940f9d33e1&ipo=images",
      title: "Star Wars",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fv36kyEWptxB3TLpkr6r25aGbn7D.jpg&f=1&nofb=1&ipt=eb155386ecdcf43555f31b9a3c984857c9d0ce92a93ef2d009dfa02a019a7102&ipo=images",
      title: "Minecraft Movie",
    },
    {
      img: undefined,
      title: "Test Movie with a very long name for absolutely no reason",
    },
  ];

  return all_movie_infos;
}

function GetMovieCards(
  movie_infos: (
    | {
        img: string;
        title: string;
      }
    | {
        img: undefined;
        title: string;
      }
  )[]
) {
  // Create movie cards
  const movie_cards = movie_infos.map((movie_info) => {
    return (
      <>
        <Col xs="auto">
          {movie_info.img ? (
            // Movie Card with Image
            <img
              src={movie_info.img}
              alt={movie_info.title}
              className="object-stretch-contain border rounded text-center"
              style={{ height: 400, width: 250 }}
              title={movie_info.title}
            />
          ) : (
            // Movie Card without Image
            <div
              className="border rounded d-flex align-items-center justify-content-center"
              style={{
                height: 400,
                width: 250,
                backgroundColor: "#f0f0f0",
                color: "#555",
                textAlign: "center",
              }}
            >
              {movie_info.title}
            </div>
          )}
        </Col>
      </>
    );
  });

  return movie_cards;
}

function MovieGrid() {
  const all_movies_info = GetMovieInfo();
  const movie_cards = GetMovieCards(all_movies_info);

  return (
    <>
      {/* Movie Grid */}
      <Container className="mt-3 mx-0" fluid>
        <div className="d-flex justify-content-center align-items-center">
          <Row className="justify-content-center gx-3 gy-3">{movie_cards}</Row>
        </div>
      </Container>
    </>
  );
}

export default MovieGrid;
