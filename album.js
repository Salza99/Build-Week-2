const URL = "https://striveschool-api.herokuapp.com/api/deezer/album/75621062";

const loadPageAlbum = async () => {
  let search = new URLSearchParams(window.location.search);
  let id = search.get("id");
  let albumObj = await fetch(URL);
  let album = await albumObj.json();
  let durata = album.duration;
  let secondi = durata % 60;
  let minuti = ((durata - secondi) / 60) % 60;
  let ore = ((durata - secondi - minuti * 60) / 3600) % 3600;
  if (secondi < 10) {
    secondi = "0" + secondi;
  }
  let durataTotaleAlbum = `${ore} : ${minuti} : ${secondi}`;
  let main = document.getElementById("js-main-content");
  main.innerHTML = `<div class="container text-white my-2 overflow-auto vh-100 rounded">
  <div class="d-flex justify-content-between sticky-top end-0 start-0 nav">
    <div><i class="bi bi-arrow-left-circle-fill me-2"></i> <i class="bi bi-arrow-right-circle-fill"></i></div>
    <div class="dropdown">
      <button class="btn btn-black" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="bi bi-people-fill text-white"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-dark">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-3 mb-3"><img src='${album.cover}' class="img-fluid pt-5" alt="" /></div>
    <div class="col-9 d-flex flex-column justify-content-end">
      <p>Album</p>
      <h2 id="title">${album.title}</h2>
      <p id="artist">${album.artist.name} · ${album.release_date} · ${album.nb_tracks} brani · ${durataTotaleAlbum}</p>
    </div>
  </div>
  <div class="d-flex mt-3 mb-4">
    <div class="me-3"><i class="bi bi-play-circle col-2"></i></div>
    <div class="me-3"><i class="bi bi-heart col-2"></i></div>
    <div class="me-3"><i class="bi bi-arrow-down-circle col-2"></i></div>
    <div class="me-3"><i class="bi bi-three-dots col-2"></i></div>
  </div>
  <div class="row mb-4">
    <div class="col-6">
      <h6># titolo</h6>
    </div>
    <div class="col-4">RIPRODUZIONI</div>
    <div class="col-2 d-flex justify-content-end"><i class="bi bi-clock"></i></div>
    
  </div><div id="listaTracce">
  
    </div>

    
`;
  let tracce = album.tracks.data;
  console.log(album);
  let tracksList = document.getElementById("listaTracce");
  for (let i = 0; i < tracce.length; i++) {
    let durata = tracce[i].duration;
    let secondi = durata % 60;
    let minuti = ((durata - secondi) / 60) % 60;
    if (secondi < 10) {
      secondi = "0" + secondi;
    }
    let durataTracce = `${minuti} : ${secondi}`;
    // let ranks = tracce[i].rank;

    // let arrRanks = JSON.stringify(ranks).split("");
    // let array = arrRanks.splice(0, 5, "0");
    // console.log(array);
    tracksList.innerHTML += `<div  class="d-flex align-items-center ">
    <div class="col-1 d-flex flex-column justify-content-center">${i + 1}</div>
  <div class="col-6">
    <h6>${tracce[i].title}</h6>
    <p>${tracce[i].artist.name}</p>
  </div>


<div class="col-1">${tracce[i].rank}</div>
<div class="col-4 d-flex justify-content-end">${durataTracce}</div>
</div></div>`;
  }
};
