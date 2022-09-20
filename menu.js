const btn = document.getElementById('menu-btn');
const menue = document.getElementById('mobile-menu');

const MenuItems = document.querySelectorAll('#menuItem');
const Items = Array.from(MenuItems);

function openMenu() {
  btn.style.display = 'none';
  menue.style.display = 'flex';
}

btn.addEventListener('click', openMenu);

function closeMenu() {
  menue.style.display = 'none';
  btn.style.display = 'block';
}
document.addEventListener('click', (event) => {
  if (event.target.id === 'close-menu') {
    closeMenu();
  } else if (event.target.id === 'logo') {
    closeMenu();
  }
});

Items.forEach((item) => {
  item.addEventListener('click', closeMenu);
});