const positions = ["Technical Founder @ Kalea Studio", "SWE @ Piotech Inc.", "Former Researcher @ ASDRP"];
let currentIndex = 0;

const slider = $("#positionTyper")[0];

function changeTitle () {
	slider.style.animation = "slideOut 1s forwards";
	setTimeout( () => {
		currentIndex = (currentIndex + 1) positions.length;
		slider.textContent = positions[currentIndex];
		slider.style.animation = 'slideIn 1s forwards';
	}, 1000);

}

setInterval(changeTitle, 5000);

