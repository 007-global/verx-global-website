/* VERX Global. Shared site navigation, accessible menu/search and product filtering.
   This file may be edited directly on GitHub. */
(()=>{
  const ico=(name)=>{
    const paths={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',close:'<path d="M5 5 19 19M19 5 5 19"/>',arrow:'<path d="M7 17 17 7M8 7h9v9"/>'};
    return `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  };
  const pages=[['index.html','Home'],['products.html','Products'],['about.html','About Us'],['quality.html','Quality & Compliance'],['solutions.html','Solutions'],['contact.html','Contact']];
  const current=location.pathname.split('/').pop()||'index.html';
  const header=document.getElementById('site-header');
  header.innerHTML=`<header class="site-header" id="main-header"><div class="container header-inside"><a href="index.html" class="header-brand" aria-label="VERX Global home"><img src="assets/verx-wordmark-transparent.png" alt="VERX Global" width="1789" height="450"><span class="header-brand-tag">GLOBAL HEALTHCARE SOLUTIONS<br>FOR A HEALTHIER TOMORROW</span></a><nav id="primary-nav" class="header-nav" aria-label="Primary navigation">${pages.map(([url,name])=>`<a href="${url}" ${current===url?'aria-current="page"':''}>${name}</a>`).join('')}</nav><div class="header-actions"><button type="button" class="icon-btn" id="search-toggle" aria-label="Search products">${ico('search')}</button><a href="contact.html" class="header-quote">Request a quote ${ico('arrow')}</a><button type="button" class="menu-toggle" id="menu-toggle" aria-controls="primary-nav" aria-expanded="false" aria-label="Open navigation">${ico('menu')}</button></div></div></header>`;
  const foot=document.getElementById('site-footer');
  foot.innerHTML=`<footer class="site-footer"><div class="container footer-main"><div class="footer-brand"><a href="index.html"><img src="assets/verx-logo.png" alt="VERX Global" width="1789" height="552"></a><p>Medical products, clinical equipment and thoughtful healthcare supply conversations for professional buyers.</p><div class="footer-social-line">VERX GLOBAL <span>•</span> QUALITY-FOCUSED HEALTHCARE SUPPLY</div></div><div class="footer-col"><h3>Company</h3><a href="index.html">Home</a><a href="about.html">About us</a><a href="solutions.html">Healthcare solutions</a><a href="quality.html">Quality & compliance</a></div><div class="footer-col"><h3>Products</h3><a href="products.html#consumables">Medical consumables</a><a href="products.html#surgical">Medical equipment</a><a href="products.html#infusion">IV & infusion</a><a href="products.html#diagnostics">Diagnostics & laboratory</a><a href="products.html#wound-care">Wound & surgical care</a><a href="products.html#ppe">Infection prevention</a></div><div class="footer-col"><h3>Contact</h3><address>20–22 Wenlock Road<br>London, N1 7GU<br>United Kingdom</address><a href="mailto:info@verxglobal.com">info@verxglobal.com</a><a href="contact.html">Request a quotation →</a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} VERX Global. All rights reserved.</span><span>Images may be illustrative. Product specifications, availability and regulatory status require confirmation.</span></div></footer>`;
  // Accessible hero photo selector. Manually controlled; no distracting autoplay.
  const heroImage=document.querySelector('#hero-feature-image');
  const heroDots=[...document.querySelectorAll('.hero-dot')];
  if(heroImage && heroDots.length){
    const slides=[
      {src:'assets/hero-clinical.webp',alt:'Healthcare specialist preparing a clinical vial',caption:'SAFE PRODUCTS.\nSTRONGER HEALTHCARE SYSTEMS.'},
      {src:'assets/equipment-premium.webp',alt:'Modern hospital patient-monitoring equipment',caption:'ESSENTIAL EQUIPMENT.\nCONFIDENT CLINICAL CARE.'},
      {src:'assets/homepage-clinical.webp',alt:'Modern light-filled professional healthcare facility',caption:'CONNECTED SUPPLY.\nBETTER HEALTHCARE.'}
    ];
    heroDots.forEach((dot,index)=>dot.addEventListener('click',()=>{
      const slide=slides[index];
      heroImage.src=slide.src;
      heroImage.alt=slide.alt;
      const copy=document.querySelector('#hero-visual-caption');
      if(copy)copy.textContent=slide.caption;
      heroDots.forEach((button,i)=>{
        button.setAttribute('aria-pressed',String(i===index));
        button.classList.toggle('is-active',i===index);
      });
    }));
  }
  const mainHeader=document.getElementById('main-header');
  const onScroll=()=>mainHeader.classList.toggle('scrolled',window.scrollY>12);
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  const toggle=document.getElementById('menu-toggle');const nav=document.getElementById('primary-nav');
  const closeMenu=()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');toggle.innerHTML=ico('menu')};
  toggle.addEventListener('click',()=>{const open=!nav.classList.contains('is-open');nav.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');toggle.innerHTML=ico(open?'close':'menu');});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape')closeMenu()});
  const search=document.createElement('dialog');search.className='search-dialog';search.setAttribute('aria-label','Search VERX products');search.innerHTML=`<div class="search-inner"><div class="search-top"><strong>Find a product category</strong><button type="button" id="search-close" aria-label="Close search">${ico('close')}</button></div><p>Search VERX product categories and explore product information.</p><label class="sr-only" for="search-input">Search categories</label><input id="search-input" type="search" placeholder="Try medical equipment, IV or laboratory…"><div id="search-results" class="search-results" aria-live="polite"></div></div>`;document.body.appendChild(search);
  const list=[['Medical Consumables','consumables','gloves syringes bandages'],['Medical Equipment','surgical','patient monitors devices machines'],['IV & Infusion','infusion','infusion administration'],['Diagnostics & Laboratory','diagnostics','test sample lab'],['Wound & Surgical Care','wound-care','dressing instruments'],['Infection Prevention','ppe','hygiene masks protection']];
  const searchInput=search.querySelector('#search-input'),res=search.querySelector('#search-results');
  const draw=()=>{const q=searchInput.value.trim().toLowerCase();res.innerHTML='';const matches=list.filter(x=>(x[0]+' '+x[2]).toLowerCase().includes(q));matches.forEach(x=>{const a=document.createElement('a');a.href='products.html#'+x[1];a.textContent=x[0];a.appendChild(Object.assign(document.createElement('span'),{textContent:'↗'}));res.appendChild(a)});if(!matches.length)res.textContent='No category match. You can ask our team about a specific product.';};
  document.getElementById('search-toggle').addEventListener('click',()=>{draw();search.showModal();searchInput.focus()});
  search.querySelector('#search-close').addEventListener('click',()=>search.close());searchInput.addEventListener('input',draw);
  search.addEventListener('click',e=>{if(e.target===search)search.close()});
  const filter=document.getElementById('product-filter');if(filter){const cards=[...document.querySelectorAll('.listing-grid .product-card')];const count=document.getElementById('filter-count'),empty=document.getElementById('filter-empty');const apply=()=>{const q=filter.value.toLowerCase().trim();let shown=0;for(const card of cards){const yes=(card.dataset.search||'').includes(q);card.hidden=!yes;if(yes)shown++}count.textContent=shown+(shown===1?' category':' categories');empty.hidden=shown!==0;};filter.addEventListener('input',apply);apply();}
  const params=new URLSearchParams(location.search),category=params.get('category');if(category){const categoryNames={consumables:'Medical Consumables',surgical:'Medical Equipment',infusion:'IV & Infusion',diagnostics:'Diagnostics & Laboratory','wound-care':'Wound & Surgical Care',ppe:'Infection Prevention',Documentation:'Regulatory documentation'};const message=document.getElementById('enquiry-message'),type=document.getElementById('enquiry-type');if(message){message.value=`I would like product information or a quotation for ${categoryNames[category]||category}.\n\nRequired specification: \nApproximate quantity: \nDestination market: `;}if(type){type.value=category==='Documentation'?'Regulatory documentation':category==='surgical'?'Medical equipment':'Medical products';}}
})();
