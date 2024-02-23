const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const cover = document.getElementById('cover');
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Track current song
let songIndex = 2;

// Load song details
loadSong(songs[songIndex]);

function loadSong(song) {
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.jpg`;
}
