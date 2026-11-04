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

  // Placeholders ("[ADD …]") are hidden publicly and highlighted with ?draft.
  const draft = new URLSearchParams(window.location.search).has("draft");
  const placeholder = /\s*\[ADD[^\]]*\]/g;
  const text = (value) => draft
    ? esc(value).replace(placeholder, (match) => ` <mark class="placeholder">${match.trim()}</mark>`)
    : esc(String(value).replace(placeholder, "").trim());
  const plain = (value) => String(value).replace(placeholder, "").trim();
  const visible = (value) => draft || plain(value) !== "";
  if (draft) document.documentElement.classList.add("is-draft");

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

  $("#experience-list").innerHTML = data.experience.map((item) => `
    <article class="experience-card reveal">
      <img class="experience-logo" src="${esc(item.logoImage)}" width="48" height="48" alt="${esc(item.company)} logo" loading="lazy" />
      <div class="experience-body">
        <div class="experience-heading">
          <h3>${esc(item.role)}</h3>
          <p class="experience-period">${esc(item.period)}</p>
        </div>
        <p class="experience-meta">${esc(item.company)} · ${esc(item.location)}</p>
        <p class="experience-summary">${text(item.summary)}</p>
        <ul class="experience-points">${item.details.map((detail) => `<li>${text(detail)}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

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
    <p class="work-mock-caption">${esc(data.copy.work.mockCaption)}</p>
  `;
  const labels = data.copy.work;
  $("#work-list").innerHTML = data.projects.filter((item) => draft || !item.placeholder).map((item) => `
    <article class="work-card reveal ${item.placeholder ? "work-card-placeholder" : ""}">
      ${item.mock ? `<div class="work-visual">${mock}</div>` : ""}
      <div class="work-copy">
        <p class="work-meta">${text(item.meta)}</p>
        <h3>${text(item.title)}</h3>
        <dl class="work-steps">
          ${["problem", "approach", "result"].filter((key) => visible(item[key])).map((key) => `
            <div><dt>${esc(labels[key])}</dt><dd>${text(item[key])}</dd></div>
          `).join("")}
          <div><dt>${esc(labels.tools)}</dt><dd><ul class="tag-list">${item.tools.map((tool) => `<li>${text(tool)}</li>`).join("")}</ul></dd></div>
        </dl>
        ${item.link ? `
          <div class="work-actions">
            <a class="button button-primary button-small" href="${esc(item.link)}" target="_blank" rel="noopener">${esc(labels.live)} <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="${esc(item.brief)}" target="_blank" rel="noopener">${esc(labels.brief)} <span aria-hidden="true">↗</span></a>
          </div>
        ` : ""}
      </div>
    </article>
  `).join("");

  $("#recognition-list").innerHTML = data.recognition.map((item) => `
    <div class="recognition-item reveal">
      <p class="recognition-figure">${esc(item.figure)}<span>${esc(item.unit)}</span></p>
      <p class="recognition-label">${esc(item.label)}</p>
    </div>
  `).join("");

  const educationCopy = data.copy.education;
  $("#education-list").innerHTML = data.education.map((item) => `
    <article class="education-card reveal">
      <img class="education-logo" src="${esc(item.logoImage)}" width="48" height="48" alt="${esc(item.school)} logo" loading="lazy" />
      <div class="education-body">
        <div class="experience-heading">
          <h3>${esc(item.school)}</h3>
          <p class="experience-period">${esc(item.date)}</p>
        </div>
        <p class="education-degree">${esc(item.degree)}</p>
        <p class="experience-meta">${esc(item.unit)}</p>
        <p class="education-detail"><span>${esc(educationCopy.coursework)}</span>${item.coursework.map(esc).join(" · ")}</p>
        ${item.involvement ? `<p class="education-detail"><span>${esc(educationCopy.involvement)}</span>${item.involvement.map(esc).join(" · ")}</p>` : ""}
      </div>
    </article>
  `).join("");

  $("#certifications").innerHTML = `
    <h3>${esc(educationCopy.certifications)}</h3>
    <ul>${data.certifications.map((item) => `
      <li><strong>${esc(item.name)}</strong> · ${esc(item.date)} — ${esc(item.detail)}</li>
    `).join("")}</ul>
  `;

  $("#skills-list").innerHTML = Object.entries(data.skills).map(([category, skills]) => `
    <div class="skills-row"><dt>${esc(category)}</dt><dd>${skills.map(esc).join(" · ")}</dd></div>
  `).join("");

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
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
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
