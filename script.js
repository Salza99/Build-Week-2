const URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const idBohemian = "75621062";
const idHybridTheory = "81763";
const idTheEminemShow = "103248";

window.onload = async () => {
  try {
    const resp = await fetch(URL + idBohemian, { method: "GET" });
    const albumObj = await resp.json();
    console.log(albumObj);
    document.getElementById("imgHead").src = albumObj.cover;
    const divHead = document.getElementById("headDetails");
    divHead.innerHTML = ` <p>ALBUM</p>
    <h2 class="fs-1">${albumObj.title}</h2>
    <p>${albumObj.contributors[0].name}</p>
    <p>Ascolta il famossissimo album dei ${albumObj.contributors[0].name}</p>
    <button class="btn btn-success rounded-pill px-4 py-2">Play</button>
    <button class="btn btn-outline-light rounded-pill px-4 py-2 ms-3">Salva</button>
    <i class="bi bi-three-dots ms-3"></i>`;
  } catch (error) {
    console.log(error);
  }
};
