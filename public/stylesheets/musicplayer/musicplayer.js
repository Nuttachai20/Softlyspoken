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
    image: "/resources/trackart/entertain/[วันพีช] - ความลับของคาวามัตสึ.jpg",
    path: "/tracks/5fbe54b5bf68a943c4d30574"
  },
  {
    name: "5 เคล็ดลับคุยยังไงให้สนุก (ฉบับคนคุยไม่เก่ง)",
    artist: "",
    image: "/resources/trackart/entertain/5 เคล็ดลับคุยยังไงให้สนุก (ฉบับคนคุยไม่เก่ง).jpg",
    path: "/tracks/5fbe5567bf68a943c4d30595"
  },
  {
    name: "เข้าห้องปกครองครั้งแรก  69podcast EP.7 Highlight",
    artist: "",
    image: "/resources/trackart/entertain/เข้าห้องปกครองครั้งแรก  69podcast EP.7 Highlight.jpg",
    path: "/tracks/5fbe55a4bf68a943c4d305b0"
  },
  {
    name: "ตลกการเมือง  Podcast EP06",
    artist: "",
    image: "/resources/trackart/entertain/ได้ขำไปและได้คิดไปในเวลาเดียวกัน คำนี้ดี EP.220.jpg",
    path: "/tracks/5fbe55c9bf68a943c4d305cd"
  },
  {
    name: "ได้ขำไปและได้คิดไปในเวลาเดียวกัน  คำนี้ดี EP.220",
    artist: "",
    image: "/resources/trackart/entertain/ตลกการเมือง  Podcast EP06.jpg",
    path: "/tracks/5fbe55e6bf68a943c4d305fc"
  },
  {
    name: "นิทานตอนนอนกับลุงไนท์",
    artist: "",
    image: "/resources/trackart/entertain/นิทานตอนนอนกับลุงไนท์.jpg",
    path: "/tracks/5fbe55fdbf68a943c4d30623"
  },
  {},{},{},{},{},{},{},{},{},{},{},{},
  {
    name: "[วันพีช] - ความลับของคาวามัตสึ",
    artist: "",
    image: "/resources/trackart/entertain/[วันพีช] - ความลับของคาวามัตสึ.jpg",
    path: "/tracks/5fbe54b5bf68a943c4d30574"
  },
  {
    name: "5 เคล็ดลับคุยยังไงให้สนุก (ฉบับคนคุยไม่เก่ง)",
    artist: "",
    image: "/resources/trackart/entertain/5 เคล็ดลับคุยยังไงให้สนุก (ฉบับคนคุยไม่เก่ง).jpg",
    path: "/tracks/5fbe5567bf68a943c4d30595"
  },
  {
    name: "เข้าห้องปกครองครั้งแรก  69podcast EP.7 Highlight",
    artist: "",
    image: "/resources/trackart/entertain/เข้าห้องปกครองครั้งแรก  69podcast EP.7 Highlight.jpg",
    path: "/tracks/5fbe55a4bf68a943c4d305b0"
  },
  {
    name: "ตลกการเมือง  Podcast EP06",
    artist: "",
    image: "/resources/trackart/entertain/ได้ขำไปและได้คิดไปในเวลาเดียวกัน คำนี้ดี EP.220.jpg",
    path: "/tracks/5fbe55c9bf68a943c4d305cd"
  },
  {
    name: "ได้ขำไปและได้คิดไปในเวลาเดียวกัน  คำนี้ดี EP.220",
    artist: "",
    image: "/resources/trackart/entertain/ตลกการเมือง  Podcast EP06.jpg",
    path: "/tracks/5fbe55e6bf68a943c4d305fc"
  },
  {
    name: "4 วิธี สุขภาพดีด้วย Smartwatch - Podcast EP.3",
    artist: "",
    image: "/resources/trackart/entertain/นิทานตอนนอนกับลุงไนท์.jpg",
    path: "/tracks/5fbe55fdbf68a943c4d30623"
  },
  {},{},{},{},{},{},{},{},{},{},{},{},
  {
    name: "4 วิธี สุขภาพดีด้วย Smartwatch - Podcast EP.3",
    artist: "",
    image: "/resources/trackart/health/4 วิธี สุขภาพดีด้วย Smartwatch - Podcast EP.3.jpg",
    path: "/tracks/5fbe6e99dcc7c50c28bbb556"
  },
  {
    name: "[Podcast] กาแฟ กินอย่างไรให้สุขภาพดี  BEANHEALTHY",
    artist: "",
    image: "/resources/trackart/health/[Podcast] กาแฟ กินอย่างไรให้สุขภาพดี  BEANHEALTHY.jpg",
    path: "/tracks/5fbe7848a452cf33480a2f49"
  },
  {
    name: "คลี่ชีวิต 24 ชั่วโมง หาที่มาของอาการนอนไม่หลับ พร้อมเทคนิคการเคลียร์ขยะใจ  R U OK EP.121",
    artist: "",
    image: "/resources/trackart/health/คลี่ชีวิต 24 ชั่วโมง หาที่มาของอาการนอนไม่หลับ พร้อมเทคนิคการเคลียร์ขยะใจ R U OK EP.121.jpg",
    path: "/tracks/5fbe788da452cf33480a2f6a"
  },
  {
    name: "วิธีพิชิตโรคอ้วน by หมอแอมป์",
    artist: "",
    image: "/resources/trackart/health/วิธีพิชิตโรคอ้วน by หมอแอมป์.jpg",
    path: "/tracks/5fbe78b1a452cf33480a2f9c"
  },
  {
    name: "นิสัยเพื่อสุขภาพจิตที่ดี  Mission to the Moon EP. 774",
    artist: "",
    image: "/resources/trackart/health/นิสัยเพื่อสุขภาพจิตที่ดี  Mission to the Moon EP. 774.jpg",
    path: "/tracks/5fbe78f0a452cf33480a2fb7"
  },
  {
    name: "Single Being EP.49 Oversleeping นอนมากแค่ไหน ทำร้ายสุขภาพ",
    artist: "",
    image: "/resources/trackart/health/Single Being EP.49 Oversleeping นอนมากแค่ไหน ทำร้ายสุขภาพ.jpg",
    path: "/tracks/5fbe7927a452cf33480a2fe5"
  },
];

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  pauseTrack();
  curr_track.src = track_list[track_index].path;
  curr_track.load();
  playTrack();

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

