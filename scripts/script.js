const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

async function fetchQuotes() {
    try {
        const response = await fetch('data/quotes.json');

        if (!response.ok) {
            throw new Error(`Failed to fetch quotes: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching quotes:', error);
        return [];
    }
}

async function generateRandomQuote() {
    const quotes = await fetchQuotes();

    if (quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        // Fade out the quote element
        quoteElement.style.opacity = 0;

        // Wait for a short delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Update the quote text
        quoteElement.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;

        // Fade in the quote element
        quoteElement.style.opacity = 1;
    } else {
        quoteElement.textContent = 'Failed to fetch quotes. Please try again later.';
    }
}

generateBtn.addEventListener('click', generateRandomQuote);

// Initial load with a fade-in animation
window.onload = () => {
    quoteElement.style.opacity = 0;
    generateRandomQuote();
    quoteElement.style.transition = 'opacity 1s ease-in-out';
    quoteElement.style.opacity = 1;
};