const profileImg = document.querySelector(".sidebar-img");
const contentBox = document.getElementById("content-box");
const menuItems = document.querySelectorAll(".sidebar li");
const sidebar = document.querySelector(".sidebar");
const glow = document.getElementById("glow");

let lockedSection = "home";
let activeMenuItem = document.querySelector(".sidebar li.active");

let currentColor = { r:110, g:231, b:255 };
let targetColor = { ...currentColor };

const colors = {
  home: { r:110, g:231, b:255 },
  about: { r:192, g:132, b:252 },
  portfolio: { r:244, g:114, b:182 },
  cv: { r:163, g:230, b:53 },
  contact: { r:251, g:146, b:60 }
};

const sections = {

home: `
<h2>Datatekniker-voksenlærling med fokus på infrastruktur</h2>

<p>
  Jeg søger en læreplads i Odense og omegn med primær interesse
  for drift, automation og cloud-baseret infrastruktur.
</p>

<p>
  Samtidig har jeg en naturlig interesse for cybersikkerhed,
  særligt netværksforståelse, stabile systemer og edge-cases.
</p>

<p>
  Som voksenlærling kommer jeg med modenhed, struktur og en stærk
  kommunikationsfaglig baggrund, som styrker samarbejde,
  dokumentation og tværfagligt arbejde.
</p>

<p>
  Derudover kan din virksomhed opnå den højeste kommunale
  løntilskudssats i forbindelse med min ansættelse.
</p>

<p>
  Jeg afslutter Grundforløb 2 på Data- og kommunikationsuddannelsen på SDE, Odense, til juni.
  Og med de obligatoriske kurser i førstehjælp og elementær brandbekæmpelse er jeg plug-and-play.
</p>

<a href="mailto:eliseborgvej@gmail.dk"
   class="contact-card">

   <div class="contact-icon">
     <svg viewBox="0 0 24 24" fill="currentColor">
       <path d="M12 13.5L0 6V18C0 19.1.9 20 2 20H22C23.1 20 24 19.1 24 18V6L12 13.5ZM12 11L24 4H0L12 11Z"/>
     </svg>
   </div>

   <div class="contact-text">
     <strong>Kontakt mig</strong>
     <span>eliseborgvej@gmail.com</span>
   </div>

</a>
`,

about: `
<h2>Om mig</h2>

<p>
  Familiefar til to og vinder af Vestfynsrækken 2025
  med Brylle oldboys’ fodboldhold.
</p>

<p>
  Når tiden er til det, udgiver jeg bøger hos et lille forlag i Odense,
  holder mig aktiv med løbetræning og bygger home-labs
  med Docker og Ansible.
</p>

<p>
  Jeg har en baggrund i kommunikationsbranchen og en kandidat
  i international virksomhedskommunikation.
</p>

<p>
  Nu arbejder jeg målrettet mod en karriere inden for IT,
  hvor jeg kan kombinere mine analytiske og kommunikative kompetencer
  med min passion for automatisering og infrastruktur.
</p>
`,

portfolio: `
<h2>Portfolio</h2>

<div class="portfolio-grid">

  <a href="https://github.com/RVinther/Notebog"
   target="_blank"
   rel="noopener noreferrer"
   class="portfolio-card">

  <div class="contact-icon">
       <svg viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
         0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.754-1.332-1.754
         -1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305
         3.492.998.108-.776.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.93
         0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322
         3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404
         2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176
         .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92
         .43.37.81 1.102.81 2.222 0 1.606-.015 2.898-.015 3.293
         0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12
         24 5.37 18.63 0 12 0z"/>
       </svg>
     </div>

  <div class="portfolio-main">
    <strong>Notebog</strong>
    <span>Python · Værktøj · Skolebrug</span>
  </div>

  <div class="portfolio-action">
    Se på GitHub <span class="pixel-arrow">></span>
  </div>

</a>

  <a href="https://github.com/RVinther/Netdiagnose"
   target="_blank"
   rel="noopener noreferrer"
   class="portfolio-card">

  <div class="contact-icon">
       <svg viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
         0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.754-1.332-1.754
         -1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305
         3.492.998.108-.776.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.93
         0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322
         3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404
         2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176
         .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92
         .43.37.81 1.102.81 2.222 0 1.606-.015 2.898-.015 3.293
         0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12
         24 5.37 18.63 0 12 0z"/>
       </svg>
     </div>

  <div class="portfolio-main">
    <strong>Netværksdiagnose</strong>
    <span>PowerShell · Script · Automation</span>
  </div>

  <div class="portfolio-action">
    Se på GitHub <span class="pixel-arrow">></span>
  </div>

</a>

<a href="https://github.com/RVinther/IP_port_lister"
   target="_blank"
   rel="noopener noreferrer"
   class="portfolio-card">

  <div class="contact-icon">
       <svg viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
         0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.754-1.332-1.754
         -1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305
         3.492.998.108-.776.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.93
         0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322
         3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404
         2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176
         .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92
         .43.37.81 1.102.81 2.222 0 1.606-.015 2.898-.015 3.293
         0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12
         24 5.37 18.63 0 12 0z"/>
       </svg>
     </div>

  <div class="portfolio-main">
    <strong>IP- og port-lister</strong>
    <span>Python · Værktøj · JSON</span>
  </div>

  <div class="portfolio-action">
    Se på GitHub <span class="pixel-arrow">></span>
  </div>

</a>

<a href="https://github.com/RVinther/IP_port_scanner"
   target="_blank"
   rel="noopener noreferrer"
   class="portfolio-card">

  <div class="contact-icon">
       <svg viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
         0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.754-1.332-1.754
         -1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305
         3.492.998.108-.776.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.93
         0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322
         3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404
         2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176
         .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92
         .43.37.81 1.102.81 2.222 0 1.606-.015 2.898-.015 3.293
         0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12
         24 5.37 18.63 0 12 0z"/>
       </svg>
     </div>

  <div class="portfolio-main">
    <strong>IP- og port-scanner</strong>
    <span>Python · Værktøj · Automation</span>
  </div>

  <div class="portfolio-action">
    Se på GitHub <span class="pixel-arrow">></span>
  </div>

</a>

</div>
`,

cv: `
<h2>CV</h2>

<div class="cv-download">
  <a href="Mathias-Vinther-Ravnholt-Nielsen-CV.pdf" download="Mathias-Vinther-Ravnholt-Nielsen-CV.pdf" class="cv-button">
    Download CV med erfaring som PDF
  </a>
</div>

<section class="cv-section">
  <h3>Profil</h3>
  <p>
    Datatekniker-studerende med særligt fokus på automation og cloud-baserede miljøer.
    Jeg motiveres af drift, netværk og cybersikkerhed og arbejder struktureret med at forstå,
    optimere og automatisere systemer fra CLI til infrastruktur.
  </p>
  <p>
    Min baggrund i kommunikation styrker min dokumentationsevne, samarbejde og evne
    til at formidle komplekse tekniske løsninger klart og præcist.
  </p>
</section>

<section class="cv-section">
  <h3>Fokusområder</h3>
  <ul>
    <li>Automation og scripting</li>
    <li>Cloud og container-baseret infrastruktur</li>
    <li>Drift og systemadministration</li>
    <li>Netværk (TCP/IP, DNS, routing)</li>
    <li>Cybersikkerhed</li>
  </ul>
</section>

<section class="cv-section">
<h3>Tekniske kompetencer</h3>
<div class="cv-grid">

  <div class="cv-skill-card">
    <strong>Infrastruktur & Drift</strong>
    <ul>
      <li>Linux (Debian/Ubuntu)</li>
      <li>CLI & systemadministration</li>
      <li>Docker</li>
      <li>Netværksforståelse</li>
    </ul>
  </div>

  <div class="cv-skill-card">
    <strong>Automation & Scripting</strong>
    <ul>
      <li>Bash</li>
      <li>PowerShell</li>
      <li>Python</li>
      <li>Ansible</li>
    </ul>
  </div>

  <div class="cv-skill-card">
    <strong>Værktøjer</strong>
    <ul>
      <li>Git & GitHub</li>
      <li>VS Code</li>
      <li>Vim</li>
      <li>VMware</li>
      <li>Oracle VirtualBox</li>
    </ul>
  </div>

</div>
</section>

<section class="cv-section">
  <h3>Uddannelse</h3>
  <ul>
    <li><strong>Datatekniker</strong> – Syddansk Erhvervsskole (G2)</li>
    <li>Cand.mag.comm – Syddansk Universitet</li>
    <li>Bachelor i Religionsstudier & Historie – Syddansk Universitet</li>
  </ul>
</section>

<section class="cv-section">
  <h3>Relevant erhvervserfaring</h3>
  <ul>
    <li>
      <strong>Kommunikationskonsulent</strong><br>
      Primært web, UX, struktur og tværfagligt samarbejde.
    </li>
    <li>
      <strong>Kommunikationsmedarbejder</strong><br>
      Kampagnestruktur, digitale systemer og analyse.
    </li>
  </ul>
</section>
`,

contact: `
<h2>Kontakt</h2>

<div class="contact-links">

  <a href="https://github.com/RVinther"
     target="_blank"
     rel="noopener noreferrer"
     class="contact-card">

     <div class="contact-icon">
       <svg viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
         0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.754-1.332-1.754
         -1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305
         3.492.998.108-.776.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.93
         0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322
         3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404
         2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176
         .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92
         .43.37.81 1.102.81 2.222 0 1.606-.015 2.898-.015 3.293
         0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12
         24 5.37 18.63 0 12 0z"/>
       </svg>
     </div>

     <div class="contact-text">
       <strong>GitHub</strong>
       <span>github.com/RVinther</span>
     </div>

  </a>

  <a href="https://www.linkedin.com/in/mathias-vinther-ravnholt-nielsen-01048612a/"
     target="_blank"
     rel="noopener noreferrer"
     class="contact-card">

     <div class="contact-icon">
       <svg viewBox="0 0 24 24" fill="currentColor">
         <path d="M4.98 3.5C4.98 5 3.87 6.1 2.4 6.1 1 6.1 0 5 0 3.5S1 1 2.4 1
         c1.47 0 2.58 1.1 2.58 2.5zM.24 8.98h4.32V24H.24zM7.98 8.98h4.14v2.05h.06
         c.58-1.1 2-2.25 4.11-2.25 4.4 0 5.21 2.9 5.21 6.66V24h-4.32v-7.52
         c0-1.8-.03-4.12-2.52-4.12-2.52 0-2.9 1.97-2.9 4v7.64H7.98z"/>
       </svg>
     </div>

     <div class="contact-text">
       <strong>LinkedIn</strong>
       <span>linkedin.com/in/mathias-vinther</span>
     </div>

  <a href="mailto:eliseborgvej@gmail.dk"
   class="contact-card">

   <div class="contact-icon">
     <svg viewBox="0 0 24 24" fill="currentColor">
       <path d="M12 13.5L0 6V18C0 19.1.9 20 2 20H22C23.1 20 24 19.1 24 18V6L12 13.5ZM12 11L24 4H0L12 11Z"/>
     </svg>
   </div>

   <div class="contact-text">
     <strong>Email</strong>
     <span>eliseborgvej@gmail.dk</span>
   </div>

</a>

  </a>

</div>
`
};

