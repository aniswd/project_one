/* Slide menu */
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const slideMenu = document.getElementById('slideMenu');

menuOpen.addEventListener('click',mobileMenuOpen);

function mobileMenuOpen() {
	slideMenu.classList.add('active');
}

menuClose.addEventListener('click',mobileMenuClose);

function mobileMenuClose() {
	slideMenu.classList.remove('active');
}