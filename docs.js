const documentData = [
  {
    name: "Sponsorship Packet",
    href: "sponsorship-packet.pdf",
    desc: "Learn how your organization can support Team QuadX 6299. Includes sponsorship tiers, team impact data, and branding opportunities.",
    icon: '<path d="M12 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z""")/>><polyline points="14 2 14 8 20 8""")/>><line x1="16" y1="13" x2="8" y2="13""")/>><line x1="16" y1="17" x2="8" y2="17""")/>><polyline points="10 9 9 9 8 9""")/>>',
    delay: "d1"
  },
  {
    name: "Volunteer Guide",
    href: "volunteer.pdf",
    desc: "Everything you need to know about volunteering at FIRST events with QuadX. Includes event roles, expectations, time commitments, and how to sign up.",
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2""")/>><circle cx="9" cy="7" r="4""")/>><path d="M23 21v-2a4 4 0 0 0-3-3.87""")/>><path d="M16 3.13a4 4 0 0 1 0 7.75""")/>>',
    delay: "d2"
  },
  {
    name: "FTC QuadX handbook",
    href: "https://firstinspires.org",
    desc: "A resource we made to help FTC teams with their season. Includes information about building your robot, team management, and outreach.",
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z""")/>><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z""")/>>',
    delay: "d3"
  }
];

function initDocumentCards() {
  const container = document.getElementById('document-container');
  if (!container) return;

  const cardsHTML = documentData.map(doc => `
    <a class="doc-card glass-effect reveal ${doc.delay}" href="${doc.href}" target="_blank" rel="noopener">
      <div class="doc-icon glass-effect">
        <svg viewBox="0 0 24 24">${doc.icon}</svg>
      </div>
      <div class="doc-info">
        <h2 class="doc-name">${doc.name}</h2>
        <p class="doc-desc">${doc.desc}</p>
      </div>
      <div class="doc-footer">
        <span class="doc-format glass-effect">PDF</span>
        <span class="doc-arrow">
          Open
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </div>
    </a>
  `).join('');

  container.innerHTML = cardsHTML;
}

// Run the function
initDocumentCards();
