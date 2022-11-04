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


//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
    darkmode(); //if dark mode was on, run this funtion
  } else {
    nodark(); //else run this funtion
  }
  
  //if the checkbox state is changed, run a funtion
  checkbox.addEventListener("change", function() {
    //check if the checkbox is checked or not
    if (checkbox.checked) {
      darkmode(); //if the checkbox is checked, run this funtion
    } else {
      nodark(); //else run this funtion
    }
  });
  
  //function for checkbox when checkbox is checked
  function darkmode() {
    document.body.classList.add("dark"); //add a class to the body tag
    checkbox.checked = true; //set checkbox to be checked state
    sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
  }
  
  //function for checkbox when checkbox is not checked
  function nodark() {
    document.body.classList.remove("dark"); //remove added class from body tag
    checkbox.checked = false; //set checkbox to be unchecked state
    sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
  }


// get updated year
function getDate() {
	return new Date().getFullYear();
}
document.onload = document.getElementById('currentYear').innerHTML = getDate();
