const body = document.body;
const message = document.getElementById("message");
const bigHeart = document.getElementById("bigHeart");

// Function to start the animation
function startAnimation() {
    // Show the message and the big heart
    message.style.opacity = 1;
    bigHeart.style.opacity = 1;

    // Function to create falling hearts dynamically
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "💖";

        // Randomize position and size
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        // Append and remove heart
        body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove after 5 seconds
    }

    // Generate hearts at intervals
    setInterval(createHeart, 300);
}
