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




document.addEventListener('DOMContentLoaded', function() {
  const homeTab = document.querySelector('.home');
  const searchTab = document.querySelector('.search');
  const upperAdditional = document.querySelector('.upper');
  const lowerAdditional = document.querySelector('.lower');

  homeTab.addEventListener('click', function() {
    homeTab.classList.add('selected');
    homeTab.classList.remove('unselected');
    searchTab.classList.remove('selected');
    searchTab.classList.add('unselected');

    // Apply additional1 to the upper <p> and additional2 to the lower <p>
    upperAdditional.classList.add('additional1');
    upperAdditional.classList.remove('additional2');
    lowerAdditional.classList.add('additional2');
    lowerAdditional.classList.remove('additional1');
  });

  searchTab.addEventListener('click', function() {
    searchTab.classList.add('selected');
    searchTab.classList.remove('unselected');
    homeTab.classList.remove('selected');
    homeTab.classList.add('unselected');

    // Apply additional2 to the upper <p> and additional1 to the lower <p>
    upperAdditional.classList.add('additional2');
    upperAdditional.classList.remove('additional1');
    lowerAdditional.classList.add('additional1');
    lowerAdditional.classList.remove('additional2');
  });
});




document.getElementById("right-arrow").addEventListener("click", function () {
  const container = document.querySelector("#card-grid");
  container.scrollLeft = container.scrollWidth - container.clientWidth;
});

