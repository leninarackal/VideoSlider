let videoSlidesEL = document.querySelectorAll('.video-Slide');

videoSlidesEL.forEach(function(video){
    video.addEventListener('click',function(){
      video.classList.toggle('active'); 
    })
})