var but = document.getElementById("uploadButton");
var sec = document.getElementById("uploadSection");
var cl = document.getElementById("closeButton");

var dropbut = document.getElementById("dropdownbutton");
var dropdown = document.getElementById("dropdownsection");

// var navicon = document.getElementById("nav-icon-manu");
// var searchbox = document.getElementById("search-box-span");

var stated = false;

dropbut.onclick = function () {
    stated = !stated;
    if (stated) {
        dropdown.style.display = "block";
    } else { dropdown.style.display = "none"; }
}

but.onclick = function () {
    sec.style.display = "block";
}

cl.onclick = function () {
    sec.style.display = "none";
}

// var staten = false;

// navicon.onclick = function () {
//     staten = !staten;
//     if (staten) {
//         searchbox.style.display = "block";
//     } else { searchbox.style.display = "none"; }
// }