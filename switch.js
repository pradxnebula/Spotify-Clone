  // JavaScript function to show/hide content windows
  function showContent(contentId) {
    // Hide all content windows
    const windows = document.querySelectorAll('.main-window');
    windows.forEach(window => {
        window.style.display = 'none';
    });

    // Show the selected content
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}

// Initially show the default content (content-1)
showContent('content-1');