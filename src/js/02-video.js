import _throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const onPlayVideo = function (e) {
  localStorage.setItem('player-current-time', e.seconds);
};
player.on('timeupdate', _throttle(onPlayVideo, 1000));
if (localStorage.getItem('player-current-time')) {
  const currentTime = JSON.parse(localStorage.getItem('player-current-time'));
  player.setCurrentTime(currentTime);
  // console.log(currentTime);
}
