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
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            const activeContent = document.getElementById(tabId);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});