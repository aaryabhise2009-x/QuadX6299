/**
 * Renders the specific outreach initiatives for the 25-26 season
 * Mounts to #outreach-content-mount
 */
function renderOutreachContent() {
  const mount = document.getElementById('outreach-content-mount');
  if (!mount) return;

  mount.innerHTML = `

 <hr class="gold-divider reveal">

    <div class="sub-section-header reveal">
      <h2>Key Initiatives</h2>
      <div class="rule"></div>
    </div>

    <div class="glass-card glass-effect reveal">
      <div class="card-layout">
        <div class="card-content">
          <h3>International Outreach</h3>
          <h2>Rwanda Iniatives</h2>
          <p>We partnered with Team 6210 Stryke to help create 2 teams in Rwanda. We raised $1.5K to buy 2 GoBuilda starter kits to ship to the students there. We also plan to mentor them to prepare them on their robotics journey.</p>
          <div class="tag-cloud">
            <span class="tag glass-effect">Global Impact</span>
            <span class="tag glass-effect">$1.5K Raised</span>
            <span class="tag glass-effect">2 Kits Sent</span>
          </div>
        </div>
        <div class="card-visual">
          <div class="photo-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            Rwanda Project Photo
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card glass-effect reveal">
  <div class="card-layout rev">
    <div class="card-content">
      <h3>Team Creation</h3>
      <h2>Creating Team FTC Viperia 32196</h2>
      <p>QuadX 6299 expanded the FIRST family this year by founding a new FTC team, <strong>Viperia</strong>. We recruited and continue to mentor 7 students, guiding them through their rookie season and sharing our technical knowledge and passion for the game.</p>
      <div class="tag-cloud">
        <span class="tag glass-effect">Mentorship</span>
        <span class="tag glass-effect">Team Creation</span>
        <span class="tag glass-effect">7 Students</span>
      </div>
    </div>
    <div class="card-visual">
      <img src="CAROUSEL/1.webp" alt="Team Viperia Photo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
    </div>
  </div>
</div>

    <hr class="gold-divider reveal">

    <div class="sub-section-header reveal">
      <h2>Community Outreach</h2>
      <div class="rule"></div>
    </div>

    <div class="glass-card glass-effect reveal">
      <div class="card-layout">
        <div class="card-content">
          <h3>Community Impact</h3>
          <h2>Emerson STEM & Christmas Clash</h2>
          <p>We participated in Emerson's STEM day to teach students about circuits and volunteer with running the event. We participating in Team 12596 Copperhead's Christmas Clash to outreach to orphans in our local area, show our faciltiies, and let them drive our robot.</p>
          <div class="tag-cloud">
            <span class="tag glass-effect">Industry Demo</span>
            <span class="tag glass-effect">Team 12596 Collab</span>
            <span class="tag glass-effect">Community Support</span>
          </div>
        </div>
        <div class="card-visual">
          <div class="photo-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            Emerson & Drive Event Photo
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card glass-effect reveal">
      <div class="card-layout rev">
        <div class="card-content">
          <h3>Community Event</h3>
          <h2>7-Hour FLL Scrimmage</h2>
          <p>We hosted an FLL scrimmage in Vandegrift High School to allow 3 FLL teams to compete against each other and gain expereince in gameplay and judging practice. We ran the whole event inlcuding setup and finding people to volunteer for roles.</p>
          <div class="tag-cloud">
            <span class="tag glass-effect">FLL Scrimmage</span>
            <span class="tag glass-effect">7 Hours</span>
            <span class="tag glass-effect">3 Teams</span>
          </div>
        </div>
        <div class="card-visual">
          <div class="photo-placeholder">
      <img src="OUTREACH-HEADERS/25-26:OUTREACH.jpg" alt="Team Viperia Photo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card glass-effect reveal">
      <div class="card-layout">
        <div class="card-content">
          <h3>Public Outreach</h3>
          <h2>5 Local STEM Nights</h2>
          <p>Across 5 separate STEM nights, we reached over 225 people. These events are crucial for early recruitment and spreading the mission of FIRST to elementary and middle school students through interactive demonstrations. We let student's drive our robot to drive their interest in robotics.</p>
          <div class="tag-cloud">
            <span class="tag glass-effect">225+ Engaged</span>
            <span class="tag glass-effect">5 Events</span>
          </div>
        </div>
        <div class="card-visual">
          <div class="photo-placeholder">
      <img src="CAROUSEL/3.webp" alt="Team Viperia Photo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card glass-effect reveal">
      <div class="card-layout rev">
        <div class="card-content">
          <h3>Team Growth</h3>
          <h2>Impulse Summer Camp</h2>
          <p>Our 2-day "Impulse" summer camp attracted 22 students. We taught students about the design process and had them build and code a FTC style intake in just 2 days.</p>
          <div class="tag-cloud">
            <span class="tag glass-effect">22 Students</span>
            <span class="tag glass-effect">2-Day Intensive</span>
          </div>
        </div>
        <div class="card-visual">
          <div class="photo-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            Summer Camp Photo
          </div>
        </div>
      </div>
    </div>

    <hr class="gold-divider reveal">

    <div class="sub-section-header reveal">
      <h2>Industry & Mentorship</h2>
      <div class="rule"></div>
    </div>

    <div class="glass-card glass-effect reveal">
      <div class="card-layout">
        <div class="card-content">
          <h3>Technical Expertise</h3>
          <h2>Expert Guidance</h2>
          <p>To support our technical growth, we've collaborated with a network of 44 professional mentors who help us bridge the gap between classroom theory and real-world engineering.</p>
          <ul>
            <li><strong>Software Engineering:</strong> Discussed real-time control loops and Java optimization with developers from Silicon Labs.</li>
            <li><strong>Mechanical Design:</strong> Received feedback on our drive train stability and center of gravity from Tesla engineers.</li>
            <li><strong>Manufacturing:</strong> Consulted with experts at Tyrex regarding custom material fabrication and part durability.</li>
          </ul>
          <div class="tag-cloud">
            <span class="tag glass-effect">44 Mentors</span>
            <span class="tag glass-effect">STEM Professional Network</span>
          </div>
        </div>
        <div class="card-visual">
          <div class="photo-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            Expert Mentorship Photo
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card glass-effect reveal">
      <div class="card-layout rev">
        <div class="card-content">
          <h3>Field Experience</h3>
          <h2>Industry Tours</h2>
          <p>Learning from the best in the business. Our team went on 7 industry tours, visiting global leaders to see large-scale engineering in action. These tours inspire our own design philosophy and show us the career paths available through FIRST.</p>
          <div class="tag-cloud">
            <span class="tag glass-effect">Tesla</span>
            <span class="tag glass-effect">Apple</span>
            <span class="tag glass-effect">Amazon</span>
            <span class="tag glass-effect">Microchip</span>
            <span class="tag glass-effect">Silicon Labs</span>
          </div>
        </div>
        <div class="card-visual">
          <div class="photo-placeholder">
      <img src="CAROUSEL/2.webp" alt="Team Viperia Photo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
          </div>
        </div>
      </div>
    </div>
  `;
}