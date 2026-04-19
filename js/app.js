// app.js — renders all dynamic content from data files

// ── BASKET RENDERER ──────────────────────────────────────────────
function priceStr(inr) {
  if (inr === 0) return 'Included';
  return '~' + window.CURRENCY.format(inr);
}

function buildSpecsHTML(specs) {
  if (!specs || !specs.length) return '';
  return '<ul class="specs">' + specs.map(s => `<li>${s}</li>`).join('') + '</ul>';
}

function buildTagsHTML(tags) {
  if (!tags || !tags.length) return '';
  return '<div class="tags">' + tags.map(t => `<span class="tag ${t.c}">${t.t}</span>`).join('') + '</div>';
}

function buildColumnHTML(col) {
  if (col.type === 'lens-pair') {
    return `<div class="detail-col lens-pair">
      ${col.lenses.map(l => `
        <div class="lens-half">
          <div class="detail-cat">${l.cat}</div>
          <div class="prod-img-wrap">
            <div class="prod-svg">
              <div class="icon">${l.icon}</div>
              <div class="lbl">${l.lbl.replace(/\n/g,'<br>')}</div>
            </div>
          </div>
          <div class="prod-name">${l.name}${l.badge ? `<span class="badge">${l.badge}</span>` : ''}</div>
          ${l.priceINR > 0 ? `<div class="prod-price data-price" data-inr="${l.priceINR}">${priceStr(l.priceINR)}</div>` : ''}
          ${buildSpecsHTML(l.specs)}
          ${buildTagsHTML(l.tags)}
        </div>
      `).join('')}
    </div>`;
  }
  return `<div class="detail-col">
    <div class="detail-cat">${col.cat}</div>
    <div class="prod-img-wrap">
      <div class="prod-svg">
        <div class="icon">${col.icon}</div>
        <div class="lbl">${col.lbl.replace(/\n/g,'<br>')}</div>
      </div>
    </div>
    <div class="prod-name">${col.name}${col.badge ? `<span class="badge">${col.badge}</span>` : ''}</div>
    ${col.priceINR ? `<div class="prod-price data-price" data-inr="${col.priceINR}">${priceStr(col.priceINR)}</div>` : ''}
    ${buildSpecsHTML(col.specs)}
    ${buildTagsHTML(col.tags)}
  </div>`;
}

function buildBasketHTML(b) {
  const thumbsHTML = b.thumbs.map(t => `
    <div class="thumb-item">
      <div class="thumb-svg">${t.icon}</div>
      <div>
        <div class="thumb-brand">${t.brand}</div>
        <div class="thumb-name">${t.name}</div>
      </div>
    </div>`).join('');

  const columnsHTML = b.columns.map(buildColumnHTML).join('');

  const budgetHTML = b.budgetRow.map(r =>
    `<div class="bc">
      <span class="bc-lbl">${r.lbl}</span>
      <span class="bc-val data-price" data-inr="${r.inr}">${priceStr(r.inr)}</span>
    </div>`
  ).join('');

  return `
    <div class="basket${b.topPick ? ' top-pick' : ''}" id="${b.id}" data-tags="${b.tags.join(' ')}">
      ${b.topPick ? `<div class="ribbon" onclick="toggleBasket('${b.id}')">${b.ribbon}</div>` : ''}
      ${b.ribbon && !b.topPick ? `<div class="ribbon" onclick="toggleBasket('${b.id}')">${b.ribbon}</div>` : ''}
      <div class="basket-header" onclick="toggleBasket('${b.id}')">
        <div class="basket-num">${b.num}</div>
        <div class="thumb-strip">${thumbsHTML}</div>
        <div class="header-right">
          <div class="total-box">
            <div class="total-label">Total Est.</div>
            <div class="total-amount ${b.totalClass} data-price" data-inr="${b.totalINR}">${priceStr(b.totalINR)}</div>
          </div>
          <div class="chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        </div>
      </div>
      <div class="basket-detail">
        <div class="detail-grid">${columnsHTML}</div>
        <div class="budget-row">${budgetHTML}</div>
        <div class="verdict">${b.verdict}</div>
      </div>
    </div>`;
}

window.renderBaskets = function() {
  const container = document.getElementById('baskets-container');
  if (!container || !window.BASKETS_DATA) return;
  container.innerHTML = window.BASKETS_DATA.map(buildBasketHTML).join('');
  // Re-attach currency
  window.CURRENCY.convertAll();
  // Re-open top pick
  const tp = document.querySelector('.basket.top-pick');
  if (tp) tp.classList.add('expanded');
};

// ── TOGGLE ────────────────────────────────────────────────────────
window.toggleBasket = function(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const wasOpen = el.classList.contains('expanded');
  document.querySelectorAll('.basket').forEach(b => {
    if (!b.classList.contains('top-pick')) b.classList.remove('expanded');
  });
  if (wasOpen) el.classList.remove('expanded');
  else el.classList.add('expanded');
};

// ── FILTER ────────────────────────────────────────────────────────
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.basket').forEach(basket => {
        if (filter === 'all') {
          basket.removeAttribute('data-filter-hidden');
        } else {
          const tags = basket.dataset.tags || '';
          if (tags.includes(filter)) {
            basket.removeAttribute('data-filter-hidden');
          } else {
            basket.setAttribute('data-filter-hidden', 'true');
          }
        }
      });
    });
  });
}

// ── GUIDE ─────────────────────────────────────────────────────────
function renderGuide() {
  const container = document.getElementById('guide-container');
  if (!container || !window.GUIDE_DATA) return;
  container.innerHTML = window.GUIDE_DATA.map(g => `
    <a class="guide-row" href="${g.link}">
      <div class="guide-icon">${g.icon}</div>
      <div>
        <div class="guide-title">${g.title}</div>
        <div class="guide-desc">${g.desc}</div>
      </div>
      <div class="guide-arrow">→</div>
    </a>`).join('');
}

// ── BLOGS ─────────────────────────────────────────────────────────
let blogsShown = 9;

function renderBlogs(limit) {
  const container = document.getElementById('blog-container');
  if (!container || !window.BLOGS_DATA) return;
  const visible = window.BLOGS_DATA.slice(0, limit || blogsShown);
  container.innerHTML = visible.map(b => `
    <a class="blog-card" href="blogs/${b.slug}.html">
      <div class="blog-thumb">${b.emoji}</div>
      <div class="blog-body">
        <div class="blog-cat">${b.category}</div>
        <div class="blog-title">${b.title}</div>
        <div class="blog-excerpt">${b.excerpt}</div>
        <div class="blog-meta">
          <span class="blog-date">${b.date}</span>
          <span class="blog-read">${b.readTime}</span>
        </div>
      </div>
    </a>`).join('');
}

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderBaskets();
  renderGuide();
  renderBlogs(9);
  initFilters();

  // Load more blogs
  const loadMoreBtn = document.getElementById('load-more-blogs');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      blogsShown += 9;
      renderBlogs(blogsShown);
      if (blogsShown >= window.BLOGS_DATA.length) {
        loadMoreBtn.style.display = 'none';
      }
    });
  }

  // Sticky nav scroll effect
  const nav = document.getElementById('topnav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 40
        ? 'rgba(14,14,15,0.97)'
        : 'rgba(14,14,15,0.92)';
    }, { passive: true });
  }
});
