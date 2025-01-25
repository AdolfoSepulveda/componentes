document.addEventListener('DOMContentLoaded', () => {
    // Navigation menu functionality
    const menuItems = document.querySelectorAll('.nav-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't prevent default for regular links
            if (!item.getAttribute('data-section')) {
                return;
            }
            
            e.preventDefault();
            
            // Remove active class from all menu items
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Get the section to navigate to
            const section = item.getAttribute('data-section');
            
            // Navigate to the corresponding page
            if (section === 'buttons') {
                window.location.href = 'index.html';
            } else if (section === 'tabs') {
                window.location.href = 'tabs.html';
            }
        });
    });

    // Tab functionality
    const initializeTabs = () => {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabButtons.length === 0) return; // Exit if no tabs found

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                button.classList.add('active');

                // Show corresponding content
                const tabId = button.getAttribute('data-tab');
                if (!tabId) return;

                // Remove active class from all contents
                tabContents.forEach(content => {
                    if (content.id === tabId) {
                        content.classList.add('active');
                        content.style.display = 'block';
                    } else {
                        content.classList.remove('active');
                        content.style.display = 'none';
                    }
                });
            });
        });

        // Initialize first tab as active if none are active
        const activeTab = document.querySelector('.tab-button.active');
        if (!activeTab && tabButtons.length > 0) {
            tabButtons[0].click();
        }
    };

    // Initialize tabs when DOM is loaded
    initializeTabs();
});