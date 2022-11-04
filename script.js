// sticky navbar functionality
const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
}

// ripple button effect
const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		const x = e.clientX;
		const y = e.clientY;

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;
		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = yInside + 'px';
		circle.style.left = xInside + 'px';

		this.appendChild(circle);

		setTimeout(() => circle.remove(), 500);
	});
});

// dark /light mode functionality
const checkbox = document.getElementById('checkbox');
// let darkMode = localStorage.getItem("dark");

// function enableDarkMode() {
// 	document.body.classList.add('dark');
// 	localStorage.setItem('dark', 'enabled');
// }

// function disableDarkMode() {
// 	document.body.classList.remove('dark');
// 	localStorage.removeItem('dark', 'disabled');
// }

// if (darkMode === "disabled") {
//     disableDarkMode(); // set state of darkMode on page load
//   }

// checkbox.addEventListener('click', (e) => {
//     if (darkMode === "disabled") {
//         enableDarkMode();
//       } else {
//         disableDarkMode();
//       }
// });
checkbox.addEventListener('click', (e) => {
	if (e.target) {
		console.log('hey clicked');
		document.body.classList.toggle('dark');
		localStorage.setItem('dark', 'enabled');
	} else {
		// document.setAttribute("light");
		// Set the user's theme preference to light
		localStorage.setItem('light', 'disabled');
	}

	// local storage to store users preference
});

// get updated year

