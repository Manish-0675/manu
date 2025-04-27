window.addEventListener('load', function() {
  const music = document.getElementById('background-music');

  // Try to play music (handle autoplay restrictions)
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Music playing!
      console.log('Background music started!');
    }).catch((error) => {
      // Autoplay blocked
      console.log('Autoplay was blocked. Waiting for user interaction...');
      document.body.addEventListener('click', () => {
        music.play();
      }, { once: true });
    });
  }
});
