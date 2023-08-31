const loadPageAlbum = async (id) => {
  loadMusic();
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
  let albumObj = await fetch(URL + id);
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
  <div class="d-flex flex-column flex-sm-row row-cols-sm-2 align-items-center">
    <div class="col-sm-5 col-md-4 col-lg-3 col-xl-2 mb-3"><img src='${album.cover}' class="w-75" pt-5" alt="" /></div>
    <div class="col-sm-7 col-md-8 col-lg-9 col-xl-10 d-flex flex-column  justify-content-end align-self-center">
      <p class="d-none d-sm-inline-block">Album</p>
      <h5 class="display-2 fw-bold" id="title">${album.title}</h5>
      <p id="artist" class="align-middle "><a class="fw-bold" href="./index.html?artistId=${album.artist.id}"><img width="25px" class="img-fluid rounded-circle" src="${album.artist.picture}" alt="">${album.artist.name} ·</a> <span class="d-block d-sm-inline"> ${album.release_date} · ${album.nb_tracks} brani  </span><span class="text-muted d-none d-sm-inline-block"> · ${durataTotaleAlbum}</span></p>
    </div>
  </div>
  <div class="d-flex mt-3 mb-4">
    <div class="me-3"><i class="bi bi-play-circle col-2"></i></div>
    <div class="me-3"><i class="bi bi-heart col-2"></i></div>
    <div class="me-3"><i class="bi bi-arrow-down-circle col-2"></i></div>
    <div class="me-3"><i class="bi bi-three-dots col-2"></i></div>
  </div>
  <div class="row mb-4">
    <div class="col-6 d-none d-sm-inline-block">
      <h6># titolo</h6>
    </div>
    <div class="col-4 d-none d-sm-inline-block">RIPRODUZIONI</div>
    <div class="col-2 d-flex justify-content-end d-none d-sm-inline-block"><i class="bi bi-clock"></i></div>
    
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
    tracksList.innerHTML += `<div  class="d-flex align-items-center justify-content-between justify-content-sm-start">
    <div class="col-1 d-flex flex-column justify-content-center fw-light">${i + 1}</div>
  <div class="col-6 align-content-start">
    <h6>${tracce[i].title}</h6>
    <a href="./index.html?artistId=${album.artist.id}"> <p class="text-muted">${tracce[i].artist.name}</p></a>
  </div>


<div class="col-1 text-muted d-none d-sm-inline-block">${tracce[i].rank}</div>
<div class="col-4 d-flex justify-content-end text-muted d-none d-sm-flex">${durataTracce}</div><i class="d-flex d-sm-none bi bi-three-dots-vertical"></i>
</div></div>`;
  }
};
