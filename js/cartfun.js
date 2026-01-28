const itemsWrap = document.getElementById('cart-items');
const emptyEl = document.getElementById('cart-empty');
const totalEl = document.getElementById('totalPrice');
const summaryEl = document.getElementById('cart-summary');

// ===== LOAD CART =====
function loadCart(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  itemsWrap.innerHTML = '';
  let total = 0;

  if(!cart.length){
    emptyEl.style.display = 'block';
    summaryEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  summaryEl.style.display = 'flex';

  cart.forEach((item, index)=>{
    total += item.price;

    const div = document.createElement('div');
    div.className = 'cart-item';

    div.innerHTML = `
      <img src="${item.image}" alt="">
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-meta">
          ${item.psa ? `PSA ${item.psa}` : 'Raw karta'}
        </div>
        <div class="item-price">${item.price} Kč</div>
      </div>
      <button class="remove" data-index="${index}">✕</button>
    `;

    itemsWrap.appendChild(div);
  });

  totalEl.textContent = `${total} Kč`;

  document.querySelectorAll('.remove').forEach(btn=>{
    btn.onclick = () => removeItem(btn.dataset.index);
  });
}

// ===== REMOVE =====
function removeItem(index){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index,1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// ===== START =====
loadCart();
