const caricaArtista = (id) => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id)
    .then((response) => {
      return response.json();
    })
    .then((artistObj) => {
      loadMusic();
      const content = document.getElementById("js-main-content");
      content.innerHTML = `
      <div class="d-flex justify-content-between container-fluid sticky-top end-0 start-0 toolbar">
    <div>
      <i class="bi bi-arrow-left-circle-fill me-2 text-white"></i>
      <i class="bi bi-arrow-right-circle-fill text-white"></i>
    </div>



  <div>
  <button
    class="btn align-self-start"
    type="button"
    data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop"
    onclick="aggiungiListaAmici()"
    id="amici"
  >
    <i class="bi bi-people-fill text-white" ></i>
  </button>

  <div class="dropdown d-inline-block">
    <button class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img
    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    alt=""
    class="rounded-circle imgProfileHome"
  />
    </button>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li><a class="dropdown-item text-decoration-none" href="#">Account</a></li>
      <li><a class="dropdown-item text-decoration-none" href="#">Profilo</a></li>
      <li><a class="dropdown-item text-decoration-none" href="#">Sessione privata</a></li>
      <li><a class="dropdown-item text-decoration-none" href="#">Impostazioni</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item text-decoration-none" href="#">Esci</a></li>
    </ul>
</div>



</div>
</div>
      <div>
        <div class="card text-bg-dark mb-4">
          <img
            src="${artistObj.picture_xl}"
            class="card-img object-fit-cover"
            alt="..."
            height="400px"
          />
          <div class="card-img-overlay overlay-dark d-flex flex-column justify-content-end">
            <p class="card-text">
              <i class="bi bi-check-circle-fill text-primary"></i><small> Artista verificato</small>
            </p>
            <h2 class="card-title fs-title-album">${artistObj.name}</h2>
            <p class="card-text">${artistObj.nb_fan} ascoltatori mensili</p>
          </div>
        </div>
  
        <div class="container d-flex align-items-center mb-4">
          <div><i class="bi bi-play-circle-fill text-success me-4 fs-1"></i></div>
          <button class="border-white bg-dark text-white small me-4">FOLLOWING</button>
          <div>...</div>
        </div>
        <div class="container" id="js-albums-section">
          <h2>Popolari</h2>
          
          
        </div>
      </div>
        `;

      const albumSection = document.getElementById("js-albums-section");
      fetch(artistObj.tracklist)
        .then((response) => {
          return response.json();
        })
        .then((artistData) => {
          for (let i = 0; i < artistData.data.length; i++) {
            const durata = artistData.data[i].duration;
            let secondi = durata % 60;
            const minuti = ((durata - secondi) / 60) % 60;
            if (secondi < 10) {
              secondi = "0" + secondi;
            }
            const durataTracce = `${minuti} : ${secondi}`;

            albumSection.innerHTML += `
        <div class="row align-items-center justify-content-between mb-2" id="selectedTrack" >
            <div class="d-flex col-8 align-items-center justify-content-start" onclick="loadMusicOnStorage('${artistData.data[i].title}', '${artistData.data[i].album.cover}' ,'${artistObj.name}', '${artistData.data[i].preview}'); loadMusic();">
              <div class="me-2">${i}</div>
              <div class="me-2"><img src="${artistData.data[i].album.cover}" alt="" height="50px" /></div>
              <div>${artistData.data[i].title}</div>
            </div>
            <div class="col-2">${artistData.data[i].rank}</div>
            <div class="col-2">${durataTracce}</div>
          </div>
                `;
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const loadMusicOnStorage = (title, albumImg, artist, mp3) => {
  const obj = {
    title: title,
    albumImg: albumImg,
    artist: artist,
    mp3: mp3,
  };
  console.log(obj.mp3);
  localStorage.setItem("song", JSON.stringify(obj));
};
const loadMusic = () => {
  const player = document.getElementById("js-player");
  const audio = document.getElementById("player");
  const music = JSON.parse(localStorage.getItem("song"));
  if (music) {
    player.innerHTML = `
    <div class="me-2"><img src="${music.albumImg}" alt="" height="50px" /></div>
    <div>
      <div class="me-2">${music.title}</div>
      <div>${music.artist}</div>
    </div>
    `;
    audio.setAttribute("src", `${music.mp3}`);
  }
};
