var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Assuming this is the continuation of your existing code
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolume();
});

// Reference to the video element
video = document.querySelector("#player1");

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9; // Decrease speed by 10%
	console.log("New speed is ", video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9; // Increase speed
	console.log("New speed is ", video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0; // Go back to the start if end is reached
		console.log("Going back to the start");
	}
	console.log("Current location is ", video.currentTime);
});

// Mute/Unmute
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	updateVolume();
});

// Volume Slider
var slider = document.querySelector("#slider");
slider.addEventListener("input", function() {
	video.volume = this.value / 100;
	updateVolume();
});

// Update Volume Information
function updateVolume() {
	var volumeDisplay = document.querySelector("#volume");
	volumeDisplay.innerHTML = Math.round(video.volume * 100) + "%";
}

// Apply Old School Style
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Revert to Original Style
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
