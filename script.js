document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');

    // Retrieve saved text from local storage
    const savedText = localStorage.getItem('editorText');
    if (savedText) {
        editor.value = savedText;
    }

    // Save text to local storage on input
    editor.addEventListener('input', function() {
        const text = editor.value;
        localStorage.setItem('editorText', text);
    });
});
