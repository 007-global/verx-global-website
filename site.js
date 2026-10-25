const pages = [
  ['index.html','Home'],
  ['about.html','About Us'],
  ['products.html','Medical Products'],
  ['solutions.html','Healthcare Solutions'],
  ['contact.html','Contact']
];
const current = window.location.pathname.split('/').pop() || 'index.html';
const root = document.getElementById('header');
root.innerHTML = `
<a href="#main-content" class="skip-link">Skip to content</a>
<div class="top-strip"><div class="container"><span><strong>VERX GLOBAL</strong> · GLOBAL HEALTHCARE SOLUTIONS</span><span class="top-location">20-22 Wenlock Road · London · United Kingdom</span></div></div>
<header class="site-header"><div class="container nav-inner">
<a class="brand" href="index.html" aria-label="VERX Global — Home"><img src="assets/verx-logo.png" alt="VERX Global Healthcare Solutions" width="252" height="78"></a>
<button type="button" class="menu-button" aria-label="Open navigation" aria-expanded="false" aria-controls="main-nav"><span class="menu-lines" aria-hidden="true"><i></i><i></i><i></i></span> Menu</button>
<nav id="main-nav" class="nav-links" aria-label="Primary navigation">${pages.map(([url, label]) => `<a href="${url}" ${url===current?'class="active" aria-current="page"':''}>${label}</a>`).join('')}<a class="btn nav-cta" href="contact.html">Request a Quote <span aria-hidden="true">↗</span></a></nav>
</div></header>`;
const menuButton = document.querySelector('.menu-button');
const menu = document.getElementById('main-nav');
const closeMenu=()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');};
menuButton.addEventListener('click',()=>{const opening=!menu.classList.contains('open');menu.classList.toggle('open',opening);menuButton.setAttribute('aria-expanded',String(opening));menuButton.setAttribute('aria-label',opening?'Close navigation':'Open navigation');});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
const footer = document.getElementById('footer');
footer.innerHTML = `
<section class="cta"><div class="container"><div><span class="eyebrow">LET'S WORK TOGETHER</span><h2>Looking for dependable medical supply?</h2><p>Tell us your product requirements and intended destination market.</p></div><a class="btn light" href="contact.html">Enquire with VERX <span aria-hidden="true">↗</span></a></div></section>
<footer class="site-footer"><div class="container"><div class="footer-grid">
<div><a class="footer-logo" href="index.html" aria-label="VERX Global — Home"><img src="assets/verx-logo.png" alt="VERX Global Healthcare Solutions" width="240" height="74" loading="lazy"></a><p>Medical products, equipment, consumables and healthcare solutions for customers around the world.</p></div>
<div><h3>Explore</h3><div class="footer-links">${pages.map(([url,label])=>`<a href="${url}">${label}</a>`).join('')}</div></div>
<div><h3>Our commitment</h3><p>Quality-focused products and supply, commercially competitive solutions and applicable product regulatory documentation.</p><address class="footer-address"><b style="color:white">United Kingdom</b><br>20-22 Wenlock Road<br>London, N1 7GU<br>United Kingdom</address></div>
</div><div class="footer-bottom"><span>© ${new Date().getFullYear()} VERX Global. All rights reserved.</span><span>Product availability, regulatory status and market authorisations vary by product and destination.</span></div></div></footer>`;
