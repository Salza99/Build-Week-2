const search = async () => {
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  let input = document.querySelector("input").value;

  try {
    let searchObj = await fetch(URL + input);
    let searchResult = await searchObj.json();
    console.log(searchResult.data);
    let result = document.getElementById("searchResult");
    result.innerHTML = "";
    for (let i = 0; i < searchResult.data.length; i++) {
      result.innerHTML += `
      <div class="col">
          
              
                <a href="./index.html?albumId=${searchResult.data[i].album.id}"><div class="card text-bg-dark mb-4"><img src="${searchResult.data[i].album.cover}" alt="" class="card-img object-fit-cover" /></a>
                  <div class="card-img-overlay overlay-dark d-flex flex-column justify-content-end">
                <div class=""><h5 class="text-white text-truncate">${searchResult.data[i].title}</h5>
                <a href="./index.html?artistId=${searchResult.data[i].artist.id}"><p class="text-white m-0">${searchResult.data[i].artist.name}</p></a>
                </div>
                </div>
                  
                
                  
                  
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
