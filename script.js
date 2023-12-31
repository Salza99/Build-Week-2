const loadHome = async () => {
  loadMusic();
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
  const idBohemian = "75621062";
  const idHybridTheory = "81763";
  const idTheEminemShow = "103248";
  const idDYSTOPIA = "472171155";
  const idScorpion = "69319552";
  const idXXX = "58972642";
  const idMilanoDemons = "379835987";
  const idMadreperla = "396100347";
  const idGemelli = "154545792";
  const idINNOCENTE = "446034935";
  const mainContent = document.getElementById("js-main-content");
  mainContent.innerHTML = `
  <div class="d-flex justify-content-between container-fluid sticky-top end-0 start-0 toolbar pt-2">
  <div class="pt-2">
  
      <i class="rounded-circle bg-dark p-2 bi bi-chevron-left"></i>
      <i class="rounded-circle bg-dark p-2 bi bi-chevron-right"></i>
    </div>



  <div>
  <button
    class="btn align-self-start d-none d-xl-inline-block"
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
<div class="bg-dark p-2 rounded">

<div class="text-white d-xl-flex mt-5 rounded container d-none justify-content-between" id="head">
       
          <div class="d-flex">
            <a href="#" class="text-decoration-none"
              ><img
                src="https://ilbenessereolistico.com/wp-content/uploads/2018/10/Viola-1200x675.jpeg"
                alt=""
                style="width: 250px; height: 250px"
                class="m-4"
                id="imgHead"
            /></a>

            <div class="m-4" id="headDetails">
              <p>ALBUM</p>
              <h2 class="fs-1">VIOLA (feat.Salmo)</h2>
              <p>Fedez, Salmo</p>
              <p>Ascolta il nuovo singolo di Fedez e Salmo!</p>
              <button class="btn btn-success rounded-pill px-4 py-2">Play</button>
              <button class="btn btn-outline-light rounded-pill px-4 py-2 ms-3">Salva</button>
              <i class="bi bi-three-dots ms-3"></i>
            </div>
          </div>
            <button class="btn btn-outline-light rounded-pill px-2 py-1 ms-3 buttonNascondi" onclick="nascondiHead()">Nascondi annunci</button>
                  
</div>
          <div class="container">
            <h3 class="text-white d-block mt-5 mb-3">Buonasera</h3>
            <div class="row" id="buonaseraRow"><div class="spinner-border text-success mx-auto" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>
            <h3 class="text-white mt-5 mb-3">Altro di ciò che ti piace</h3>
            <div class="row" id="rowAltroCheTiPiace"><div class="spinner-border text-success mx-auto" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>
            <h3 class="text-white mt-5 mb-3">Consigliati</h3>
            <div class="row" id="rowConsigliati"><div class="spinner-border text-success mx-auto" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>
            <h3 class="text-white mt-5 mb-3">Album più popolari</h3>
            <div class="row" id="rowPiùPopolari"><div class="spinner-border text-success mx-auto" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>
            <h3 class="text-white mt-5 mb-3">Rap di Milano</h3>
            <div class="row" id="rowDiMilano"><div class="spinner-border text-success mx-auto" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>
</div>
  `;
  try {
    const resp = await fetch(URL + idINNOCENTE, { method: "GET" });
    const albumObj = await resp.json();
    document.getElementById("imgHead").src = albumObj.cover;
    const divHead = document.getElementById("headDetails");
    divHead.innerHTML = ` <p>ALBUM</p>
    <a href="./index.html?albumId=${idINNOCENTE}" class="text-decoration-none"><h2 class="titleHead">${albumObj.title}</h2></a>
    <a href="./index.html?artistId=${albumObj.contributors[0].id}" class="text-decoration-none"><p>${albumObj.contributors[0].name}</p></a>
    <p>Ascolta il nuovo album di <a href="./index.html?artistId=${albumObj.contributors[0].id}" class="text-decoration-none"> ${albumObj.contributors[0].name} </a></p>
    <button class="btn btn-success rounded-pill px-4 py-2">Play</button>
    <button class="btn btn-outline-light rounded-pill px-4 py-2 ms-3">Salva</button>
    <i class="bi bi-three-dots ms-3"></i>
    `;
  } catch (error) {
    console.log(error);
  }

  try {
    const resp = await fetch(URL + idBohemian, { method: "GET" });
    const albumObj = await resp.json();
    const resp1 = await fetch(URL + idHybridTheory, { method: "GET" });
    const albumObj1 = await resp1.json();
    const resp2 = await fetch(URL + idTheEminemShow, { method: "GET" });
    const albumObj2 = await resp2.json();
    const resp3 = await fetch(URL + idDYSTOPIA, { method: "GET" });
    const albumObj3 = await resp3.json();
    const resp4 = await fetch(URL + idScorpion, { method: "GET" });
    const albumObj4 = await resp4.json();
    const resp5 = await fetch(URL + idXXX, { method: "GET" });
    const albumObj5 = await resp5.json();
    const resp6 = await fetch(URL + idMilanoDemons, { method: "GET" });
    const albumObj6 = await resp6.json();
    const resp7 = await fetch(URL + idMadreperla, { method: "GET" });
    const albumObj7 = await resp7.json();
    const resp8 = await fetch(URL + idGemelli, { method: "GET" });
    const albumObj8 = await resp8.json();
    const resp9 = await fetch(URL + idINNOCENTE, { method: "GET" });
    const albumObj9 = await resp9.json();
    const buonaseraRow = document.getElementById("buonaseraRow");
    buonaseraRow.innerHTML = `
<div class="col-6 col-lg-4 text-white">
<div class="card mb-3 text-white cardH">
  <div class="row g-0">
    <div class="col-4">
    <a href="./index.html?albumId=${idMilanoDemons}" class="text-decoration-none"> <img src="${albumObj6.cover}" class="img-fluid rounded-start" alt="..." /> </a>
    </div>
    <div class="col-8">
      <div class="card-body">
      <a href="./index.html?albumId=${idMilanoDemons}" class="text-decoration-none"> <h5 class="card-title text-truncate">${albumObj6.title}</h5> </a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-6 col-lg-4 text-white">
<div class="card mb-3 cardH">
  <div class="row g-0">
    <div class="col-4">
    <a href="./index.html?albumId=${idMadreperla}" class="text-decoration-none"> <img src="${albumObj7.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-8">
      <div class="card-body">
      <a href="./index.html?albumId=${idMadreperla}" class="text-decoration-none"> <h5 class="card-title text-truncate">${albumObj7.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-6 col-lg-4 text-white">
<div class="card mb-3 cardH">
  <div class="row g-0">
    <div class="col-4">
      <a href="./index.html?albumId=${idTheEminemShow}" class="text-decoration-none"><img src="${albumObj2.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-8">
      <div class="card-body">
        <a href="./index.html?albumId=${idTheEminemShow}" class="text-decoration-none"><h5 class="card-title text-truncate">${albumObj2.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-6 col-lg-4 text-white">
<div class="card mb-3 cardH">
  <div class="row g-0">
    <div class="col-4">
     <a href="./index.html?albumId=${idDYSTOPIA}" class="text-decoration-none"> <img src="${albumObj3.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-8">
      <div class="card-body">
       <a href="./index.html?albumId=${idDYSTOPIA}" class="text-decoration-none"> <h5 class="card-title text-truncate">${albumObj3.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-6 col-lg-4 text-white">
<div class="card mb-3 cardH">
  <div class="row g-0">
    <div class="col-4">
     <a href="./index.html?albumId=${idScorpion}" class="text-decoration-none"> <img src="${albumObj4.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-8">
      <div class="card-body">
       <a href="./index.html?albumId=${idScorpion}" class="text-decoration-none"> <h5 class="card-title text-truncate">${albumObj4.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-6 col-lg-4 text-white">
<div class="card mb-3 cardH">
  <div class="row g-0">
    <div class="col-4">
      <a href="./index.html?albumId=${idXXX}" class="text-decoration-none"><img src="${albumObj5.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-8">
      <div class="card-body">
       <a href="./index.html?albumId=${idXXX}" class="text-decoration-none"> <h5 class="card-title text-truncate">${albumObj5.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>`;

    const rowAltroCheTiPiace = document.getElementById("rowAltroCheTiPiace");
    rowAltroCheTiPiace.innerHTML = `              
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
  <a href="./index.html?albumId=${idXXX}" class="text-decoration-none"><img src="${albumObj5.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="./index.html?albumId=${idXXX}" class="text-decoration-none"><h5 class="card-title">${albumObj5.title}</h5></a>
    <a href="./index.html?artistId=${albumObj5.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj5.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
  <a href="./index.html?albumId=${idDYSTOPIA}" class="text-decoration-none"><img src="${albumObj3.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="./index.html?albumId=${idDYSTOPIA}" class="text-decoration-none"><h5 class="card-title">${albumObj3.title}</h5></a>
    <a href="./index.html?artistId=${albumObj3.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj3.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
  <a href="./index.html?albumId=${idHybridTheory}" class="text-decoration-none"><img src="${albumObj1.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="./index.html?albumId=${idHybridTheory}" class="text-decoration-none"><h5 class="card-title">${albumObj1.title}</h5></a>
    <a href="./index.html?artistId=${albumObj1.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj1.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
  <a href="./index.html?albumId=${idScorpion}" class="text-decoration-none"><img src="${albumObj4.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="./index.html?albumId=${idScorpion}" class="text-decoration-none"><h5 class="card-title">${albumObj4.title}</h5></a>
    <a href="./index.html?artistId=${albumObj4.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj4.contributors[0].name}</p></a>
  </div>
</div>
</div>`;

    const rowConsigliati = document.getElementById("rowConsigliati");
    rowConsigliati.innerHTML = `              
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
  <a href="./index.html?albumId=${idBohemian}" class="text-decoration-none"><img src="${albumObj.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="./index.html?albumId=${idBohemian}" class="text-decoration-none"><h5 class="card-title">${albumObj.title}</h5></a>
    <a href="./index.html?artistId=${albumObj.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
  <a href="./index.html?albumId=${idTheEminemShow}" class="text-decoration-none"><img src="${albumObj2.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="./index.html?albumId=${idTheEminemShow}" class="text-decoration-none"><h5 class="card-title">${albumObj2.title}</h5></a>
    <a href="./index.html?artistId=${albumObj2.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj2.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
  <a href="./index.html?albumId=${idMilanoDemons}" class="text-decoration-none"><img src="${albumObj6.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="./index.html?albumId=${idMilanoDemons}" class="text-decoration-none"><h5 class="card-title">${albumObj6.title}</h5></a>
    <a href="./index.html?artistId=${albumObj6.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj6.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
  <a href="./index.html?albumId=${idINNOCENTE}" class="text-decoration-none"><img src="${albumObj9.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="./index.html?albumId=${idINNOCENTE}" class="text-decoration-none"><h5 class="card-title">${albumObj9.title}</h5></a>
    <a href="./index.html?artistId=${albumObj9.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj9.contributors[0].name}</p></a>
  </div>
</div>
</div>`;

    const rowPiùPopolari = document.getElementById("rowPiùPopolari");
    rowPiùPopolari.innerHTML = `              
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
<a href="./index.html?albumId=${idGemelli}" class="text-decoration-none"><img src="${albumObj8.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="./index.html?albumId=${idGemelli}" class="text-decoration-none"><h5 class="card-title">${albumObj8.title}</h5></a>
<a href="./index.html?artistId=${albumObj8.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj8.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
<a href="./index.html?albumId=${idDYSTOPIA}" class="text-decoration-none"><img src="${albumObj3.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="./index.html?albumId=${idDYSTOPIA}" class="text-decoration-none"><h5 class="card-title">${albumObj3.title}</h5></a>
<a href="./index.html?artistId=${albumObj3.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj3.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
<a href="./index.html?albumId=${idHybridTheory}" class="text-decoration-none"><img src="${albumObj1.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="./index.html?albumId=${idHybridTheory}" class="text-decoration-none"><h5 class="card-title">${albumObj1.title}</h5></a>
<a href="./index.html?artistId=${albumObj1.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj1.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
<a href="./index.html?albumId=${idMadreperla}" class="text-decoration-none"><img src="${albumObj7.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="./index.html?albumId=${idMadreperla}" class="text-decoration-none"><h5 class="card-title">${albumObj7.title}</h5></a>
<a href="./index.html?artistId=${albumObj7.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj7.contributors[0].name}</p></a>
</div>
</div>
</div>`;

    const rowDiMilano = document.getElementById("rowDiMilano");
    rowDiMilano.innerHTML = `              
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
<a href="./index.html?albumId=${idMilanoDemons}" class="text-decoration-none"><img src="${albumObj6.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="./index.html?albumId=${idMilanoDemons}" class="text-decoration-none"><h5 class="card-title">${albumObj6.title}</h5></a>
<a href="./index.html?artistId=${albumObj6.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj6.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
<a href="./index.html?albumId=${idMadreperla}" class="text-decoration-none"><img src="${albumObj7.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="./index.html?albumId=${idMadreperla}" class="text-decoration-none"><h5 class="card-title">${albumObj7.title}</h5></a>
<a href="./index.html?artistId=${albumObj7.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj7.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
<a href="./index.html?albumId=${idINNOCENTE}" class="text-decoration-none"><img src="${albumObj9.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="./index.html?albumId=${idINNOCENTE}" class="text-decoration-none"><h5 class="card-title">${albumObj9.title}</h5></a>
<a href="./index.html?artistId=${albumObj9.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj9.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-6 col-lg-3 mb-4 mb-lg-1">
<div class="card mainCard">
<a href="./index.html?albumId=${idGemelli}" class="text-decoration-none"><img src="${albumObj8.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="./index.html?albumId=${idGemelli}" class="text-decoration-none"><h5 class="card-title">${albumObj8.title}</h5></a>
<a href="./index.html?artistId=${albumObj8.contributors[0].id}" class="text-decoration-none"><p class="card-text artistMainCard">${albumObj8.contributors[0].name}</p></a>
</div>
</div>
</div>
<br/>`;
  } catch (error) {
    console.log(error);
  }
};

const aggiungiListaAmici = () => {
  const listaAmici = document.getElementById("listaAmici");
  listaAmici.classList.remove("d-none");
};

const rimuoviListaAmici = () => {
  const listaAmici = document.getElementById("listaAmici");
  listaAmici.classList.add("d-none");
};

const nascondiHead = () => {
  const head = document.getElementById("head");
  head.remove();
};
