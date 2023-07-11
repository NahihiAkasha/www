document.addEventListener('DOMContentLoaded', function() {
  const audioToggle = document.getElementById('audio-toggle');
  const audio = new Audio('img/music.mp3');
  let isAudioPlaying = false;

  function toggleAudio() {
    if (isAudioPlaying) {
      audio.pause();
      isAudioPlaying = false;
      audioToggle.src = 'img/bgmoff.png';
    } else {
      audio.play();
      isAudioPlaying = true;
      audioToggle.src = 'img/bgmon.png';
    }
  }

  audioToggle.addEventListener('click', toggleAudio);
});
