import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

try {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
