const home = document.querySelector('.home');
const about = document.querySelector('.about');
const tech = document.querySelector('.tech');

const handleHome = () => {
	home.style.display = 'flex';
	about.style.display = 'none';
	tech.style.display = 'none';
};
const handleAbout = () => {
	home.style.display = 'none';
	about.style.display = 'flex';
	tech.style.display = 'none';
};
const handleTechnology = () => {
	home.style.display = 'none';
	about.style.display = 'none';
	tech.style.display = 'flex';
};
