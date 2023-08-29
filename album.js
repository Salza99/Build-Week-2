const URL = "https://striveschool-api.herokuapp.com/api/deezer/album/81847";
const URLSearch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=linking_park";

window.addEventListener("DOMContentLoaded", async () => {
  const search = await fetch(URLSearch);
  const res = await search.json();
  const album = await fetch(URL);
  const albumRes = await album.json();
  const realRes = res.data;
  console.log(albumRes);

  let cover = document.getElementsByClassName("img-fluid");
  cover[0].setAttribute("src", realRes[0].album.cover);
  let title = document.getElementById("title");
  let artist = document.getElementById("artist");

  title.innerText = realRes[0].title;
  artist.innerHTML = `${realRes[0].artist.name} . ${realRes[0].release_date} . ${realRes[0].nb_tracks} . ${realRes[0].duration} `;
});
