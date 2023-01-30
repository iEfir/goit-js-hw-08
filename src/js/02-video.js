import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STOREAGE_KEY = 'videoplayer-current-time';

load();
player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer({ seconds }) {
  localStorage.setItem(STOREAGE_KEY, seconds);
}

function load() {
  const dataStoreage = localStorage.getItem(STOREAGE_KEY);
  if (dataStoreage) {
    player.setCurrentTime(dataStoreage);
  }
}

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
