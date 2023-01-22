const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play it
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        // Catch error 
        console.log('whoops', error)
    }
}

button.addEventListener('click', async () =>{
    // disable button
    button.disabled = true
    // start picture in picture
    await videoElement.requestPictureInPicture()
    // Then reset button
    button.disabled = false
})

// onload 
selectMediaStream()