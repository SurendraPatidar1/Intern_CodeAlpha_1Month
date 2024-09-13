const songs = [
    {
      title: "Aam Jahe Munde",
      artist: "Parmish Verma",
      src: "./songs/Aam-Jahe-Munde-1.mp3",
      img: "./songs/maxresdefault.jpg"
    },
    {
      title: "Aarambh Hai Prachand",
      artist: "Piyush Mishra",
      src: "./songs/pagalworld.com.mx-Aarambh Hai Prachand.mp3",
      img: "./songs/maxresdefault (1).jpg"
    },
    {
      title: "Bulave Tujhe Aaj meri Galiyan",
      artist: "Dhvani Bhanushali",
      src: "./songs/Bulave-Tujhe-Yaar-Aaj-Meri-Galiyan(PagalWorld).mp3",
      img: "./songs/th.jpeg"
    },
    {
      title: "Payal-yo yo honey singer",
      artist: "Honey Singh , Paradox",
      src: "./songs/payal.mp3",
      img: "./songs/payal.jpg"
    }
  ];
  
  let currentSongIndex = 0;
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('play');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const songTitle = document.getElementById('song-title');
  const artistName = document.getElementById('artist-name');
  const songImage = document.getElementById('song-image');
  const speedControl = document.getElementById('speed');
  const downloadBtn = document.getElementById('download');
  
  // Load song details into the player
  function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    songImage.src = song.img;
    audio.src = song.src;
    downloadBtn.href = song.src; // For download functionality
    downloadBtn.download = `${song.title}.mp3`;
  }
  
  // Play or Pause song
  playBtn.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = 'Pause';
    } else {
      audio.pause();
      playBtn.textContent = 'Play';
    }
  });
  
  // Switch to the next song
  nextBtn.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = 'Pause';
  });
  
  // Switch to the previous song
  prevBtn.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playBtn.textContent = 'Pause';
  });
  
  // Adjust playback speed
  speedControl.addEventListener('change', function() {
    audio.playbackRate = speedControl.value;
  });
  
  // Initial load
  loadSong(currentSongIndex);
  