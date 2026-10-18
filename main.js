import { products } from './products.js';

const catalogGroups = document.querySelector('#catalog-groups');
const filterButtons = [...document.querySelectorAll('[data-family]')];
const formatPrice = value => '$ ' + new Intl.NumberFormat('es-CO').format(value);
let selectedFamily = 'Todos';

const groups = [
  { id: 'origami', title: 'Origami', subtitle: 'Cerámica y Air · Tallas S y M', family: 'Origami', productIds: ['origami-ceramica', 'origami-air'] },
  { id: 'holders', title: 'Holders', subtitle: 'Soportes Origami', family: 'Accesorios', productIds: ['holders'] },
  { id: 'taza', title: 'Taza sensorial', subtitle: 'Origami', family: 'Accesorios', productIds: ['taza-sensorial'] },
  { id: 'flower', title: 'Flower', subtitle: 'Métodos de extracción', family: 'Flower', productIds: ['flower-27', 'flower-tritan', 'flower-oval'] },
  { id: 'filtros', title: 'Filtros CAFEC 4 tazas', subtitle: 'TH-1 · TH-2 · TH-3', family: 'Filtros', productIds: ['cafec-th-1', 'cafec-th-2', 'cafec-th-3'] },
];

function productCard(product) {
  const photos = product.photos.map(photo => `<figure class="product-photo-frame">
    <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
  </figure>`).join('');
  const prices = product.prices.map(price => `<div class="price-row"><span>${price.label}</span><strong>${formatPrice(price.value)} <small>COP</small></strong></div>`).join('');
  const availability = product.family === 'Origami' ? '<p class="product-availability">Consulta disponibilidad de talla.</p>' : '';

  return `<article class="product-card product-${product.id} reveal">
    <div class="product-visual ${product.photos.length > 1 ? 'product-visual-pair' : ''}">
      ${photos}
      <span class="product-family">${product.family}</span>
    </div>
    <div class="availability-row"><span class="availability-pill">${product.availabilityLabel ?? 'Pregunta por colores disponibles'}</span></div>
    <div class="product-info">
      <span class="product-type">${product.type}</span>
      <h3>${product.name}</h3>
      <div class="product-prices">${prices}</div>
      ${availability}
    </div>
  </article>`;
}

function groupSection(group) {
  const cards = group.productIds.map(id => productCard(products.find(product => product.id === id))).join('');
  return `<section class="catalog-group group-${group.id}" aria-labelledby="group-${group.id}">
    <div class="group-heading reveal"><h3 id="group-${group.id}">${group.title}</h3><p>${group.subtitle}</p></div>
    <div class="product-grid">${cards}</div>
  </section>`;
}

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .06 }) : null;

function observeReveals(root = document) {
  root.querySelectorAll('.reveal').forEach(element => {
    if (observer) observer.observe(element);
    else element.classList.add('visible');
  });
}

function render() {
  const visible = groups.filter(group => selectedFamily === 'Todos' || group.family === selectedFamily);
  catalogGroups.innerHTML = visible.map(groupSection).join('');
  observeReveals(catalogGroups);
}

filterButtons.forEach(button => button.addEventListener('click', () => {
  selectedFamily = button.dataset.family;
  filterButtons.forEach(candidate => {
    const active = candidate === button;
    candidate.classList.toggle('active', active);
    candidate.setAttribute('aria-pressed', String(active));
  });
  render();
}));

observeReveals();
render();

let scrollFrame = false;
window.addEventListener('scroll', () => {
  if (scrollFrame) return;
  scrollFrame = true;
  requestAnimationFrame(() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty('--scroll-progress', `${scrollable ? window.scrollY / scrollable * 100 : 0}%`);
    scrollFrame = false;
  });
}, { passive: true });
