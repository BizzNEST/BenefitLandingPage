const videoURL = "https://www.youtube.com/embed/AOQvMlcVt7g?autoplay=1&mute=1&enablejsapi=1";
const videoContainer = document.getElementById('videoContainer');
const pageContent = document.getElementById('pageContent');
const iframe = document.getElementById('youtubeVideo');

// Function to fade to video
function showVideo() {
  iframe.src = videoURL;
  pageContent.style.opacity = 0;
  setTimeout(() => {
    videoContainer.style.opacity = 1;
    videoContainer.style.pointerEvents = "auto";
  }, 1000); // Wait for page to fade out
}

// Function to fade back to page
function showPage() {
  videoContainer.style.opacity = 0;
  videoContainer.style.pointerEvents = "none";
  setTimeout(() => {
    pageContent.style.opacity = 1;
    iframe.src = ""; // Stop video
  }, 1000); // Wait for video to fade out
}

setTimeout(showVideo, 6000);

setTimeout(showPage, 122000);