function setContent(section) {
  contentBox.style.opacity = 0;

  setTimeout(() => {
    contentBox.innerHTML = sections[section];
    contentBox.style.opacity = 1;
    activateScrollAnimations();
  }, 150);

  targetColor = colors[section];
}

setContent("home");

menuItems.forEach(item => {
  item.addEventListener("click", () => {

    lockedSection = item.dataset.section;

    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    activeMenuItem = item;

    setContent(lockedSection);
  });
});

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    lockedSection = item.dataset.section;

    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    activeMenuItem = item;

    setContent(lockedSection);
  });
});

function activateScrollAnimations() {
  const sections = document.querySelectorAll(".cv-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add("fade-section");
    observer.observe(section);
  });
}

function animateColor() {

  currentColor.r += (targetColor.r - currentColor.r) * 0.05;
  currentColor.g += (targetColor.g - currentColor.g) * 0.05;
  currentColor.b += (targetColor.b - currentColor.b) * 0.05;

  const colorString = `rgb(${currentColor.r},${currentColor.g},${currentColor.b})`;

  glow.style.background = colorString;

  if (activeMenuItem) {
    activeMenuItem.style.color = colorString;
  }

  if (profileImg) {
    profileImg.style.borderColor =
      `rgba(${currentColor.r},${currentColor.g},${currentColor.b},0.6)`;

    profileImg.style.boxShadow =
      `0 0 30px rgba(${currentColor.r},${currentColor.g},${currentColor.b},0.15)`;

    profileImg.style.filter =
      `drop-shadow(0 0 10px rgba(${currentColor.r},${currentColor.g},${currentColor.b},0.1))`;
  }

  requestAnimationFrame(animateColor);
}

animateColor();

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = Array.from({ length: 20 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: 2,
  speedX: (Math.random() - 0.5) * 0.2,
  speedY: (Math.random() - 0.5) * 0.2
}));

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `rgba(${currentColor.r},${currentColor.g},${currentColor.b},0.3)`;

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.fillRect(p.x, p.y, p.size, p.size);
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
