let playpauseBtn = document.querySelector(".bx.bx-play");
let smallImage = document.querySelector(".small-image");
let songName1 = document.querySelector("#songName1");
let songName2 = document.querySelector("#songName2");
let bigImage = document.querySelector(".big-img");
let img = document.querySelector(":root");
let slider = document.querySelector(".slider");
let currentTime = document.querySelector(".current-time");
let leftedTime = document.querySelector(".lefted-time");
let image = document.querySelector("img");
let prevBtn = document.querySelector(".bx-skip-previous");
let nextBtn = document.querySelector(".bx-skip-next");
let artist = document.querySelector(".song-artist");
let currentSong = document.getElementById("current");
let totalSong = document.getElementById("total");
let shuffleBtn = document.querySelector(".shuffle-button");

let songIndex = 7;
let music = new Audio(songs[songIndex].src);
setUpInfo();

let songDuration;
let width;
let leftedMinutes;
let leftedSeconds;
let currentDuration = 0;
let minutes = 0;
let seconds = 0;

music.addEventListener("loadedmetadata", function () {
  songDuration = music.duration;
  width = 0;
  leftedMinutes = Math.floor(songDuration / 60);
  leftedSeconds = Math.floor(songDuration - leftedMinutes * 60);

  let M = leftedMinutes < 10 ? "0" + leftedMinutes : leftedMinutes;
  let S = leftedSeconds < 10 ? "0" + leftedSeconds : leftedSeconds;
  leftedTime.innerHTML = "-" + M + ":" + S;
});

document.addEventListener("DOMContentLoaded", () => {
  slider.addEventListener("click", f);
});

function f(ev) {
  width = ev.offsetX / 2.1;
  currentDuration = songDuration * (width / 100);
  music.currentTime = currentDuration;
  slider.style.setProperty("--width", width + "%");
  minutes = Math.floor(currentDuration / 60);
  seconds = Math.floor(currentDuration - minutes * 60);

  leftedMinutes = Math.floor((songDuration - currentDuration) / 60);
  leftedSeconds = Math.floor(
    songDuration - currentDuration - leftedMinutes * 60
  );
}

function increasingSlider() {
  slider.style.setProperty("--width", width + "%");
  width += 100 / songDuration;
}

function increasingTime() {
  seconds++;
  leftedSeconds--;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (leftedSeconds === 0) {
    leftedSeconds = 59;
    leftedMinutes--;
  }

  let s = seconds < 10 ? "0" + seconds : seconds;
  let m = minutes < 10 ? "0" + minutes : minutes;

  currentTime.innerHTML = m + ":" + s;

  let lM = leftedMinutes < 10 ? "0" + leftedMinutes : leftedMinutes;
  let lS = leftedSeconds < 10 ? "0" + leftedSeconds : leftedSeconds;
  leftedTime.innerHTML = "-" + lM + ":" + lS;

  let totalDuration = m * 60 + parseInt(s);
  console.log(totalDuration);
  if (totalDuration === Math.floor(music.duration) - 2) {
    console.log("Tugadi");
    nextSong();
    resetInterval();
    clearing();
    reseting();
    interval();
    setUpInfo();
    nowPlaying();
  }
}

prevBtn.addEventListener("click", () => {
  prevSong();

  resetInterval();
  clearing();
  reseting();
  interval();
  setUpInfo();
  nowPlaying();
});

nextBtn.addEventListener("click", () => {
  nextSong();

  resetInterval();
  clearing();
  reseting();
  interval();
  setUpInfo();
  nowPlaying();
});

playpauseBtn.addEventListener("click", () => {
  if (playpauseBtn.dataset.playPause === "true") {
    nowPlaying();
    interval();
  } else {
    nowPaused();
    clearing();
  }
});

let shuffling = false;
shuffleBtn.addEventListener("click", () => {
  if (!shuffling) {
    shuffleBtn.style.color = "rgb(82, 136, 193)";
    // shuffleBtn.style.border = "1px solid rgba(255, 255, 255, 0.5)";
    shuffling = true;
  } else {
    shuffleBtn.style.color = "white";
    // shuffleBtn.style.border = "1px solid rgba(255, 255, 255, 0)";
    shuffling = false;
  }
});

function nextSong() {
  if (!shuffling) {
    if (songIndex === songs.length - 1) {
      songIndex = 0;
    } else {
      songIndex++;
    }
  } else {
    let index = Math.floor(songs.length * Math.random());
    if (index !== songIndex) {
      songIndex = index;
    } else {
      if (index === songs.length - 1) {
        songIndex = index - 1;
      } else {
        songIndex = index + 1;
      }
    }
  }
}

function prevSong() {
  if (!shuffling) {
    if (songIndex === 0) {
      songIndex = songs.length - 1;
    } else {
      songIndex--;
    }
  } else {
    songIndex = Math.floor(songs.length * Math.random());
  }
}

let interval1;
let interval2;
function interval() {
  interval1 = setInterval(increasingTime, 1000);
  interval2 = setInterval(increasingSlider, 1000);
}

function clearing() {
  clearInterval(interval1);
  clearInterval(interval2);
}

function resetInterval() {
  minutes = 0;
  seconds = 0;
}

function setUpInfo() {
  bigImage.setAttribute("src", songs[songIndex].cover);
  img.style.setProperty("--back-img", "url(" + songs[songIndex].cover + ")");
  smallImage.setAttribute("src", songs[songIndex].cover);
  music.setAttribute("src", songs[songIndex].src);
  songName1.innerHTML = songs[songIndex].name;
  songName2.innerHTML = songs[songIndex].name;
  artist.innerHTML = songs[songIndex].artist;
  currentSong.innerHTML = songIndex + 1;
  totalSong.innerHTML = songs.length;
}

function nowPlaying() {
  playpauseBtn.classList.remove("bx-play");
  playpauseBtn.classList.add("bx-pause");
  smallImage.style.animationPlayState = "running";
  songName1.style.animationPlayState = "running";
  songName2.style.animationPlayState = "running";
  bigImage.style.width = "80%";
  music.play();

  playpauseBtn.dataset.playPause = false;
}

function nowPaused() {
  playpauseBtn.classList.remove("bx-pause");
  playpauseBtn.classList.add("bx-play");
  smallImage.style.animationPlayState = "paused";
  songName1.style.animationPlayState = "paused";
  songName2.style.animationPlayState = "paused";
  bigImage.style.width = "90%";
  music.pause();

  playpauseBtn.dataset.playPause = true;
}

function reseting() {
  currentTime.innerHTML = "00:00";
  let M = leftedMinutes < 10 ? "0" + leftedMinutes : leftedMinutes;
  let S = leftedSeconds < 10 ? "0" + leftedSeconds : leftedSeconds;
  leftedTime.innerHTML = "-" + M + ":" + S;
}
