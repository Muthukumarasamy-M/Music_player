let songs = [
  {
    name: "Anbenum",
    artist: "Anirudh Ravichander and Lothika",
    path: "Music/Anbenum.mp3",
    cover: "images/anbenum.jpg",
  },
  {
    name: "Aradhya",
    artist: "Sid Sriram",
    path: "Music/Aradhya.mp3",
    cover: "images/Aradhya.jpg",
  },
  {
    name: "Hayyoda",
    artist: "Anirudh Ravichander",
    path: "Music/Hayyoda.mp3",
    cover: "images/hayyoda.jpg",
  },
  {
    name: "Naan Gaali",
    artist: "Sean Roldan",
    path: "Music/Naan-Gaali.mp3",
    cover: "images/naangaali.jpeg",
  },
  {
    name: "Nira",
    artist: "Sid Sriram",
    path: "Music/Nira.mp3",
    cover: "images/nira.jpeg",
  },
];

let currentIndex = 0; // Initialize currentIndex

let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");
let song = document.getElementById("song");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");

    // Start updating progress every 500 milliseconds
    setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  }
}

progress.addEventListener("input", function () {
  // Update the current time when the user interacts with the progress bar
  song.currentTime = progress.value;
});

function initSong() {
  let currentSong = songs[currentIndex];
  document.getElementById("song").src = currentSong.path;
  document.getElementById("song").load();
  document.getElementById("song").play();
  document.getElementById("songName").innerText = currentSong.name;
  document.getElementById("artistName").innerText = currentSong.artist;
  document.getElementById("song-img").src = currentSong.cover;
}

function playNext() {
  currentIndex = (currentIndex + 1) % songs.length;
  initSong();
}

function playPrevious() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  initSong();
}

initSong();
