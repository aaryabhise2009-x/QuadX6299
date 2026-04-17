const historyData = [
  {
    year: "2025 – 2026",
    description: "This season was full of ambition and progress. With 6 rookies on the team, we primarily focused on curricula and our own QuadX Leadership Camp to promote learning. We built 2 fully functional robots capable of scoring from the far side with a consistent auto...",
    isWorlds: false,
    events: [
      {
        name: "FTC SWAT League Championships",
        awards: [{ place: "3rd", title: "Inspire Award", isFirst: false }]
      }
    ]
  },
  {
    year: "2024 – 2025",
    description: "Our 2024–2025 season had us taking on four new rookies. We focused on bringing them up to speed. While our robot game was not on par with the previous year, our outreach was great...",
    isWorlds: false,
    events: [
      {
        name: "FTC Central WALL-E Championship",
        awards: [{ place: "2nd", title: "Connect Award", isFirst: false }]
      }
    ]
  },
  {
    year: "2023 – 2024",
    description: "For our 2023–2024 season, we only had two rookies on our team, with the remainder being veterans. Despite not advancing past regionals, we hosted events such as our coding basics camp CodeX...",
    isWorlds: false,
    events: [
      {
        name: "FTC Central WALL-E Championship",
        awards: [{ place: "3rd", title: "Inspire Award", isFirst: false }]
      },
      {
        name: "FTC Central Area Championship",
        awards: [{ place: "3rd", title: "Design Award", isFirst: false }]
      }
    ]
  },
  {
    year: "2022 – 2023",
    description: "The beginning of the season was rough due to little consideration for software in our design process. Thankfully, our team had much experience in judging, which helped us make it to Worlds...",
    isWorlds: true,
    events: [
      {
        name: "FTC World Championship",
        awards: [{ place: "3rd", title: "Design Award", isFirst: false }]
      }
    ]
  },
  {
    year: "2021 – 2022",
    description: "With an almost entirely rookie team and the pandemic's aftermath, the 2021 season was difficult...",
    isWorlds: false,
    events: [
      {
        name: "FTC Texas Central Championship",
        awards: [{ place: "1st", title: "Connect Award", isFirst: true }]
      }
    ]
  },
  {
    year: "2020 – 2021",
    description: "With an almost entirely rookie team and an emerging pandemic, the 2020 season was extremely difficult...",
    isWorlds: false,
    events: [
      {
        name: "FTC League Championship",
        awards: [{ place: "1st", title: "Inspire Award", isFirst: true }]
      }
    ]
  },
  {
    year: "2019 – 2020",
    description: "A team of all veteran members, QuadX had a strong base for 2019–2020. Our season was ultimately cut short due to COVID-19.",
    isWorlds: true,
    events: [
      {
        name: "FTC World Championship",
        awards: [{ place: "", title: "Cancelled – COVID-19", isFirst: false, isUrgent: true }]
      }
    ]
  },
  {
    year: "2018 – 2019",
    description: "With only one team member graduating from the year prior, QuadX had a strong base. We brought home the Inspire Finalist Award from Worlds.",
    isWorlds: true,
    events: [
      {
        name: "FTC World Championship",
        awards: [{ place: "", title: "Inspire Finalist Award", isFirst: true }]
      }
    ]
  },
    {
    year: "2017 – 2018",
    description: "Starting the season with more rookies than veterans, we had a lot of learning to do. Though there were many bumps in the road, we continued in off-season AML and were Winning Alliance First Pick at the AML 'World Championships.'",
    isWorlds: false,
    events: [
      {
        name: "FTC AML Offseason Event #5",
        awards: [{ place: "", title: "Winning Alliance 1st Pick", isFirst: false }]
      },
      {
        name: "FTC Alamo Regional Championship",
        awards: [{ place: "", title: "Finalist Alliance 1st Pick", isFirst: false }]
      }
    ]
  },
  {
    year: "2016 – 2017",
    description: "Using what we'd learned from previous years, we created our masterpiece 'Apollo.' We returned to the World Championships in Houston and won the Design Award for the third year in a row.",
    isWorlds: true,
    events: [
      {
        name: "FTC League Championship",
        awards: [
          { place: "1st", title: "Inspire Award", isFirst: true },
          { place: "", title: "Winning Alliance Captain", isFirst: false }
        ]
      },
      {
        name: "FTC Alamo Regional Championship",
        awards: [{ place: "1st", title: "Inspire Award", isFirst: true }]
      },
      {
        name: "FTC World Championship",
        awards: [{ place: "", title: "PTC Design Award", isFirst: true }]
      }
    ]
  },
  {
    year: "2015 – 2016",
    description: "After having the same team for two years, our structure changed drastically with 6 new rookies. We didn't let these changes stop us from making it back to the World Championships and winning the Design Award for the second year in a row.",
    isWorlds: true,
    events: [
      {
        name: "FTC World Championship",
        awards: [
          { place: "", title: "PTC Design Award", isFirst: true },
          { place: "", title: "Division Finalist Alliance 1st Pick", isFirst: false }
        ]
      }
    ]
  },
  {
    year: "2014 – 2015",
    description: "For our second year together, we built another fast and maneuverable robot, 'X.' We made it back to the World Championship and became the first team from Texas to receive an award — the Design Award!",
    isWorlds: true,
    events: [
      {
        name: "FTC World Championship",
        awards: [
          { place: "", title: "PTC Design Award", isFirst: true },
          { place: "", title: "Finalist Alliance 1st Pick", isFirst: false }
        ]
      }
    ]
  },
  {
    year: "2013 – 2014",
    description: "Essentially our rookie year — everyone was new and nobody had ever been on the Hardware team. Through hard work, creativity, and sheer will, we made it to the World Championship and reached the finals.",
    isWorlds: true,
    events: [
      {
        name: "FTC World Championship",
        awards: [{ place: "", title: "Finalist Alliance 1st Pick", isFirst: true }]
      }
    ]
  }

];

function renderHistory() {
  const container = document.getElementById('history-container');
  if (!container) return; // Error prevention if ID is wrong

  container.innerHTML = historyData.map((item, index) => `
    <div class="history-item glass-effect reveal d${index + 1}">
      <div class="year-header" onclick="toggleAccordion(this.parentElement)">
        <svg class="chevron" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
        <span class="year-text">${item.year}</span>
        ${item.isWorlds ? `
          <span class="worlds-badge glass-effect">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
            Worlds
          </span>` : ''}
      </div>
      <div class="accordion-body">
        <div class="accordion-inner">
          <p class="season-desc">${item.description}</p>
          <div class="awards-section">
            <div class="awards-heading">Awards Won</div>
            ${item.events.map(event => `
              <div class="awards-event">
                <div class="event-name">${event.name}</div>
                <div class="award-pills">
                  ${event.awards.map(award => `
                    <span class="award-pill glass-effect ${award.isFirst ? 'first' : ''}" 
                          style="${award.isUrgent ? 'border-color:rgba(239,68,68,0.4); color:rgba(252,165,165,0.9);' : ''}">
                      ${award.place ? `<span class="place">${award.place}</span>` : ''} ${award.title}
                    </span>`).join('')}
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', renderHistory);
