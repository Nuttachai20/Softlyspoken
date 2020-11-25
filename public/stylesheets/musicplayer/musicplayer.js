// let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".current-song");
// let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".play-button");
let next_btn = document.querySelector(".next-button");
let prev_btn = document.querySelector(".prev-button");

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
    name: "A",
    artist: "Gunna",
    image: "http://localhost:3000/resources/track_art.png",
    path: "http://localhost:3000/tracks/5fbcdabd034977421c7609e5"
  },
  {
    name: "B",
    artist: "Gunna",
    image: "http://localhost:3000/resources/track_art.png",
    path: "http://localhost:3000/tracks/5fba3abd803bbc17d064c012"
  },
  {
    name: "C",
    artist: "Gunna",
    image: "http://localhost:3000/resources/track_art.png",
    path: "http://localhost:3000/tracks/5fbcdabd034977421c7609e5"
  },
  {
    name: "D",
    artist: "Gunna",
    image: "http://localhost:3000/resources/track_art.png",
    path: "http://localhost:3000/tracks/5fba3abd803bbc17d064c012"
  },
  {
    name: "E",
    artist: "Gunna",
    image: "http://localhost:3000/resources/track_art.png",
    path: "http://localhost:3000/tracks/5fbcdabd034977421c7609e5"
  },
  {
    name: "F",
    artist: "Gunna",
    image: "http://localhost:3000/resources/track_art.png",
    path: "http://localhost:3000/tracks/5fba3abd803bbc17d064c012"
  }
];

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  pauseTrack();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  // track_artist.textContent = track_list[track_index].artist;
  // now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  // curr_track.addEventListener("ended", nextTrack);
}


//loadcard
function load0(id) {
  document.getElementById('name0').innerHTML = track_list[id].name
  document.getElementById('img0').src = track_list[id].image
}

function load1(id) {
  document.getElementById('name1').innerHTML = track_list[id].name;
  document.getElementById('img1').src = track_list[id].image
}

function load2(id) {
  document.getElementById('name2').innerHTML = track_list[id].name
  document.getElementById('img2').src = track_list[id].image
}

function load3(id) {
  document.getElementById('name3').innerHTML = track_list[id].name;
  document.getElementById('img3').src = track_list[id].image
}

function load4(id) {
  document.getElementById('name4').innerHTML = track_list[id].name;
  document.getElementById('img4').src = track_list[id].image
}

function load5(id) {
  document.getElementById('name5').innerHTML = track_list[id].name;
  document.getElementById('img5').src = track_list[id].image
}

function load6(id) {
  document.getElementById('name6').innerHTML = track_list[id].name
  document.getElementById('img6').src = track_list[id].image
}

function load7(id) {
  document.getElementById('name7').innerHTML = track_list[id].name;
  document.getElementById('img7').src = track_list[id].image
}

function load8(id) {
  document.getElementById('name8').innerHTML = track_list[id].name;
  document.getElementById('img8').src = track_list[id].image
}

function load9(id) {
  document.getElementById('name9').innerHTML = track_list[id].name;
  document.getElementById('img9').src = track_list[id].image
}

function load10(id) {
  document.getElementById('name10').innerHTML = track_list[id].name;
  document.getElementById('img10').src = track_list[id].image
}

function load11(id) {
  document.getElementById('name11').innerHTML = track_list[id].name
  document.getElementById('img11').src = track_list[id].image
}

function load12(id) {
  document.getElementById('name12').innerHTML = track_list[id].name;
  document.getElementById('img12').src = track_list[id].image
}

function load13(id) {
  document.getElementById('name13').innerHTML = track_list[id].name
  document.getElementById('img13').src = track_list[id].image
}

function load14(id) {
  document.getElementById('name14').innerHTML = track_list[id].name;
  document.getElementById('img14').src = track_list[id].image
}

function load15(id) {
  document.getElementById('name15').innerHTML = track_list[id].name;
  document.getElementById('img15').src = track_list[id].image
}

function load16(id) {
  document.getElementById('name16').innerHTML = track_list[id].name;
  document.getElementById('img16').src = track_list[id].image
}

function load17(id) {
  document.getElementById('name17').innerHTML = track_list[id].name
  document.getElementById('img17').src = track_list[id].image
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist

var stated = false;

function change(id) {
  stated = !stated;
  if (stated) {
    track_index = id;
    loadTrack(track_index);
  }
}

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
