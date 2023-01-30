import throttle from 'lodash.throttle';
import { load } from './storage';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
    }
  });
