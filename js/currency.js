// currency.js — live exchange rates with fallback
window.CURRENCY = {
  current: 'INR',
  rates: { INR: 1, USD: 0.01196, EUR: 0.01099, GBP: 0.00938, AED: 0.04392 },
  symbols: { INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'AED ' },
  labels: { INR: 'INR', USD: 'USD', EUR: 'EUR', GBP: 'GBP', AED: 'AED' },

  async fetchRates() {
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/INR');
      const data = await res.json();
      if (data && data.rates) {
        this.rates.USD = data.rates.USD;
        this.rates.EUR = data.rates.EUR;
        this.rates.GBP = data.rates.GBP;
        this.rates.AED = data.rates.AED;
        console.log('[GearBaskets] Live rates loaded');
      }
    } catch(e) {
      console.log('[GearBaskets] Using fallback rates');
    }
  },

  format(inrAmount, decimals) {
    const cur = this.current;
    const converted = inrAmount * this.rates[cur];
    const sym = this.symbols[cur];
    if (cur === 'INR') {
      // Indian number formatting
      return sym + this.formatINR(Math.round(converted));
    }
    return sym + this.formatNumber(Math.round(converted));
  },

  formatINR(n) {
    const s = n.toString();
    if (s.length <= 3) return s;
    const last3 = s.slice(-3);
    const rest = s.slice(0, -3);
    return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
  },

  formatNumber(n) {
    return n.toLocaleString();
  },

  convertAll() {
    document.querySelectorAll('[data-inr]').forEach(el => {
      const inr = parseFloat(el.getAttribute('data-inr'));
      el.textContent = this.format(inr);
    });
    document.querySelectorAll('[data-inr-range]').forEach(el => {
      const range = el.getAttribute('data-inr-range').split(',');
      if (range.length === 2) {
        const from = this.format(parseFloat(range[0]));
        const to = this.format(parseFloat(range[1]));
        el.textContent = from + ' – ' + to;
      }
    });
  },

  setCurrency(cur) {
    this.current = cur;
    document.querySelectorAll('.cur-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cur === cur);
    });
    this.convertAll();
    // Re-render basket prices
    if (window.renderBaskets) window.renderBaskets();
  },

  init() {
    this.fetchRates();
    document.querySelectorAll('.cur-btn').forEach(btn => {
      btn.addEventListener('click', () => this.setCurrency(btn.dataset.cur));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => window.CURRENCY.init());
