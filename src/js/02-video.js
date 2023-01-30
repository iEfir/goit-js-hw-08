import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

try {
  const data = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  player.setCurrentTime(data);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
