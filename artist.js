const eventId = new URLSearchParams(window.location.search).get("eventId"); /* piglio l'ID*/

const caricaArtista = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/1")
    .then((response) => {
      return response.json();
    })
    .then((artistObj) => {
      const content = document.getElementById("js-main-content");
      content.innerHTML = `
        <div class="d-flex justify-content-between z-1 sticky-top end-0 start-0">
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
            albumSection.innerHTML += `
        <div class="row align-items-center justify-content-between mb-2">
            <div class="d-flex col-8 align-items-center justify-content-start">
              <div class="me-2">${i}</div>
              <div class="me-2"><img src="${artistData.data[i].album.cover}" alt="" height="50px" /></div>
              <div>${artistData.data[i].title}</div>
            </div>
            <div class="col-2">${artistData.data[i].rank}</div>
            <div class="col-2">${artistData.data[i].duration}</div>
          </div>
                `;
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
caricaArtista();
