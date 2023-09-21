// Create arrays of thumbnail URLs, titles, and subtexts
const thumbnails = [
    '/images/thumbnailcopy2.png',
    '/images/thumbnailcopy.png',
    '/images/thumbnail.png',
    // Add more thumbnail URLs here
];

const titles = [
    'Chill Station 1',
    'Chill Station 2',
    'Chill Station 3',
    // Add more titles here
];

// Get all card elements with the same ID "card-thumbnail"
const thumbnailElements = document.querySelectorAll('#card-thumbnail');

// Loop through each card element and assign random data
thumbnailElements.forEach((thumbnailElement) => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * thumbnails.length);

    // Find the parent card element
    const cardElement = thumbnailElement.closest('.card-bg');

    // Find the child elements within the card element by their IDs
    const titleElement = cardElement.querySelector('#card-title');
    const subtextElement = cardElement.querySelector('#card-subtext');

    // Update the content of the child elements with the corresponding data
    thumbnailElement.src = thumbnails[randomIndex];
    titleElement.textContent = titles[randomIndex];
    subtextElement.textContent = subtexts[randomIndex];
});
