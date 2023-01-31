const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')

const timestamp = document.getElementById('timestamp')

// 播放或者暂停视频
function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
// 更新图标的状态
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-stop fa-2x"></i>`
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
  }
}

// 更新进度条

function updateProgress() {
  // 视频当前播放的时间点 / 视频的总时长
  progress.value = (video.currentTime / video.duration) * 100
  // 换算成分钟
  let mins = Math.floor(video.currentTime / 60)
  // 前面补0
  if (mins < video.duration) {
    mins = '0' + String(mins)
  }

  // 得到秒
  let secs = Math.floor(video.currentTime % 60)
  if (secs < video.duration) {
    secs = '0' + String(secs)
  }

  timestamp.innerHTML = `${mins}:${secs}`
}

// 设置视频的时间和进度条
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100
}
// 停止视频

function stopVideo() {
  video.currentTime = 0
  video.pause()
}

// 添加事件的监听

video.addEventListener('click', toggleVideoStatus)

video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)
