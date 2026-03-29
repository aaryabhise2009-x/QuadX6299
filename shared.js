// ============================================================
//  shared.js  –  navigation
// ============================================================

function renderNav(activePage) {
  const mount = document.getElementById('nav-mount');
  if (!mount) return;

  const pages = [
    { id: 'home',     label: 'Home',          href: 'index.html' },
    { id: 'first',    label: 'What is FIRST?', href: 'first.html' },
    { id: 'robots',   label: 'Robots',         href: 'robots.html' },
    { id: 'outreach', label: 'Outreach',        href: 'outreach.html' },
    { id: 'team',     label: 'Team',            href: 'team.html' },
    { id: 'docs',     label: 'Documents',       href: 'docs.html' },
    { id: 'momentum', label: 'Momentum',        href: 'momentum.html' },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.id === activePage ? 'active-tab' : ''}">${p.label}</a>`
  ).join('');

  mount.innerHTML = `
    <nav>
      <a href="index.html" class="logo">
        <img src="GOLD-Logo.webp" alt="" class="nav-icon" onerror="this.style.display='none'">
        <span>QuadX 6299</span>
      </a>
      <div class="nav-links">${links}</div>
    </nav>
  `;

  // Inject nav styles once
  if (!document.getElementById('shared-nav-styles')) {
    const style = document.createElement('style');
    style.id = 'shared-nav-styles';
    style.textContent = `
      nav {
        position: fixed;
        top: 0; left: 0; right: 0;
        height: 55px;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        z-index: 9999;
        box-sizing: border-box;
      }

      nav .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        white-space: nowrap;
      }

      nav .logo .nav-icon {
        height: 28px;
        width: auto;
      }

      nav .logo span {
        color: #fff;
        font-family: 'Proxima Nova', Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 1.1rem;
      }

      nav .nav-links {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      nav .nav-links a {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 0.92rem;
        padding: 6px 12px;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        transition: color 0.2s;
        white-space: nowrap;
      }

      nav .nav-links a:hover {
        color: #FFD700;
      }

      nav .nav-links a.active-tab {
        color: #FFD700;
        border-bottom: 2px solid #FFD700;
      }
    `;
    document.head.appendChild(style);
  }
}
