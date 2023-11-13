document.getElementById('professorSearchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the professor name from the input field
    const professorName = document.getElementById('professorName').value.trim();

    if (professorName) {
        const searchResultsUrl = 'results.html?professor=' + encodeURIComponent(professorName);
        window.location.href = searchResultsUrl;
    } else {
        // Display an error message or take appropriate action
        alert('Please enter a professor name.');
    }
});