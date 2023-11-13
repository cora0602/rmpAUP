document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the professor name from the input field
    const professorName = document.getElementById('professorName').value.trim();

    // Check if the professor name is not empty
    if (professorName) {
        // Construct the URL for your own search results page
        const searchResultsUrl = 'results.html?professor=' + encodeURIComponent(professorName);

        // Redirect to your search results page
        window.location.href = searchResultsUrl;
    } else {
        // Display an error message or take appropriate action
        alert('Please enter a professor name.');
    }
});
