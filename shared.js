// ============================================================
//  shared.js  –  navigation & footer
// ============================================================

/**
 * Renders the shared navigation bar
 * @param {string} activePage - The ID of the current active page (e.g., 'home', 'robots')
 */
function renderNav(activePage) {
  const mount = document.getElementById('nav-mount');
  if (!mount) return;

  // Force activePage to be a string and trim it to avoid object/element ID conflicts
  const currentActive = String(activePage || '').trim();

  const pages = [
    { id: 'home',     label: 'Home',          href: 'index.html' },
    { id: 'first',    label: 'What is FIRST?', href: 'first.html' },
    { id: 'robots',   label: 'Robots',         href: 'robots.html' },
    { id: 'outreach', label: 'Outreach',        href: 'outreach.html' },
    { id: 'team',     label: 'Team',            href: 'team.html' },
    { id: 'docs',     label: 'Documents',       href: 'docs.html' },
    { id: 'momentum', label: 'Momentum',        href: 'momentum.html' },
  ];

  const links = pages.map(p => {
    // Use strict equality check
    const isActive = (p.id === currentActive);
    return `<a href="${p.href}" class="nav-link${isActive ? ' active-tab' : ''}" data-page="${p.id}">${p.label}</a>`;
  }).join('');

  const mobileLinks = pages.map(p => {
    const isActive = (p.id === currentActive);
    return `<a href="${p.href}" class="mobile-nav-link${isActive ? ' active-tab' : ''}">${p.label}</a>`;
  }).join('');

  mount.innerHTML = `
    <nav id="shared-nav">
      <a href="index.html" class="nav-logo">
        <img src="GOLD-Logo.webp" alt="" class="nav-icon" onerror="this.style.display='none'">
        <span>QuadX 6299</span>
      </a>
      <div class="nav-links" id="nav-links-desktop">${links}</div>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
    <div class="nav-mobile-menu" id="nav-mobile-menu" aria-hidden="true">
      ${mobileLinks}
    </div>
  `;

  if (!document.getElementById('shared-nav-styles')) {
    const style = document.createElement('style');
    style.id = 'shared-nav-styles';
    style.textContent = `
      /* Container */
#shared-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 55px;
  background: rgba(0, 0, 0, 0.68);
  backdrop-filter: blur(22px) saturate(160%);
  -webkit-backdrop-filter: blur(22px) saturate(160%);
  border-bottom: 1px solid rgba(212, 175, 55, 0.18);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 9999;
  box-sizing: border-box;
}

/* Logo Section */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.nav-icon {
  height: 28px;
  width: auto;
}

.nav-logo span {
  color: #fff;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
}

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 8px; /* Slightly more space for the pill shapes */
}

.nav-link {
  color: rgba(255, 255, 255, 0.7);
  font-family: "Proxima Nova", sans-serif;
  font-weight: 600; /* Slightly lighter weight feels more premium */
  font-size: 0.85rem;
  padding: 7px 18px;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Smoother "liquid" motion */
}

/* Hover State */
.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

/* Active Bubble State */
.nav-link.active-tab {
  color: #FFD700;
  /* Multi-layered background for depth */
  background: linear-gradient(45deg, #ffd74812 1%, #ecb20410 1%, #ffd74811 1%); 
  
  /* Specular highlight (top edge) and subtle inner glow */
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.5), 
    0 2.5px 7px rgba(212, 175, 55, 0.4),
    0 1px 2px rgba(0, 0, 0, 0.1);
    
  /* Removing the harsh outline for a softer, integrated glass feel */
  border: none;
  position: relative;
}


      .nav-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 6px; z-index: 10001; }
      .nav-hamburger span { display: block; width: 24px; height: 2px; background: rgba(255, 255, 255, 0.75); transition: 0.3s; }
      
      .nav-mobile-menu {
        position: fixed; top: 0; right: 0; bottom: 0; width: 280px;
        background: rgba(10, 10, 10, 0.98); backdrop-filter: blur(20px);
        display: flex; flex-direction: column; padding: 80px 40px; gap: 20px;
        transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); z-index: 10000;
      }
      .nav-mobile-menu.open { transform: translateX(0); }
      .mobile-nav-link { color: #fff; text-decoration: none; font-size: 1.2rem; font-weight: 700; }

      @media (max-width: 850px) {
        .nav-links { display: none; }
        .nav-hamburger { display: flex; }
      }
    `;
    document.head.appendChild(style);
  }

  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.onclick = () => {
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    };
  }
}

/**
 * Renders the shared footer
 */
function renderFooter() {
  const mount = document.getElementById('footer-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="section-divider"></div>
    <footer>
      <div class="footer-logo">QuadX 6299</div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="first.html">What is FIRST?</a>
        <a href="robots.html">Robots</a>
        <a href="outreach.html">Outreach</a>
        <a href="team.html">Team</a>
        <a href="docs.html">Documents</a>
        <a href="momentum.html">Momentum</a>
      </div>
      <div class="social-links">
        <a href="https://www.instagram.com/quadx6299/" class="social-link" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
        <a href="https://www.youtube.com/@QUADX-6299" class="social-link" target="_blank" rel="noopener" aria-label="YouTube">
          <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="https://x.com/6299QuadX" class="social-link" target="_blank" rel="noopener" aria-label="X / Twitter">
          <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/viperbots-quadx-2b82a7227/" class="social-link" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
    </footer>
  `;

  if (!document.getElementById('shared-footer-styles')) {
    const style = document.createElement('style');
    style.id = 'shared-footer-styles';
    style.textContent = `
      .section-divider { width: 90%; max-width: 1100px; margin: 0 auto; height: 1px; background: linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent); }
      footer { padding: 50px 40px 36px; display: flex; flex-direction: column; align-items: center; gap: 28px; background: rgba(0,0,0,0.55); width: 100%; }
      .footer-logo { font-size: 1.1rem; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; color: #D4AF37; }
      .footer-links { display: flex; flex-wrap: wrap; gap: 6px 4px; justify-content: center; }
      .footer-links a { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.82rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; transition: color 0.2s; }
      .footer-links a:hover { color: #D4AF37; }
      .social-links { display: flex; gap: 14px; }
      .social-link { width: 42px; height: 42px; border: 1.5px solid rgba(255,255,255,0.18); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); text-decoration: none; transition: 0.25s; }
      .social-link:hover { border-color: #D4AF37; color: #D4AF37; transform: translateY(-3px); box-shadow: 0 0 12px rgba(212,175,55,0.7); }
      .social-link svg { width: 18px; height: 18px; fill: currentColor; }
    `;
    document.head.appendChild(style);
  }
}