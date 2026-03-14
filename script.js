function showPage(pageId) {
    // 1. Hide ALL pages first
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none'; 
    });

    // 2. Show the specific page requested
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        // Use flex for members to keep the grid centered, block for others
        target.style.display = (pageId === 'members') ? 'flex' : 'block';
    }

    // 3. Highlight the correct tab in the top nav
    const navButtons = document.querySelectorAll('.nav-links button');
    navButtons.forEach(btn => {
        btn.classList.remove('active-tab');
        
        // This checks if the button's onclick text contains the pageId
        if (btn.getAttribute('onclick').includes(`'${pageId}'`)) {
            btn.classList.add('active-tab');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Ensure it starts on the home page correctly
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
    document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector('.first-page-wrapper');
    if (wrapper) {
        // Force font on the wrapper and all children
        wrapper.style.setProperty('font-family', '"proxima-nova", sans-serif', 'important');
        const children = wrapper.querySelectorAll('*');
        children.forEach(el => {
            el.style.setProperty('font-family', '"proxima-nova", sans-serif', 'important');
        });
        console.log("Layout forced to Center and Proxima Nova.");
    }
});

});

