import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('iframe');
const videoPlayer = new VimeoPlayer(video);
const VIDEO_WATCH_TIME_KEY = 'videoplayer-current-time';
const watchedTime = localStorage.getItem(VIDEO_WATCH_TIME_KEY);
console.log(watchedTime);

// videoPlayer.on('play', () => {
//   console.log('the video has been played');
// });

// videoPlayer.getVideoTitle().then(title => {
//   console.log('the title of the movie is:', title);
// });

videoPlayer.on('timeupdate', throttle(watchTime, 1000));
function watchTime({ seconds }) {
  localStorage.setItem(VIDEO_WATCH_TIME_KEY, seconds);
  console.log(seconds);
}

videoPlayer.setCurrentTime(watchedTime);
