const leadership = [
    { name: "Tony Ortega", role: "Co-PM · Hardware Lead", type: "leadership", image: null },
    { name: "Amal Madapaty", role: "Co-PM · Software Lead", type: "leadership", image: "Headshots/Amal.webp" },
    { name: "Aarya Bhise", role: "APM · Marketing Lead", type: "leadership", image: "Headshots/Aarya.webp" }
];

const members = [
    { name: "Aiden Giroux", role: "Software", type: "software", image: "Headshots/Aiden.webp" },
    { name: "Alex Ritter", role: "Software", type: "software", image: "Headshots/Alex.webp" },
    { name: "Sarthak Kamble", role: "Software", type: "software", image: "Headshots/Sarthak.webp" },
    { name: "Baran Shafaei", role: "Marketing", type: "marketing", image: "Headshots/Baran.webp" },
    { name: "Andrea Joseph", role: "Marketing", type: "marketing", image: "Headshots/Andrea.webp" },
    { name: "Eeshu Pachigolla", role: "Hardware", type: "hardware", image: "Headshots/Eeshu.webp" },
    { name: "Seyeon Kwon", role: "Hardware", type: "hardware", image: "Headshots/Seyeon.webp" },
    { name: "Akash Katta", role: "Hardware", type: "hardware", image: "Headshots/Akash.webp" },
    { name: "Saachi Arya", role: "Hardware", type: "hardware", image: "Headshots/Saachi.webp" }
];

function createMemberCard(member, index) {
    // Generate the image or the placeholder SVG
    const visual = member.image 
        ? `<img src="${member.image}" alt="${member.name}" onerror="this.style.opacity='0'">`
        : `<div style="height: 270px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.4);">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px; opacity: 0.6;">
              <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
            </svg>
            <span style="font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase; font-weight: 700;">no image currently</span>
          </div>`;

    return `
      <div class="member-card glass-effect reveal d${(index % 8) + 1}">
        ${visual}
        <div class="member-info">
          <h3>${member.name}</h3>
          <span class="role-badge glass-effect ${member.type}">${member.role}</span>
        </div>
      </div>`;
}

function renderTeam() {
    const leadershipGrid = document.querySelector('.leadership-grid');
    const memberGrid = document.querySelector('.member-grid');

    if (leadershipGrid) {
        leadershipGrid.innerHTML = leadership.map((m, i) => createMemberCard(m, i)).join('');
    }
    if (memberGrid) {
        memberGrid.innerHTML = members.map((m, i) => createMemberCard(m, i)).join('');
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderTeam);
