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
    name: "[วันพีช] - ความลับของคาวามัตสึ",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/[วันพีช] - ความลับของคาวามัตสึ.jpg",
    path: "http://localhost:3000/tracks/5fbe54b5bf68a943c4d30574"
  },
  {
    name: "5 เคล็ดลับคุยยังไงให้สนุก (ฉบับคนคุยไม่เก่ง)",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/5 เคล็ดลับคุยยังไงให้สนุก (ฉบับคนคุยไม่เก่ง).jpg",
    path: "http://localhost:3000/tracks/5fbe5567bf68a943c4d30595"
  },
  {
    name: "เข้าห้องปกครองครั้งแรก  69podcast EP.7 Highlight",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/เข้าห้องปกครองครั้งแรก  69podcast EP.7 Highlight.jpg",
    path: "http://localhost:3000/tracks/5fbe55a4bf68a943c4d305b0"
  },
  {
    name: "ตลกการเมือง  Podcast EP06",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/ได้ขำไปและได้คิดไปในเวลาเดียวกัน คำนี้ดี EP.220.jpg",
    path: "http://localhost:3000/tracks/5fbe55c9bf68a943c4d305cd"
  },
  {
    name: "ได้ขำไปและได้คิดไปในเวลาเดียวกัน  คำนี้ดี EP.220",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/ตลกการเมือง  Podcast EP06.jpg",
    path: "http://localhost:3000/tracks/5fbe55e6bf68a943c4d305fc"
  },
  {
    name: "นิทานตอนนอนกับลุงไนท์",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/นิทานตอนนอนกับลุงไนท์.jpg",
    path: "http://localhost:3000/tracks/5fbe55fdbf68a943c4d30623"
  },
  {},{},{},{},{},{},{},{},{},{},{},{},
  {
    name: "[วันพีช] - ความลับของคาวามัตสึ",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/[วันพีช] - ความลับของคาวามัตสึ.jpg",
    path: "http://localhost:3000/tracks/5fbe54b5bf68a943c4d30574"
  },
  {
    name: "5 เคล็ดลับคุยยังไงให้สนุก (ฉบับคนคุยไม่เก่ง)",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/5 เคล็ดลับคุยยังไงให้สนุก (ฉบับคนคุยไม่เก่ง).jpg",
    path: "http://localhost:3000/tracks/5fbe5567bf68a943c4d30595"
  },
  {
    name: "เข้าห้องปกครองครั้งแรก  69podcast EP.7 Highlight",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/เข้าห้องปกครองครั้งแรก  69podcast EP.7 Highlight.jpg",
    path: "http://localhost:3000/tracks/5fbe55a4bf68a943c4d305b0"
  },
  {
    name: "ตลกการเมือง  Podcast EP06",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/ได้ขำไปและได้คิดไปในเวลาเดียวกัน คำนี้ดี EP.220.jpg",
    path: "http://localhost:3000/tracks/5fbe55c9bf68a943c4d305cd"
  },
  {
    name: "ได้ขำไปและได้คิดไปในเวลาเดียวกัน  คำนี้ดี EP.220",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/ตลกการเมือง  Podcast EP06.jpg",
    path: "http://localhost:3000/tracks/5fbe55e6bf68a943c4d305fc"
  },
  {
    name: "นิทานตอนนอนกับลุงไนท์",
    artist: "",
    image: "http://localhost:3000/resources/trackart/entertain/นิทานตอนนอนกับลุงไนท์.jpg",
    path: "http://localhost:3000/tracks/5fbe55fdbf68a943c4d30623"
  },
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

function load18(id) {
  document.getElementById('name18').innerHTML = track_list[id].name
  document.getElementById('img18').src = track_list[id].image
}

function load19(id) {
  document.getElementById('name19').innerHTML = track_list[id].name;
  document.getElementById('img19').src = track_list[id].image
}

function load20(id) {
  document.getElementById('name20').innerHTML = track_list[id].name
  document.getElementById('img20').src = track_list[id].image
}

function load21(id) {
  document.getElementById('name21').innerHTML = track_list[id].name;
  document.getElementById('img21').src = track_list[id].image
}

function load22(id) {
  document.getElementById('name22').innerHTML = track_list[id].name;
  document.getElementById('img22').src = track_list[id].image
}

function load23(id) {
  document.getElementById('name23').innerHTML = track_list[id].name;
  document.getElementById('img23').src = track_list[id].image
}

function load24(id) {
  document.getElementById('name24').innerHTML = track_list[id].name
  document.getElementById('img24').src = track_list[id].image
}

function load25(id) {
  document.getElementById('name25').innerHTML = track_list[id].name;
  document.getElementById('img25').src = track_list[id].image
}

function load26(id) {
  document.getElementById('name26').innerHTML = track_list[id].name;
  document.getElementById('img26').src = track_list[id].image
}

function load27(id) {
  document.getElementById('name27').innerHTML = track_list[id].name;
  document.getElementById('img27').src = track_list[id].image
}

function load28(id) {
  document.getElementById('name28').innerHTML = track_list[id].name;
  document.getElementById('img28').src = track_list[id].image
}

function load29(id) {
  document.getElementById('name29').innerHTML = track_list[id].name
  document.getElementById('img29').src = track_list[id].image
}

function load30(id) {
  document.getElementById('name30').innerHTML = track_list[id].name;
  document.getElementById('img30').src = track_list[id].image
}

function load31(id) {
  document.getElementById('name31').innerHTML = track_list[id].name
  document.getElementById('img31').src = track_list[id].image
}

function load32(id) {
  document.getElementById('name32').innerHTML = track_list[id].name;
  document.getElementById('img32').src = track_list[id].image
}

function load33(id) {
  document.getElementById('name33').innerHTML = track_list[id].name;
  document.getElementById('img33').src = track_list[id].image
}

function load34(id) {
  document.getElementById('name34').innerHTML = track_list[id].name;
  document.getElementById('img34').src = track_list[id].image
}

function load35(id) {
  document.getElementById('name35').innerHTML = track_list[id].name
  document.getElementById('img35').src = track_list[id].image
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
