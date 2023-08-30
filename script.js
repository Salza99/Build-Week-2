const loadHome = async () => {
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
  <div class="d-flex justify-content-between container sticky-top end-0 start-0">
  <div>
    <i class="bi bi-arrow-left-circle-fill me-2 text-white"></i>
    <i class="bi bi-arrow-right-circle-fill text-white"></i>
  </div>
  <button
    class="btn align-self-start"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop"
  >
    <i class="bi bi-people-fill text-white"></i>
  </button>
</div>
<div class="bg-dark p-2 rounded">
<div class="text-white d-flex mt-5 bg-black rounded container" id="head">
            <a href="#" class="text-decoration-none"
              ><img
                src="https://ilbenessereolistico.com/wp-content/uploads/2018/10/Viola-1200x675.jpeg"
                alt=""
                style="width: 200px; height: 200px"
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
          <div class="container">
            <h3 class="text-white d-block mt-5 mb-3">Buonasera</h3>
            <div class="row" id="buonaseraRow"></div>
            <h3 class="text-white mt-5 mb-3">Altro di ciò che ti piace</h3>
            <div class="row" id="rowAltroCheTiPiace"></div>
            <h3 class="text-white mt-5 mb-3">Consigliati</h3>
            <div class="row" id="rowConsigliati"></div>
            <h3 class="text-white mt-5 mb-3">Album più popolari</h3>
            <div class="row" id="rowPiùPopolari"></div>
            <h3 class="text-white mt-5 mb-3">Rap di Milano</h3>
            <div class="row" id="rowDiMilano"></div>
</div>
  `;
  try {
    const resp = await fetch(URL + idINNOCENTE, { method: "GET" });
    const albumObj = await resp.json();
    document.getElementById("imgHead").src = albumObj.cover;
    const divHead = document.getElementById("headDetails");
    divHead.innerHTML = ` <p>ALBUM</p>
    <a href="./index.html?albumId=${idINNOCENTE}" class="text-decoration-none"><h2 class="fs-1">${albumObj.title}</h2></a>
    <a href="./index.html?artistId=6855525" class="text-decoration-none"><p>${albumObj.contributors[0].name}</p></a>
    <p>Ascolta il nuovo album di <a href="#" class="text-decoration-none"> ${albumObj.contributors[0].name} </a></p>
    <button class="btn btn-success rounded-pill px-4 py-2">Play</button>
    <button class="btn btn-outline-light rounded-pill px-4 py-2 ms-3">Salva</button>
    <i class="bi bi-three-dots ms-3"></i>`;
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
<div class="col-4 text-white">
<div class="card mb-3 text-white">
  <div class="row g-0">
    <div class="col-md-4">
    <a href="#" class="text-decoration-none"> <img src="${albumObj.cover}" class="img-fluid rounded-start" alt="..." /> </a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <a href="#" class="text-decoration-none"> <h5 class="card-title">${albumObj.title}</h5> </a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-4 text-white">
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
     <a href="#" class="text-decoration-none"> <img src="${albumObj1.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
       <a href="#" class="text-decoration-none"> <h5 class="card-title">${albumObj1.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-4 text-white">
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <a href="#" class="text-decoration-none"><img src="${albumObj2.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj2.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-4 text-white">
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
     <a href="#" class="text-decoration-none"> <img src="${albumObj3.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
       <a href="#" class="text-decoration-none"> <h5 class="card-title">${albumObj3.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-4 text-white">
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
     <a href="#" class="text-decoration-none"> <img src="${albumObj4.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
       <a href="#" class="text-decoration-none"> <h5 class="card-title">${albumObj4.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>
<div class="col-4 text-white">
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <a href="#" class="text-decoration-none"><img src="${albumObj5.cover}" class="img-fluid rounded-start" alt="..." /></a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
       <a href="#" class="text-decoration-none"> <h5 class="card-title">${albumObj5.title}</h5></a>
      </div>
    </div>
  </div>
</div>
</div>`;

    const rowAltroCheTiPiace = document.getElementById("rowAltroCheTiPiace");
    rowAltroCheTiPiace.innerHTML = `              
<div class="col-3">
<div class="card">
  <a href="#" class="text-decoration-none"><img src="${albumObj5.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj5.title}</h5></a>
    <a href="#" class="text-decoration-none"><p class="card-text">${albumObj5.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-3">
<div class="card">
  <a href="#" class="text-decoration-none"><img src="${albumObj3.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj3.title}</h5></a>
    <a href="#" class="text-decoration-none"><p class="card-text">${albumObj3.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-3">
<div class="card">
  <a href="#" class="text-decoration-none"><img src="${albumObj1.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj1.title}</h5></a>
    <a href="#" class="text-decoration-none"><p class="card-text">${albumObj1.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-3">
<div class="card">
  <a href="#" class="text-decoration-none"><img src="${albumObj4.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj4.title}</h5></a>
    <a href="#" class="text-decoration-none"><p class="card-text">${albumObj4.contributors[0].name}</p></a>
  </div>
</div>
</div>`;

    const rowConsigliati = document.getElementById("rowConsigliati");
    rowConsigliati.innerHTML = `              
<div class="col-3">
<div class="card">
  <a href="#" class="text-decoration-none"><img src="${albumObj.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj.title}</h5></a>
    <a href="#" class="text-decoration-none"><p class="card-text">${albumObj.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-3">
<div class="card">
  <a href="#" class="text-decoration-none"><img src="${albumObj2.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj2.title}</h5></a>
    <a href="#" class="text-decoration-none"><p class="card-text">${albumObj2.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-3">
<div class="card">
  <a href="#" class="text-decoration-none"><img src="${albumObj6.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj6.title}</h5></a>
    <a href="#" class="text-decoration-none"><p class="card-text">${albumObj6.contributors[0].name}</p></a>
  </div>
</div>
</div>
<div class="col-3">
<div class="card">
  <a href="#" class="text-decoration-none"><img src="${albumObj9.cover}" class="card-img-top" alt="..." /></a>
  <div class="card-body">
    <a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj9.title}</h5></a>
    <a href="#" class="text-decoration-none"><p class="card-text">${albumObj9.contributors[0].name}</p></a>
  </div>
</div>
</div>`;

    const rowPiùPopolari = document.getElementById("rowPiùPopolari");
    rowPiùPopolari.innerHTML = `              
<div class="col-3">
<div class="card">
<a href="#" class="text-decoration-none"><img src="${albumObj8.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj8.title}</h5></a>
<a href="#" class="text-decoration-none"><p class="card-text">${albumObj8.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-3">
<div class="card">
<a href="#" class="text-decoration-none"><img src="${albumObj3.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj3.title}</h5></a>
<a href="#" class="text-decoration-none"><p class="card-text">${albumObj3.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-3">
<div class="card">
<a href="#" class="text-decoration-none"><img src="${albumObj1.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj1.title}</h5></a>
<a href="#" class="text-decoration-none"><p class="card-text">${albumObj1.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-3">
<div class="card">
<a href="#" class="text-decoration-none"><img src="${albumObj7.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj7.title}</h5></a>
<a href="#" class="text-decoration-none"><p class="card-text">${albumObj7.contributors[0].name}</p></a>
</div>
</div>
</div>`;

    const rowDiMilano = document.getElementById("rowDiMilano");
    rowDiMilano.innerHTML = `              
<div class="col-3">
<div class="card">
<a href="#" class="text-decoration-none"><img src="${albumObj6.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj6.title}</h5></a>
<a href="#" class="text-decoration-none"><p class="card-text">${albumObj6.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-3">
<div class="card">
<a href="#" class="text-decoration-none"><img src="${albumObj7.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj7.title}</h5></a>
<a href="#" class="text-decoration-none"><p class="card-text">${albumObj7.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-3">
<div class="card">
<a href="#" class="text-decoration-none"><img src="${albumObj9.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj9.title}</h5></a>
<a href="#" class="text-decoration-none"><p class="card-text">${albumObj9.contributors[0].name}</p></a>
</div>
</div>
</div>
<div class="col-3">
<div class="card">
<a href="#" class="text-decoration-none"><img src="${albumObj8.cover}" class="card-img-top" alt="..." /></a>
<div class="card-body">
<a href="#" class="text-decoration-none"><h5 class="card-title">${albumObj8.title}</h5></a>
<a href="#" class="text-decoration-none"><p class="card-text">${albumObj8.contributors[0].name}</p></a>
</div>
</div>
</div>`;
  } catch (error) {
    console.log(error);
  }
};
