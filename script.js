const videoEl = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a video, pass to video element, the play
async function selectMedia() {
    try {
      const MediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoEl.srcObject = MediaStream;
      videoEl.onloadedmetadata = () => {
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        };
      };
    } catch (error) {
        // Catching error here
        console.log(error,'Oops! Am on it...');
    }
};

 button.addEventListener( 'click', async() => {
    // Disable button
    button.disabled = true;
    // Start Picture in Picture mode
    await videoEl.requestPictureInPicture();
    // Reset button
    button.disabled = false;
 });

// On Load
selectMedia();