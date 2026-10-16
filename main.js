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

  $$("[data-copy]").forEach((element) => {
    element.textContent = get(data.copy, element.dataset.copy) ?? "";
  });
  $$("[data-copy-aria]").forEach((element) => {
    element.setAttribute("aria-label", get(data.copy, element.dataset.copyAria) ?? "");
  });
  $$("[data-person]").forEach((element) => {
    element.textContent = data.person[element.dataset.person] ?? "";
  });
  $$("[data-person-href]").forEach((element) => {
    element.href = data.person[element.dataset.personHref] ?? "#";
  });
  $$("[data-person-link]").forEach((element) => {
    const key = element.dataset.personLink;
    element.href = data.person.social[key] ?? "#";
    element.target = "_blank";
    element.rel = "noreferrer";
    if (element.dataset.copyAria) {
      element.setAttribute("aria-label", get(data.copy, element.dataset.copyAria));
    }
  });
  $$("[data-person-image]").forEach((image) => {
    image.src = data.person[image.dataset.personImage];
    image.alt = data.person.imageAlt;
  });

  const nav = $("#site-nav");
  nav.innerHTML = data.navigation.map(({ id, label }) =>
    `<a href="#${esc(id)}">${esc(label)}</a>`
  ).join("");
  $("#year").textContent = new Date().getFullYear();

  $("#email-link").textContent = data.person.email;
  $("#email-link").href = `mailto:${data.person.email}`;

  $("#experience-list").innerHTML = data.experience.map((item, index) => `
    <article class="experience-card reveal" style="--delay:${index * 90}ms">
      <div class="experience-meta">
        <span class="card-index">0${index + 1}</span>
        <span class="period">${esc(item.period)}</span>
        <div class="company-mark ${item.logoType === "wordmark" ? "company-wordmark" : ""}">${item.logoImage
          ? `<img src="${esc(item.logoImage)}" width="54" height="54" alt="${esc(item.company)} logo" loading="lazy" />`
          : `<span aria-label="${esc(item.company)} monogram">${esc(item.mark)}</span>`}
        </div>
      </div>
      <div class="experience-main">
        <p class="experience-location">${esc(item.location)}</p>
        <h3>${esc(item.company)}</h3>
        <p class="role">${esc(item.role)}</p>
        <p class="experience-summary">${esc(item.summary)}</p>
        <ul>${item.details.map((detail) => `<li>${esc(detail)}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

  $("#recognition-grid").innerHTML = data.recognition.map((item, index) => `
    <article class="recognition-card reveal" style="--delay:${index * 90}ms">
      <p class="recognition-index">0${index + 1}</p>
      <p class="big-figure"><span>${esc(item.figure)}</span><small>${esc(item.suffix)}</small></p>
      <p class="recognition-label">${esc(item.label)}</p>
    </article>
  `).join("");

  $("#project-list").innerHTML = data.projects.map((item, index) => `
    <article class="project-card reveal">
      <figure class="project-art" aria-label="${esc(data.copy.projects.imagePending)}">
        <span class="art-index">${esc(data.copy.projects.artPrefix)}&nbsp; / &nbsp;0${index + 1}</span>
        <span class="art-orbit" aria-hidden="true"></span>
        <svg class="art-line" viewBox="0 0 520 340" role="img" aria-label="${esc(data.copy.projects.artLabel)}">
          <path d="M22 259 C94 254 97 177 168 186 S247 233 302 147 378 126 420 90 472 79 506 35" />
          <circle cx="168" cy="186" r="5" /><circle cx="302" cy="147" r="5" /><circle cx="420" cy="90" r="5" />
        </svg>
        <span class="art-word">${esc(data.copy.projects.artTitle)}<br /><i>${esc(data.copy.projects.artSubline)}</i></span>
        <span class="art-caption">${esc(data.copy.projects.imagePending)}</span>
      </figure>
      <div class="project-copy">
        <p class="eyebrow">${esc(item.status)} <span>· ${esc(item.period)} · ${esc(item.location)}</span></p>
        <h3>${esc(item.title)}</h3>
        <p class="project-summary">${esc(item.summary)}</p>
        <p>${esc(item.body)}</p>
        <ul class="tag-row">${item.tags.map((tag) => `<li>${esc(tag)}</li>`).join("")}</ul>
        <div class="project-actions">
          <a class="button magnetic" data-magnetic href="${esc(item.link)}" target="_blank" rel="noreferrer">
            <span>${esc(data.copy.projects.liveLabel)}</span><span class="button-arrow" aria-hidden="true">↗</span>
          </a>
          <a class="text-link" href="${esc(item.brief)}" target="_blank" rel="noreferrer">${esc(data.copy.projects.briefLabel)} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  `).join("");

  $("#education-list").innerHTML = data.education.map((item, index) => `
    <article class="education-card reveal" style="--delay:${index * 90}ms">
      <div class="school-mark">
        <img src="${esc(item.logoImage)}" width="64" height="64" alt="${esc(item.school)} logo" loading="lazy" />
      </div>
      <div class="education-main">
        <p class="period">${esc(item.date)}</p>
        <h3>${esc(item.school)}</h3>
        <p class="role">${esc(item.degree)}</p>
        <p class="school-place">${esc(item.place)}</p>
        <details class="coursework">
          <summary>${esc(data.copy.education.coursework)} <span aria-hidden="true">+</span></summary>
          <ul>${item.coursework.map((course) => `<li>${esc(course)}</li>`).join("")}</ul>
          ${item.extras ? `<ul class="education-extras">${item.extras.map((extra) => `<li>${esc(extra)}</li>`).join("")}</ul>` : ""}
        </details>
      </div>
      <span class="education-index">0${index + 1}</span>
    </article>
  `).join("");

  $("#skills-list").innerHTML = Object.entries(data.skills).map(([category, skills], index) => {
    const panelId = `skill-panel-${index + 1}`;
    return `
      <article class="skill-cluster reveal ${index === 0 ? "is-open" : ""}">
        <button class="skill-toggle" type="button" aria-expanded="${index === 0}" aria-controls="${panelId}">
          <span class="skill-number">0${index + 1}</span>
          <span class="skill-category">${esc(category)}</span>
          <span class="skill-symbol" aria-hidden="true">+</span>
        </button>
        <div class="skill-items" id="${panelId}" ${index === 0 ? "" : "hidden"}>
          <ul>${skills.map((skill) => `<li>${esc(skill)}</li>`).join("")}</ul>
        </div>
      </article>
    `;
  }).join("");

  $("#activity-list").innerHTML = data.outside.activities.map((activity) =>
    `<span>${esc(activity)}</span>`
  ).join("");

  const menuButton = $(".menu-button");
  const toggleMenu = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? data.copy.closeMenu : data.copy.menu);
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
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

  const progress = $(".scroll-progress span");
  const hero = $(".hero");
  let scrollFrame = 0;
  const updateScroll = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const scale = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      progress.style.transform = `scaleX(${scale})`;
      const drift = Math.min(window.scrollY, window.innerHeight) * 0.08;
      hero.style.setProperty("--scroll-drift", `${drift}px`);
    });
  };
  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("resize", updateScroll);
  updateScroll();

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
    }, { rootMargin: "-36% 0px -56% 0px" });
    sections.forEach((section) => navObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((element, index) => {
      element.style.setProperty("--delay", `${Math.min(index % 4, 3) * 70}ms`);
      revealObserver.observe(element);
    });
  } else {
    $$(".reveal").forEach((element) => element.classList.add("is-visible"));
  }

  $$(".skill-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") !== "true";
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      button.setAttribute("aria-expanded", String(expanded));
      button.closest(".skill-cluster").classList.toggle("is-open", expanded);
      panel.hidden = !expanded;
    });
  });

  const toast = $(".toast");
  let toastTimeout;
  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2200);
  };
  $("#copy-email").addEventListener("click", async () => {
    if (!navigator.clipboard?.writeText) {
      $(".contact-note").textContent = data.copy.contact.emailError;
      return;
    }
    try {
      await navigator.clipboard.writeText(data.person.email);
      $(".contact-note").textContent = data.copy.contact.copiedEmail;
      showToast(data.copy.contact.copiedEmail);
    } catch (error) {
      console.error("Unable to copy the email address.", error);
      $(".contact-note").textContent = data.copy.contact.emailError;
    }
  });

  if (window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$("[data-magnetic]").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.08;
        button.style.transform = `translate(${x}px, ${y}px)`;
      });
      button.addEventListener("pointerleave", () => {
        button.style.transform = "";
      });
    });
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");
  if (finePointer.matches && !reduceMotion.matches) {
    const cursor = $(".custom-cursor");
    const cursorLabel = $("b", cursor);
    const interactive = $$("a, button, summary");
    let targetX = -100;
    let targetY = -100;
    let currentX = targetX;
    let currentY = targetY;
    let cursorFrame = 0;

    document.body.classList.add("has-custom-cursor");
    const moveCursor = () => {
      currentX += (targetX - currentX) * 0.24;
      currentY += (targetY - currentY) * 0.24;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      if (Math.abs(targetX - currentX) > 0.25 || Math.abs(targetY - currentY) > 0.25) {
        cursorFrame = window.requestAnimationFrame(moveCursor);
      } else {
        cursorFrame = 0;
      }
    };
    document.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!cursorFrame) cursorFrame = window.requestAnimationFrame(moveCursor);
      cursor.classList.add("is-visible");
    }, { passive: true });
    document.addEventListener("pointerleave", () => cursor.classList.remove("is-visible"));
    interactive.forEach((element) => {
      element.addEventListener("pointerenter", () => {
        const label = element.matches("summary")
          ? data.copy.cursorRead
          : element.matches("a") && !element.getAttribute("href")?.startsWith("#")
            ? data.copy.cursorOpen
            : data.copy.cursorExplore;
        cursorLabel.textContent = label;
        cursor.classList.add("is-active");
      });
      element.addEventListener("pointerleave", () => cursor.classList.remove("is-active"));
    });
  }

  let secret = "";
  document.addEventListener("keydown", (event) => {
    if (event.key.length !== 1 || event.altKey || event.ctrlKey || event.metaKey) return;
    secret = (secret + event.key.toLowerCase()).slice(-5);
    if (secret === "cover") {
      document.body.classList.toggle("special-edition");
      showToast(data.copy.specialEdition);
    }
  });
})();
