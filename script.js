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
const buttons =  document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500);
    })
})

// dark /light mode functionality
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', (e) => {
    if(e.target){
        document.body.classList.toggle('dark')
        localStorage.setItem("dark");
    } else{
        document.documentElement.setAttribute( "light");
    // Set the user's theme preference to light
    localStorage.setItem("light");
    }
    
    // local storage to store users preference 
    
});



