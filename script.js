// Tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons && tabContents) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');

                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.style.display = 'none');

                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const targetContent = document.getElementById(tabId);
                if (targetContent) {
                    targetContent.style.display = 'block';
                }
            });
        });
    }

    // Code snippet copy functionality
    const codeSnippets = document.querySelectorAll('.code-snippet');
    codeSnippets.forEach(snippet => {
        const codeBlock = snippet.querySelector('code');
        if (!codeBlock) return;

        // Create copy button if it doesn't exist
        if (!snippet.querySelector('.copy-btn')) {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            copyButton.textContent = 'Copy';
            snippet.style.position = 'relative';
            snippet.appendChild(copyButton);

            copyButton.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(codeBlock.textContent);
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                    copyButton.textContent = 'Failed to copy';
                }
            });
        }
    });

    // Initialize Prism.js for code highlighting
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});

// Rich Text Editor functionality
document.addEventListener('DOMContentLoaded', () => {
    const editorButtons = document.querySelectorAll('.editor-button');
    const editorContent = document.querySelector('.editor-content');

    if (editorButtons && editorContent) {
        editorButtons.forEach(button => {
            button.addEventListener('click', () => {
                const format = button.getAttribute('data-format');
                
                switch(format) {
                    case 'bold':
                        document.execCommand('bold', false, null);
                        break;
                    case 'italic':
                        document.execCommand('italic', false, null);
                        break;
                    case 'list-ul':
                        document.execCommand('insertUnorderedList', false, null);
                        break;
                    case 'list-ol':
                        document.execCommand('insertOrderedList', false, null);
                        break;
                    case 'image':
                        const url = prompt('Enter image URL:');
                        if (url) {
                            document.execCommand('insertImage', false, url);
                        }
                        break;
                }
                
                button.classList.toggle('active');
            });
        });

        // Focus handling
        editorContent.addEventListener('focus', () => {
            editorContent.closest('.rich-text-editor').style.borderColor = 'var(--border-act)';
        });

        editorContent.addEventListener('blur', () => {
            editorContent.closest('.rich-text-editor').style.borderColor = 'var(--border-def)';
        });
    }
});