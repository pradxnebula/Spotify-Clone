
document.addEventListener("DOMContentLoaded", function () {
    // Array of image and text combinations
    var genreArray = [
        { text: "Podcasts", image: "image1.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Indie", image: "image3.png" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Indie", image: "image3.png" },
        { text: "Indie", image: "image3.png" },
        { text: "Indie", image: "image3.png" },
        { text: "Indie", image: "image3.png" },
        { text: "Indie", image: "image3.png" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Podcasts", image: "image1.jpeg" },
        { text: "Podcasts", image: "image1.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },

        // Add more combinations here
    ];

    // Shuffle the genreArray to randomize the combinations
    shuffleArray(genreArray);

    // Get all elements with the class "genre-img" and "genre-text"
    var imgElements = document.querySelectorAll("#genre-img");
    var textElements = document.querySelectorAll("#genre-text");

    // Function to shuffle an array randomly
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Loop through each card and assign the shuffled combinations
    for (var i = 0; i < imgElements.length; i++) {
        imgElements[i].src = "/images/" + genreArray[i].image;
        textElements[i].textContent = genreArray[i].text;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Code for randomizing text and image combinations
    var genreArray = [
        { text: "Podcasts", image: "image1.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Indie", image: "image3.png" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },
        { text: "Indie", image: "image3.png" },
        { text: "Indie", image: "image3.png" },
        { text: "Indie", image: "image3.png" },
        { text: "Indie", image: "image3.png" },
        { text: "Indie", image: "image3.png" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Music", image: "image2.jpeg" },
        { text: "Podcasts", image: "image1.jpeg" },
        { text: "Podcasts", image: "image1.jpeg" },
        { text: "Ambient", image: "image4.jpeg" },
    ];

    // Array of colors
    var colorArray = [
        "#8a2be2",
        "#8a2be2",
        "#6391b9",
        "#6391b9",
        "#977e49",
        "#358a6e",
        "#9c92b3",
        "#b39292",
        "#7b726f",
        "#494949",
        "#731860",
        "#977e49",
        "#358a6e",
        "#9c92b3",
        "#b39292",
        "#7b726f",
        "#494949",
        "#731860",
        "#00007c",
        "#0f4741",
        "#805007",
        "#805007",
        // Add more color values here
    ];

    // Shuffle the genreArray, textArray, and colorArray to randomize the combinations
    shuffleArray(genreArray);
    shuffleArray(colorArray);

    // Get all elements with the class "genre-img", "genre-text", and "genre-cards"
    var imgElements = document.querySelectorAll("#genre-img");
    var textElements = document.querySelectorAll("#genre-text");
    var cardElements = document.querySelectorAll(".genre-cards");

    // Function to shuffle an array randomly
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Loop through each card and assign the shuffled combinations
    for (var i = 0; i < imgElements.length; i++) {
        imgElements[i].src = "/images/" + genreArray[i].image;
        textElements[i].textContent = genreArray[i].text;
        cardElements[i].style.backgroundColor = colorArray[i];
    }

    // Code for any other functionality can go here
});
