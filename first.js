const programs = [
  {
    id: 'fll',
    title: 'FIRST LEGO LEAGUE (FLL)',
    subtitle: 'Discover · Explore · Challenge',
    grades: 'Grades K – 8',
    description: 'FLL introduces STEM concepts to younger students through three sub-programs: <strong>Discover</strong> (PreK–1), <strong>Explore</strong> (grades 2–4), and <strong>Challenge</strong> (grades 4–8). Each uses LEGO robotics to make science and engineering engaging and accessible.',
    image: 'FIRST-Page/FLL-Logo.webp',
    link: 'https://www.firstlegoleague.org/',
    btnClass: 'fll-btn',
    reverse: false
  },
  {
    id: 'ftc',
    title: 'FIRST TECH CHALLENGE (FTC)',
    subtitle: '',
    grades: 'Grades 7 – 12',
    description: 'FTC allows students in grades 7–12 to design, build, and program a robot over the course of the school year. It develops real-world skills in mechanical engineering, software development, project management, and teamwork.',
    image: 'FIRST-Page/FTC-Logo.webp',
    link: 'https://www.firstinspires.org/programs/ftc/',
    btnClass: 'ftc-btn',
    reverse: true // This triggers the "reverse" layout
  },
  {
    id: 'frc',
    title: 'FIRST ROBOTICS COMPETITION (FRC)',
    subtitle: '',
    grades: 'Grades 9 – 12',
    description: 'FRC is the flagship high school robotics competition. Teams of students build full-size robots over a compressed six-week build season. The scale, complexity, and professional mentorship make FRC the most advanced program.',
    image: 'FIRST-Page/FRC-Logo.webp',
    link: 'https://www.firstinspires.org/programs/frc/',
    btnClass: 'frc-btn',
    reverse: false
  }
];

function renderPrograms() {
  const container = document.getElementById('programs-container');
  
  container.innerHTML = programs.map((prog, index) => `
    <div class="glass-card glass-effect reveal delay-${index}">
      <div class="flex-row ${prog.reverse ? 'reverse' : ''}">
        <div class="visual">
          <img src="${prog.image}" alt="${prog.id.toUpperCase()} Logo">
        </div>
        <div class="info">
          <span class="grade-pill">${prog.grades}</span>
          <h2>${prog.title}</h2>
          ${prog.subtitle ? `<h3>${prog.subtitle}</h3>` : ''}
          <p>${prog.description}</p>
          <a href="${prog.link}" class="program-btn glass-effect ${prog.btnClass}" target="_blank" rel="noopener">
            Visit ${prog.id.toUpperCase()} Website
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Run the function when the script loads
renderPrograms();
