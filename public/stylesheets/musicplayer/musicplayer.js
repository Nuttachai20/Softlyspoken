// let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".current-song");
// let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".play-button");
let next_btn = document.querySelector(".next-button");
let prev_btn = document.querySelector(".prev-button");

let box = document.getElementById("box");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".start-time");
let total_duration = document.querySelector(".end-time");

// Specify globally used values 
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player 
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played 
let track_list = [
  {
    name: String(track_index),
    artist: "Gunna",
    image: "http://localhost:3000/resources/track_art.png",
    path: "http://localhost:3000/tracks/5fbcdabd034977421c7609e5"
  },
  {
    name: String(track_index),
    artist: "Gunna",
    image: "http://localhost:3000/resources/track_art.png",
    path: "http://localhost:3000/tracks/5fba3abd803bbc17d064c012"
  }
];

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  // track_artist.textContent = track_list[track_index].artist;
  // now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  // curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<img src="http://localhost:3000/resources/pause.png" style = "width: 22px;height: 31px;border-radius: 0%;margin-left: 0px;margin-top: 0px;" > ';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<img src="http://localhost:3000/resources/play.png" style = "width: 28px;height: 33px;border-radius: 0%;margin-left: 5px;margin-top: 5px;" > ';
}

function forward10sec() {
  curr_track.currentTime += 10;
}

function backward10sec() {
  curr_track.currentTime -= 10;
}

function setVolume() {
  // Set the volume according to the 
  // percentage of the volume slider set 
  curr_track.volume = volume_slider.value / 100;
}

function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

function show() {
  let x = document.querySelector(".volume-controls input");
  let y = document.querySelector(".volume-controls")
  if (x.style.display === "none" && y.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "flex";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}
