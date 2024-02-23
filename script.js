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

// Audio controls
function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');
	audio.play();
}
function pauseSong() {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	audio.pause();
}

function prevSong() {
	songIndex == 0 ? (songIndex = songs.length - 1) : songIndex--;
	loadSong(songs[songIndex]);
	playSong();
}
function nextSong() {
	songIndex == songs.length - 1 ? (songIndex = 0) : songIndex++;
	loadSong(songs[songIndex]);
	playSong();
}

// Progress
function updateProgress(e) {
	const { duration, currentTime } = e.target;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}
function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;

	audio.currentTime = (clickX / width) * duration;
}

// Events
playBtn.addEventListener('click', () => {
	musicContainer.classList.contains('play') ? pauseSong() : playSong();
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
