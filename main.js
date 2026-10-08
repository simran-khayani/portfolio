(() => {
  const data = window.portfolioContent;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]));

  $$('[data-person]').forEach((element) => { const key = element.dataset.person; if (data.person[key]) element.textContent = data.person[key]; });
  $$('[data-person-link]').forEach((element) => { const key = element.dataset.personLink; element.href = data.person.social[key]; });
  $('#email-link').textContent = data.person.email;
  $$('[data-outside]').forEach((element) => { element.textContent = data.outside[element.dataset.outside]; });
  $('#year').textContent = new Date().getFullYear();

  $('#experience-list').innerHTML = data.experience.map((item, index) => `<article class="experience-card reveal" style="--delay:${index * 80}ms"><div class="experience-top"><div class="logo-fallback ${item.accent}">${item.logoImage ? `<img src="${esc(item.logoImage)}" alt="${esc(item.company)} logo" loading="lazy" />` : esc(item.logo)}</div><div><p class="period">${esc(item.period)}</p><h3>${esc(item.company)}</h3><p class="role">${esc(item.role)} <span>· ${esc(item.location)}</span></p></div><span class="card-index">0${index + 1}</span></div><p class="experience-summary">${esc(item.summary)}</p><ul>${item.details.map((detail) => `<li>${esc(detail)}</li>`).join('')}</ul></article>`).join('');
  $('#recognition-grid').innerHTML = data.recognition.map((item, index) => `<article class="recognition-card reveal" style="--delay:${index * 80}ms"><div class="big-figure">${esc(item.figure)}<small>${esc(item.suffix)}</small></div><p>${esc(item.label)}</p></article>`).join('');
  $('#project-list').innerHTML = data.projects.map((item) => `<article class="project-card reveal"><div class="project-visual"><div class="dashboard-placeholder"><span class="placeholder-kicker">project brief / ${esc(item.kicker.split(' · ')[0])}</span><div class="mini-chart"><i></i><i></i><i></i><i></i><i></i></div><strong>AI<br />COMPLIANCE<br /><em>DASHBOARD</em></strong><small>image arriving soon · PRD preserved in Assets/projects</small></div></div><div class="project-copy"><p class="eyebrow">${esc(item.kicker)}</p><h3>${esc(item.title)}</h3><p class="project-summary">${esc(item.summary)}</p><p>${esc(item.body)}</p><div class="tag-row">${item.tags.map((tag) => `<span>${esc(tag)}</span>`).join('')}</div><a class="button magnetic" data-magnetic href="${esc(item.link)}" target="_blank" rel="noreferrer">View live <span>↗</span></a></div></article>`).join('');
  $('#education-list').innerHTML = data.education.map((item, index) => `<article class="education-card reveal"><div class="school-mark">${item.logoImage ? `<img src="${esc(item.logoImage)}" alt="${esc(item.school)} logo" loading="lazy" />` : esc(item.mark)}</div><div><p class="period">${esc(item.date)}</p><h3>${esc(item.school)}</h3><p class="role">${esc(item.degree)}</p><p class="school-place">${esc(item.place)}</p><p class="coursework"><b>Coursework</b> ${esc(item.coursework)}</p>${item.extras ? `<p class="coursework"><b>Along the way</b> ${esc(item.extras)}</p>` : ''}</div><span class="card-index">0${index + 1}</span></article>`).join('');
  $('#skills-list').innerHTML = Object.entries(data.skills).map(([category, skills], index) => `<button class="skill-cluster reveal ${index === 0 ? 'is-open' : ''}" type="button" aria-expanded="${index === 0}"><span class="skill-heading"><b>0${index + 1}</b>${esc(category)}<i>+</i></span><span class="skill-items">${skills.map((skill) => `<em>${esc(skill)}</em>`).join('')}</span></button>`).join('');
  $('#activity-list').innerHTML = data.outside.activities.map((activity) => `<span>${esc(activity)}</span>`).join('');

  const menuButton = $('.menu-button'); const nav = $('#site-nav');
  const toggleMenu = (open) => { menuButton.setAttribute('aria-expanded', open); nav.classList.toggle('is-open', open); document.body.classList.toggle('menu-open', open); };
  menuButton.addEventListener('click', () => toggleMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  $$('nav a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') toggleMenu(false); });

  const progress = $('.scroll-progress span'); const sections = $$('main section[id]');
  const updateScroll = () => { const max = document.documentElement.scrollHeight - window.innerHeight; progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`; };
  window.addEventListener('scroll', updateScroll, { passive: true }); updateScroll();
  const navObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { $$('nav a').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); } }), { rootMargin: '-38% 0px -52% 0px' }); sections.forEach((section) => navObserver.observe(section));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) { const revealObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 }); $$('.reveal').forEach((element) => revealObserver.observe(element)); } else $$('.reveal').forEach((element) => element.classList.add('is-visible'));

  $$('.skill-cluster').forEach((button) => button.addEventListener('click', () => { const open = button.classList.toggle('is-open'); button.setAttribute('aria-expanded', open); }));
  const toast = $('.toast'); $('#copy-email').addEventListener('click', async () => { await navigator.clipboard.writeText(data.person.email); toast.textContent = 'Email copied'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800); });
  if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) { $$('[data-magnetic]').forEach((button) => { button.addEventListener('pointermove', (event) => { const rect = button.getBoundingClientRect(); const x = (event.clientX - rect.left - rect.width / 2) * 0.12; const y = (event.clientY - rect.top - rect.height / 2) * 0.12; button.style.transform = `translate(${x}px, ${y}px)`; }); button.addEventListener('pointerleave', () => { button.style.transform = ''; }); }); }
  $$('[data-draggable]').forEach((sticker) => { let active = false; let startX = 0; let startY = 0; let originX = 0; let originY = 0; sticker.addEventListener('pointerdown', (event) => { active = true; sticker.setPointerCapture(event.pointerId); const rect = sticker.getBoundingClientRect(); startX = event.clientX; startY = event.clientY; originX = rect.left; originY = rect.top; sticker.classList.add('is-dragging'); }); sticker.addEventListener('pointermove', (event) => { if (!active) return; sticker.style.left = `${originX + event.clientX - startX}px`; sticker.style.top = `${originY + event.clientY - startY}px`; sticker.style.right = 'auto'; }); sticker.addEventListener('pointerup', () => { active = false; sticker.classList.remove('is-dragging'); }); });
  let secret = ''; document.addEventListener('keydown', (event) => { secret = (secret + event.key.toLowerCase()).slice(-5); if (secret === 'cover') { document.body.classList.toggle('special-edition'); toast.textContent = 'Special edition unlocked'; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2200); } });
})();
