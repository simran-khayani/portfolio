(() => {
  const data = window.portfolioContent;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
  const get = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Placeholders ("[ADD …]") are hidden publicly and highlighted with ?draft.
  const draft = new URLSearchParams(window.location.search).has("draft");
  const placeholder = /\s*\[ADD[^\]]*\]/g;
  const text = (value) => draft
    ? esc(value).replace(placeholder, (match) => ` <mark class="placeholder">${match.trim()}</mark>`)
    : esc(String(value).replace(placeholder, "").trim());
  const visible = (value) => draft || String(value).replace(placeholder, "").trim() !== "";

  $$("[data-copy]").forEach((element) => {
    element.textContent = get(data.copy, element.dataset.copy) ?? "";
  });
  $$("[data-copy-aria]").forEach((element) => {
    element.setAttribute("aria-label", get(data.copy, element.dataset.copyAria) ?? "");
  });
  $$("[data-person]").forEach((element) => {
    const value = data.person[element.dataset.person] ?? "";
    if (!visible(value)) {
      element.remove();
      return;
    }
    element.innerHTML = text(value);
  });
  $$("[data-person-href]").forEach((element) => {
    element.href = data.person[element.dataset.personHref] ?? "#";
  });
  $$("[data-person-link]").forEach((element) => {
    element.href = data.person.social[element.dataset.personLink] ?? "#";
    element.target = "_blank";
    element.rel = "noopener";
  });

  const nav = $("#site-nav");
  nav.innerHTML = data.navigation.map(({ id, label }) =>
    `<a href="#${esc(id)}">${esc(label)}</a>`
  ).join("");
  $("#year").textContent = new Date().getFullYear();

  ["#email-link", "#hero-email"].forEach((selector) => {
    $(selector).textContent = data.person.email;
    $(selector).href = `mailto:${data.person.email}`;
  });

  // Experience: every role is shown as its own card.
  $("#experience-list").innerHTML = data.experience.map((item) => `
    <article class="card experience-card reveal">
      <div class="experience-company">
        <img src="${esc(item.logoImage)}" width="40" height="40" alt="${esc(item.company)} logo" loading="lazy" />
        <span><b>${esc(item.company)}</b><small>${esc(item.location)}</small></span>
        <p class="experience-period">${esc(item.period)}</p>
      </div>
      <div class="experience-body">
        <h3>${esc(item.role)}</h3>
        <p class="experience-summary">${text(item.summary)}</p>
        <ul class="experience-points">${item.details.map((detail) => `<li>${text(detail)}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

  // Selected work: case study split into boxes.
  const labels = data.copy.work;
  const mock = `
    <figure class="work-mock" aria-hidden="true">
      <div class="mock-window">
        <div class="mock-bar"><i></i><i></i><i></i></div>
        <div class="mock-body">
          <div class="mock-side"><b></b><b></b><b></b><b></b></div>
          <div class="mock-main">
            <div class="mock-tiles"><span></span><span></span><span></span></div>
            <div class="mock-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <div class="mock-rows"><b></b><b></b><b></b></div>
          </div>
        </div>
      </div>
    </figure>
    <p class="work-mock-caption">${esc(labels.mockCaption)}</p>
  `;
  $("#work-list").innerHTML = data.projects.filter((item) => draft || !item.placeholder).map((item) => `
    <article class="card work-card reveal ${item.placeholder ? "work-card-placeholder" : ""}">
      <div class="work-top">
        ${item.mock ? `<div class="work-visual">${mock}</div>` : ""}
        <div class="work-intro">
          <p class="work-meta">${text(item.meta)}</p>
          <h3>${text(item.title)}</h3>
          ${item.link ? `
            <div class="work-actions">
              <a class="button button-primary button-small" href="${esc(item.link)}" target="_blank" rel="noopener">${esc(labels.live)} <span aria-hidden="true">↗</span></a>
              <a class="text-link" href="${esc(item.brief)}" target="_blank" rel="noopener">${esc(labels.brief)} <span aria-hidden="true">↗</span></a>
            </div>
          ` : ""}
        </div>
      </div>
      <dl class="work-steps">
        ${[
          ...["problem", "approach", "result"].filter((key) => visible(item[key])).map((key) => [labels[key], text(item[key])]),
          [labels.tools, `<ul class="tag-list">${item.tools.map((tool) => `<li>${text(tool)}</li>`).join("")}</ul>`]
        ].map(([label, body], index) => `
          <div class="step-box"><dt><span>0${index + 1}</span>${esc(label)}</dt><dd>${body}</dd></div>
        `).join("")}
      </dl>
    </article>
  `).join("");

  // Recognition: figures count up once when they scroll into view.
  $("#recognition-list").innerHTML = data.recognition.map((item) => `
    <div class="card recognition-card reveal">
      <p class="recognition-figure"><span class="count" data-count="${esc(item.figure)}">${esc(item.figure)}</span><small>${esc(item.unit)}</small></p>
      <p class="recognition-label">${esc(item.label)}</p>
    </div>
  `).join("");

  // Education: school cards with a coursework toggle.
  const educationCopy = data.copy.education;
  $("#education-list").innerHTML = data.education.map((item, index) => `
    <article class="card education-card reveal">
      <div class="education-top">
        <img class="education-logo" src="${esc(item.logoImage)}" width="48" height="48" alt="${esc(item.school)} logo" loading="lazy" />
        <p class="experience-period">${esc(item.date)}</p>
      </div>
      <h3>${esc(item.school)}</h3>
      <p class="education-degree">${esc(item.degree)}</p>
      <p class="experience-meta">${esc(item.unit)}</p>
      ${item.involvement ? `<p class="education-detail"><span>${esc(educationCopy.involvement)}</span>${item.involvement.map(esc).join(" · ")}</p>` : ""}
      <button class="toggle" type="button" aria-expanded="false" aria-controls="coursework-${index}">
        <span>${esc(educationCopy.showCoursework)}</span><i aria-hidden="true">+</i>
      </button>
      <ul class="tag-list coursework" id="coursework-${index}" hidden>${item.coursework.map((course) => `<li>${esc(course)}</li>`).join("")}</ul>
    </article>
  `).join("");
  $$(".toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      $("span", button).textContent = open ? educationCopy.hideCoursework : educationCopy.showCoursework;
      document.getElementById(button.getAttribute("aria-controls")).hidden = !open;
    });
  });

  $("#certifications").innerHTML = `
    <h3>${esc(educationCopy.certifications)}</h3>
    <ul>${data.certifications.map((item) => `
      <li><strong>${esc(item.name)}</strong><span class="experience-period">${esc(item.date)}</span><p>${esc(item.detail)}</p></li>
    `).join("")}</ul>
  `;

  // Skills: filter chips by area.
  const categories = Object.keys(data.skills);
  const filters = $("#skill-filters");
  filters.innerHTML = [data.copy.skills.all, ...categories].map((category, index) => `
    <button class="filter" type="button" data-filter="${index === 0 ? "all" : esc(category)}" aria-pressed="${index === 0}">${esc(category)}</button>
  `).join("");
  $("#skills-list").innerHTML = Object.entries(data.skills).flatMap(([category, skills]) =>
    skills.map((skill) => `<li class="skill-chip" data-category="${esc(category)}"><span>${esc(skill)}</span><small>${esc(category)}</small></li>`)
  ).join("");
  $$(".filter", filters).forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.filter;
      $$(".filter", filters).forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
      $$(".skill-chip").forEach((chip) => {
        chip.hidden = value !== "all" && chip.dataset.category !== value;
      });
    });
  });

  const menuButton = $(".menu-button");
  const toggleMenu = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    $("span", menuButton).textContent = open ? data.copy.closeMenu : data.copy.menu;
    nav.classList.toggle("is-open", open);
  };
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    toggleMenu(open);
    if (open) $("a", nav).focus();
  });
  $$("a", nav).forEach((link) => link.addEventListener("click", () => toggleMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      toggleMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener("pointerdown", (event) => {
    if (menuButton.getAttribute("aria-expanded") === "true" &&
        !nav.contains(event.target) && !menuButton.contains(event.target)) {
      toggleMenu(false);
    }
  });

  const countUp = (element) => {
    const target = Number.parseInt(element.dataset.count, 10);
    if (reduceMotion || Number.isNaN(target)) return;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / 700, 1);
      element.textContent = Math.round(target * (1 - (1 - progress) ** 3));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    const sections = data.navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        $$("a", nav).forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((section) => navObserver.observe(section));

    // Content is visible by default; only elements still below the fold get the fade-in.
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("is-pending");
        $$(".count", entry.target).forEach(countUp);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add("is-pending");
      revealObserver.observe(element);
    });
  }

  const note = $(".contact-note");
  $("#copy-email").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(data.person.email);
      note.textContent = data.copy.contact.copiedEmail;
    } catch (error) {
      console.error("Unable to copy the email address.", error);
      note.textContent = data.copy.contact.emailError;
    }
  });
})();
