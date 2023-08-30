const app = () => {
  const artistId = new URLSearchParams(window.location.search).get("artistId");
  const albumId = new URLSearchParams(window.location.search).get("albumId");

  if (artistId) {
    //CARICA ARTISTA
  } else if (albumId) {
    //CARICA ALBUM
  } else {
    //CARICA HOME
  }
};
//app la chiamiamo ad ogni eventListener('click', app);
