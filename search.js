const search = async () => {
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  let input = document.querySelector("input").value;
  try {
    let searchObj = await fetch(URL + input);
    let searchResult = await searchObj.json();
    console.log(searchResult.data);

    let result = document.getElementById("searchResult");
    for (let i = 0; i < searchResult.data.length; i++) {
      input = "";
      result.innerHTML += `
      <div class="col-6 col-md-4 col-lg-3 col-xl-2 bg-success">
          <div class="row align-items-center ">
            <div class="col-4"><a href="./index.html?albumId=${searchResult.data[i].album.id}"><img src="${searchResult.data[i].album.cover}" alt="" class="img-fluid" /></a></div>
            <div class="col-8">
              <h5 class="text-white m-0">${searchResult.data[i].title}</h5>
              <a href="./index.html?artistId=${searchResult.data[i].artist.id}"><p class="text-white m-0">${searchResult.data[i].artist.name}</p></a>
            </div>
          </div>
        </div>
      
      
      
      
        `;
    }
  } catch (err) {
    console.log(err);
  }
};
document.getElementById("searchButton").addEventListener("click", (event) => {
  event.preventDefault();

  search();
});