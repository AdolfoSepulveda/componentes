document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listener to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Find and show corresponding content
            const targetId = button.getAttribute('data-tab');
            const targetContent = document.querySelector(`#${targetId}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Activate first tab by default
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }

    // Add copy buttons to all code snippets
    document.querySelectorAll('.code-snippet').forEach(snippet => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copiar';
        snippet.style.position = 'relative';
        snippet.appendChild(copyButton);

        copyButton.addEventListener('click', async () => {
            const code = snippet.querySelector('code').textContent;
            try {
                await navigator.clipboard.writeText(code);
                copyButton.textContent = '¡Copiado!';
                setTimeout(() => {
                    copyButton.textContent = 'Copiar';
                }, 2000);
            } catch (err) {
                console.error('Error al copiar:', err);
                copyButton.textContent = 'Error';
                setTimeout(() => {
                    copyButton.textContent = 'Copiar';
                }, 2000);
            }
        });
    });
});