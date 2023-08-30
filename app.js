const app = () => {
  const artistId = new URLSearchParams(window.location.search).get("artistId");
  const albumId = new URLSearchParams(window.location.search).get("albumId");

  if (artistId) {
    caricaArtista();
  } else if (albumId) {
    loadPageAlbum(albumId);
  } else {
    loadHome();
  }
};
app();
//app la chiamiamo ad ogni eventListener('click', app);
