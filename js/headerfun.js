const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-button');
const cartCountEl = document.getElementById('cart-count');

// MENU
menuBtn?.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    menu.classList.remove('active');
  }
});

// CART COUNT
function updateCartCount(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartCountEl.textContent = cart.length;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
window.addEventListener('storage', updateCartCount);

window.updateCartCount = updateCartCount;
