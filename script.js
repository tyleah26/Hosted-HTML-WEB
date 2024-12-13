<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="John Doe">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>BlissfulYOU Spa</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="script.js">
    
    <script>
        // JavaScript function for form validation
        function validateForm() {
            var firstName = document.getElementById("first_name").value;
            var lastName = document.getElementById("last_name").value;
            var service = document.getElementById("service").value;
            var rating = document.querySelector('input[name="rating"]:checked');
            var feedback = document.getElementById("feedback").value;

            // Check if all fields are filled
            if (firstName == "" || lastName == "" || service == "") {
                alert("Please fill in all fields.");
                return false;
            }

            // Check if a rating has been selected
            if (!rating) {
                alert("Please select a rating.");
                return false;
            }

            // Check if feedback is provided
            if (feedback == "") {
                alert("Please provide feedback.");
                return false;
            }

            return true; // Allow form submission
        }
    </script>
</head>
<body>

    <header>
        <img src="logo.jpeg" width="100" height="100">
        <p class="highlight-text">A LOCAL SPA HERE, WHERE YOU ENTER FEELING BLUE, BUT LEAVE FEELING LIKE YOU</p>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="booking.html">Booking</a></li>
            <li><a href="review.html">Review</a></li>
        </ul>
    </nav>

    <header>
        <h2>We would love to hear feedback about your experience. Please feel free to provide and leave a review down below!</h2>
    </header>

    <main>
        <!-- Review Form -->
        <form action="submit_feedback.php" method="POST" onsubmit="return validateForm()">
            <label for="first_name">First Name:</label>
            <input type="text" id="first_name" name="first_name" required><br><br>

            <label for="last_name">Last Name:</label>
            <input type="text" id="last_name" name="last_name" required><br><br>

            <label for="service">Service:</label>
            <input type="text" id="service" name="service" required><br><br>

            <label for="rating">Rating:</label>
            <div id="rating">
                <label>
                    <input type="radio" name="rating" value="1" required> ⭐️
                </label>
                <label>
                    <input type="radio" name="rating" value="2" required> ⭐️⭐️
                </label>
                <label>
                    <input type="radio" name="rating" value="3" required> ⭐️⭐️⭐️
                </label>
                <label>
                    <input type="radio" name="rating" value="4" required> ⭐️⭐️⭐️⭐️
                </label>
                <label>
                    <input type="radio" name="rating" value="5" required> ⭐️⭐️⭐️⭐️⭐️
                </label>
            </div><br><br>

            <label for="feedback">Feedback:</label><br>
            <textarea id="feedback" name="feedback" rows="5" cols="40" required></textarea><br><br>

            <button type="submit">Submit Feedback</button>
        </form>
    </main>

    <footer>
        <section class="thank-you-section">
            <p>Thank you for trusting us with your self-care day. We hope to see you again very soon!</p>
            <div class="logos">
                <img src="thank-you-logo.png" alt="Thank You" class="thank-you-logo" width="70" height="50">
                <a href="https://instagram.com/yourprofile" target="_blank">
                    <img src="instagram-logo.png" alt="Instagram" class="instagram-logo" width="30" height="30">
                </a>
            </div>
        </section>

        <p>We appreciate your time and feedback!</p>

        <p>@blissful_you</p>
        Contact Information:
        <p>843-987-6543</p>
        <p>blissfulyou@gmail.com</p>
        <p>Copyright ©2024 | BlissfulYOU</p>
    </footer>

</body>
</html>
