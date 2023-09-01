const pause = document.getElementById("pause");
const audio = document.getElementById("audio");
const play = document.getElementById("play");
const porgressBar = document.querySelector(".progressBar");
const porgress = document.querySelector(".progress");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const repeatBtn = document.getElementById("repeat");
const volumeInput = document.getElementById("custom-volume");
const volumeIcon = document.getElementById("volume-up");
const muteIcon = document.getElementById("mute");

volumeInput.addEventListener("input", () => {
  const valoreVolume = volumeInput.value / 100;
  audio.volume = valoreVolume;
  if (audio.volume === 0) {
    muteIcon.classList.remove("d-none");
    volumeIcon.classList.add("d-none");
  } else {
    muteIcon.classList.add("d-none");
    volumeIcon.classList.remove("d-none");
  }
});
volumeIcon.addEventListener("click", () => {
  muteIcon.classList.remove("d-none");
  volumeIcon.classList.add("d-none");
  volumeInput.value = 0;
  audio.volume = 0;
});
muteIcon.addEventListener("click", () => {
  muteIcon.classList.add("d-none");
  volumeIcon.classList.remove("d-none");
  volumeInput.value = 50;
  audio.volume = 0.5;
});
pause.addEventListener("click", () => {
  audio.pause();
  pause.classList.add("d-none");
  play.classList.remove("d-none");
});
play.addEventListener("click", () => {
  audio.play();
  pause.classList.remove("d-none");
  play.classList.add("d-none");
});

repeatBtn.addEventListener("click", () => {
  const pallinoRepeat = document.getElementById("pallino-repeat");
  if (pallinoRepeat.classList.contains("d-none")) {
    repeatBtn.classList.add("text-success");
    pallinoRepeat.classList.remove("d-none");
    audio.loop = true;
  } else {
    repeatBtn.classList.remove("text-success");
    pallinoRepeat.classList.add("d-none");
    audio.loop = false;
  }
});

audio.onloadedmetadata = () => {
  const durata = Math.floor(audio.duration);
  let secondi = durata % 60;
  const minuti = ((durata - secondi) / 60) % 60;
  if (secondi < 10) {
    secondi = "0" + secondi;
  }
  const durataTracce = `${minuti} : ${secondi}`;
  //   porgress.width = audio.currentTime * (audio.duration / 100);
  currentTime.innerText = `0:00`;
  duration.innerHTML = durataTracce;
};

if (audio.play()) {
  setInterval(() => {
    const timelapse = audio.currentTime * (100 / audio.duration);

    const durata = Math.floor(audio.currentTime);
    let secondi = durata % 60;
    const minuti = ((durata - secondi) / 60) % 60;
    if (secondi < 10) {
      secondi = "0" + secondi;
    }
    const durataTracce = `${minuti} : ${secondi}`;
    currentTime.innerText = durataTracce;

    porgress.setAttribute("style", `width:${timelapse}%`);
  }, 500);
}

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
