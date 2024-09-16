const positions = ["Founding Engineer @ Kalea Studio", "Former SWE Intern @ Piotech Inc.", "Former Researcher @ ASDRP", "JHU ACM EBoard Member"];
let currentIndex = 0;

const slider = $("#positionTyper")[0];

function changeTitle () {
	slider.style.animation = "slideOut 1s forwards";
	setTimeout( () => {
		currentIndex = (currentIndex + 1) % positions.length;
		slider.textContent = positions[currentIndex];
		slider.style.animation = 'slideIn 1s forwards';
	}, 1000);

}

setInterval(changeTitle, 5000);