// function load36(id) {
//   document.getElementById('name36').innerHTML = track_list[id].name
//   document.getElementById('img36').src = track_list[id].image
// }

// function load37(id) {
//   document.getElementById('name37').innerHTML = track_list[id].name;
//   document.getElementById('img37').src = track_list[id].image
// }

// function load38(id) {
//   document.getElementById('name38').innerHTML = track_list[id].name
//   document.getElementById('img38').src = track_list[id].image
// }

// function load39(id) {
//   document.getElementById('name39').innerHTML = track_list[id].name;
//   document.getElementById('img39').src = track_list[id].image
// }

// function load40(id) {
//   document.getElementById('name40').innerHTML = track_list[id].name;
//   document.getElementById('img40').src = track_list[id].image
// }

// function load41(id) {
//   document.getElementById('name41').innerHTML = track_list[id].name;
//   document.getElementById('img41').src = track_list[id].image
// }

// function load54(id) {
//   document.getElementById('name54').innerHTML = track_list[id].name
//   document.getElementById('img54').src = track_list[id].image
// }

// function load55(id) {
//   document.getElementById('name55').innerHTML = track_list[id].name;
//   document.getElementById('img55').src = track_list[id].image
// }

// function load56(id) {
//   document.getElementById('name56').innerHTML = track_list[id].name
//   document.getElementById('img56').src = track_list[id].image
// }

// function load57(id) {
//   document.getElementById('name57').innerHTML = track_list[id].name;
//   document.getElementById('img57').src = track_list[id].image
// }

// function load58(id) {
//   document.getElementById('name58').innerHTML = track_list[id].name;
//   document.getElementById('img58').src = track_list[id].image
// }

// function load59(id) {
//   document.getElementById('name59').innerHTML = track_list[id].name;
//   document.getElementById('img59').src = track_list[id].image
// }

// function load72(id) {
//   document.getElementById('name72').innerHTML = track_list[id].name
//   document.getElementById('img72').src = track_list[id].image
// }

// function load73(id) {
//   document.getElementById('name73').innerHTML = track_list[id].name;
//   document.getElementById('img73').src = track_list[id].image
// }

// function load74(id) {
//   document.getElementById('name74').innerHTML = track_list[id].name
//   document.getElementById('img74').src = track_list[id].image
// }

// function load75(id) {
//   document.getElementById('name75').innerHTML = track_list[id].name;
//   document.getElementById('img75').src = track_list[id].image
// }

// function load76(id) {
//   document.getElementById('name76').innerHTML = track_list[id].name;
//   document.getElementById('img76').src = track_list[id].image
// }

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
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
  playpause_btn.innerHTML = '<img src="/resources/pause.png" style = "width: 22px;height: 31px;border-radius: 0%;margin-left: 0px;margin-top: 0px;" > ';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<img src="/resources/play.png" style = "width: 28px;height: 33px;border-radius: 0%;margin-left: 5px;margin-top: 5px;" > ';
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
