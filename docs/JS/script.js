"use strict";

var url = "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=".concat(prompt('количество', ''), "&tags=").concat(prompt('tags', 'genshin_impact'), "&json=1&id=");
var tags = '';
var r34Folder = [];
var body = {
  mode: 'no-cors'
};
var i = 1;
getArt(i);

function getArt(id) {
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (art) {
    r34Folder = art;
    console.log(r34Folder);
    compile1();
  })["catch"](function (err) {
    return console.log(err);
  });
}

function compile1() {
  console.log(r34Folder[0].file_url);

  for (var i1 = 0; i1 < r34Folder.length; i1++) {
    showArt(r34Folder[i1].file_url, r34Folder[i1].preview_url, r34Folder[i1].sample_url);
  }
}

function showArt(file, preview, sample) {
  console.log(file, '<😟😟>', sample);
  var art = document.createElement('div');
  art.style.backgroundImage = "url(" + preview + ")";
  art.classList.add('image');
  document.querySelector('.wrapper').prepend(art);
}