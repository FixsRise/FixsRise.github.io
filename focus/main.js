     /* Get Our Elements */
     const player = document.querySelector('.player');
     const video = player.querySelector('.viewer');
     const progress = player.querySelector('.progress');
     const progressBar = player.querySelector('.progress__filled');
     const toggle = player.querySelector('.toggle');
     const skipButtons = player.querySelectorAll('[data-skip]');
     const ranges = player.querySelectorAll('.player__slider');
     const playButton = document.querySelector('video-item-programs__play');

     /* Build */

     function togglePlay() {
       const method = video.paused ? 'play' : 'pause';
       video[method]();  
     }
     function updateButton() {
       const icon = this.paused ? '►' : '';
       toggle.textContent = icon;
     }

     function skip() {
       console.log(this.dataset.skip);
       video.currentTime += parseFloat(this.dataset.skip);
     }

     function handleRangeUpdate() {
       video[this.name] = this.value;
     }
     function handleProgress(){
       const percent = (video.currentTime / video.duration) * 100;
       progressBar.style.flexBasis = `${percent}%`;
     }
     function scrub(e) {
       const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
       video.currentTime = scrubTime;
     }

     /* Hook Up the event listener */
     video.addEventListener('click', togglePlay);
     video.addEventListener('play', updateButton);
     video.addEventListener('pause', updateButton);
     video.addEventListener('timeupdate', handleProgress);

     toggle.addEventListener('click',togglePlay);
     skipButtons.forEach(button => button.addEventListener('click', skip));
     ranges.forEach(button => button.addEventListener('change', handleRangeUpdate));
     ranges.forEach(button => button.addEventListener('mousemove', handleRangeUpdate));

     let mousedown = false;
     progress.addEventListener('click', scrub);
     progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
     progressBar.addEventListener('mousedown', () => mousedown = true);
     progressBar.addEventListener('mouseup', () => mousedown = false);
 
            /***
           Select video and its controls
       ***/

    const rootEl = document.querySelector('.vplayer');
    const video2 = rootEl.querySelector('.vplayer__video');
    const parentProgressBar = rootEl.querySelector('.vplayer__ctrls .progressSecond');
    const progressBar2 = rootEl.querySelector('.vplayer__ctrls .progress__barSecond');
    const playBtn = rootEl.querySelector('.vplayer__button');
    const playBtn2 = rootEl.querySelector('.vplayer__button2');

    /***
       Video and controls handlers
    ***/


    function togglePlay2(event) {

      const method = video2.paused ? 'play' : 'pause';
      video2[method]();  
    }

    function updateIcon(event) {
      if (video2.paused) {
        playBtn.innerHTML = "&#9658;";
      } else {
        playBtn.innerHTML = "";
      }
    }

    function updateProgressBar2(event) {
      let width = (event.target.currentTime / event.target.duration) * 100;
      progressBar2.style.width = `${width}%`;
    }

    function scrubProgressBar(event) {
      let time = (event.offsetX / parentProgressBar.offsetWidth) * video2.duration;
      video2.currentTime = time;
    }


    /***
       Assign handlers on events
    ***/

    video2.addEventListener('click', togglePlay2);
    playBtn.addEventListener('click', togglePlay2);
    video2.addEventListener('timeupdate', updateProgressBar2);
    video2.addEventListener('play', updateIcon);
    video2.addEventListener('pause', updateIcon);
    parentProgressBar.addEventListener('click', scrubProgressBar);    